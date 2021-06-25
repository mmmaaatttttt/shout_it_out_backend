DROP DATABASE IF EXISTS shout_it_out;
CREATE DATABASE shout_it_out;

\c shout_it_out;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  title text UNIQUE NOT NULL
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  answer_text text NOT NULL,
  category_id integer REFERENCES categories(id) ON DELETE CASCADE
);
