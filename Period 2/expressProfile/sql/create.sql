CREATE SCHEMA node_db;

CREATE TABLE user (
	user_id INT(11) AUTO_INCREMENT,
    user_name VARCHAR(255),
    position VARCHAR(255),
    PRIMARY KEY (user_id)
);

INSERT INTO user (user_name, position) VALUES ("Mike", "Developer");

SELECT * FROM user;