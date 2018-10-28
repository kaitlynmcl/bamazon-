DROP DATABASE IF EXISTS clothing;
CREATE database clothing;

USE clothing;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price decimal(2,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt", "Tops", 5.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jumper", "Tops", 15.99, 99);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Tops", 25.99, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jacket", "Tops", 35.99, 97);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Raincoat", "Tops", 45.99, 96);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shorts", "Bottoms", 25.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tights", "Bottoms", 15.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "Bottoms", 35.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jeans", "Bottoms", 45.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skirt", "Bottoms", 55.99, 30);
