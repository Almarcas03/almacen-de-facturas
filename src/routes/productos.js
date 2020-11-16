const router = require('express').Router();

const controlador = require('../controllers/controladorProductos');

router.get('/', controlador.list);
router.post('/add', controlador.save);
router.get('/update/:id', controlador.edit);
router.post('/update/:id', controlador.update);
router.get('/delete/:id', controlador.delete1);
router.post('/check', controlador.check);
router.get('/check', controlador.check);
router.post('/renderF', controlador.renderF);
router.get('/ign/:id', controlador.ign);
router.get('/calc', controlador.calc);

module.exports = router;

