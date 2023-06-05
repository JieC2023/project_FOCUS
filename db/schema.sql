-- To create database:
CREATE DATABASE adhd_db;
\c adhd_db

-- To reset tables run this command:
DROP TABLE users, lists, tasks;
-- Then create as below.

-- To create tables, just run this:
CREATE TABLE users(
    "userId" SERIAL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "passwordDigest" TEXT
);

CREATE TABLE lists(
    "listId" SERIAL PRIMARY KEY,
    "userId" INT,
    "name" TEXT,
    "description" TEXT
);

CREATE TABLE tasks(
    "taskId" SERIAL PRIMARY KEY,
    "listId" INT,
    "taskName" TEXT,
    "description" TEXT,
    "dueDate" DATE,
    "priorityLevel" INTEGER,
    "status" text
);

-- NOTE: Unless enclosed in "quotes", identifiers (such as table & column names) will be forced to lower case.
