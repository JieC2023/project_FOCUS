CREATE DATABASE adhd_db;
\c adhd_db

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE lists(
    list_id SERIAL PRIMARY KEY,
    user_id INT,
    name TEXT,
    description TEXT
);

CREATE TABLE tasks(
    task_id SERIAL PRIMARY KEY,
	list_id INT,
    task_name TEXT,
    description TEXT,
	due_date DATE,
	priority_level INTEGER,
	status text
);