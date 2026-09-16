
DROP DATABASE IF EXISTS reddit_db;
CREATE DATABASE reddit_db;
\c reddit_db

CREATE TABLE users 
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(15) UNIQUE NOT NULL,
  password VARCHAR(20) NOT NULL
);


CREATE TABLE subreddits
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users ON DELETE SET NULL,
  name VARCHAR(15) NOT NULL,
  description TEXT,
  subscribers INTEGER CHECK (subscribers > 0) DEFAULT 10,
  is_private BOOLEAN DEFAULT false
);

CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users ON DELETE CASCADE,
  comment_text TEXT NOT NULL
);







INSERT INTO users (username, password)
VALUES
('lewis44','roscoe'),
('max03','redbull');

INSERT INTO subreddits (name, user_id)
VALUES
('Lewis Hamilton', 1),
('Max Verstappan', 2);

INSERT INTO comments (user_id, comment_text)
VALUES
(2,'Its simply lovely'),
(2, 'I am a 4 time world champion'),
(1, 'Its hammer time');











-- CREATE TABLE comments 
-- (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users ON DELETE CASCADE,
--   comment_text TEXT NOT NULL
-- );

-- CREATE TABLE subreddits 
-- (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users ON DELETE SET NULL,
--   name VARCHAR(15) NOT NULL,
--   description TEXT,
--   subscribers INTEGER CHECK (subscribers > 0) DEFAULT 1,
--   is_private BOOLEAN DEFAULT false
-- );

-- CREATE TABLE posts
-- (
--   title TEXT,
--   username TEXT,
--   link TEXT
-- );