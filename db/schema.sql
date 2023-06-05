CREATE DATABASE adhd_db;
\c adhd_db

CREATE TABLE users(
    userId SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    passwordDigest TEXT
);
DROP TABLE users;
SELECT* FROM users;

CREATE TABLE lists(
    listId SERIAL PRIMARY KEY,
    userId INT,
    name TEXT,
    description TEXT
);
DROP TABLE lists;
SELECT* FROM lists;

CREATE TABLE tasks(
    taskId SERIAL PRIMARY KEY,
	listId INT,
    taskName TEXT,
    description TEXT,
	dueDate DATE,
	priorityLevel INTEGER,
	status text
);
DROP TABLE tasks;
SELECT* FROM tasks;