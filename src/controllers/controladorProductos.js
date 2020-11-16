const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM productos', (err, rows) => {
     if (err) {
      res.json(err);
     }
     res.render('productos', {
        data: rows
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, conn) => {
    const query = conn.query('INSERT INTO productos set ?', data, (err, rows) => {
      console.log(rows)
      res.redirect('/');
    })
  })
  req.getConnection((err, conn) => {
    const query = conn.query('INSERT INTO factura set ?', data, (err, rows) => {
      console.log(rows)
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM productos WHERE id = ?", [id], (err, rows) => {
      res.render('productos_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newproductos = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE productos set ? where id = ?', [newproductos, id], (err, rows) => {
    res.redirect('/');
    });
  });
};

controller.delete1 = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM productos WHERE id = ?', [id], (err, rows) => {
      req.getConnection((err, conn) => {
        conn.query('DELETE FROM factura WHERE id = ?', [id], (err, rows) => {
          res.redirect('/');
        });
      });
    });
  });
}

controller.check = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM factura", [id], (err, rows) => {
      res.render('check', {
        data: rows
      });
    });
  });
};

controller.ign = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM factura WHERE id = ?', [id], (err, rows) => {
      res.redirect('/check');
    });
  });
}

controller.renderF = (req, res) => {
  const client = req.body;
  console.log([client]);
  req.getConnection((err, conn) => {
      conn.query(`SELECT * FROM factura WHERE cliente = ?`,client.cliente, (err, rows) => {
        console.log(rows);
        if (err) res.json(err);
        res.render('renderF', {
          data: rows
        });
      });
    });
};
controller.calc = (req, res) => {
  const data = req.params;
  console.log(data);
}

module.exports = controller;