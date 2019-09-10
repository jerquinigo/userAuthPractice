DROP DATABASE IF EXISTS user_auth_practice;
CREATE DATABASE user_auth_practice;

\c user_auth_practice


create table users(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  username VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
  profile_pic VARCHAR
);


INSERT INTO users(name, username,password, profile_pic) VALUES('natalie', 'nlie', 'pass@123','https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' );
