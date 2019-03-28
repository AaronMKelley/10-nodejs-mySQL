DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (255),
    department_name VARCHAR (255),
    price DECIMAL (6,2) NOT NULL,
    stock_quantity INT NOT NULL,
    product_sales INT NOT NULL,
    PRIMARY KEY (id)
);

- CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR (255),
    over_head_costs INT NOt NULL,
    FOREIGN KEY department_name REFRERENCES products(department_name),
    PRIMARY KEY (id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity,product_sales)
VALUES ("razor","health",12.99,4000,0),
("baseball bat","sports",25.49,563,0),
("throw rug","home decor",149.99,700,0),
("toothpaste","heath",4.99,10000,0),
("xbox","video games",299.99,1000,0),
("tube socks","apparel",10.99,50198,0),
("popcorn","food",2.99,876,0),
("cheesepuffs","food",3.99,78651,0),
("running shoes","apparel",64.99,3452,0),
("dictionary","books",13.99,13,0);


