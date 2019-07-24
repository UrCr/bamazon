CREATE database Bamazon;

USE bamazon

CREATE TABLE products(
Item_id INTEGER(20) AUTO_INCREMENT.
product_name VARCHAR(110) NOT NULL
department_name VARCHAR(50) NOT NULL
price DECIMAL(10,3) NOT NULL
stock_quantity INTEGER(20) NOT NULL
primary key(Item_id)
);