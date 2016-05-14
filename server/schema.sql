CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  text VARCHAR(200),
  FOREIGN KEY(user_id) REFERENCES users(id),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY(id)
);


-- CREATE TABLE rooms (
--    Describe your table here.  
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

