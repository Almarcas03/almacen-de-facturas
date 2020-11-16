-- to create a new database
CREATE DATABASE Productos;

-- to use database
use Productos;

-- creating a new table
CREATE TABLE Productos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio INT(15),
  cantidad INT(15),
  cliente VARCHAR(50) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe Productos;

-- to create a new database
-- CREATE DATABASE Factura;

-- to use database
-- use Factura;

-- creating a new table
CREATE TABLE Factura (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio INT(15),
  cantidad INT(15),
  cliente VARCHAR(50) NOT NULL,
);



-- to describe table
describe Factura;

CREATE TABLE client (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

-- to show all tables
show tables;

-- to describe table
describe client;