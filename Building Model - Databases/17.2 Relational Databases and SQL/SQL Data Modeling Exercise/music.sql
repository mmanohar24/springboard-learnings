-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE albums
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  release_date DATE NOT NULL
);

CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  album_id INTEGER REFERENCES albums(id)
);

CREATE TABLE producers
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE artists
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE song_producers
(
  song_id INTEGER REFERENCES songs(id),
  producer_id INTEGER REFERENCES producers(id)
);

CREATE TABLE song_artists
(
  song_id INTEGER REFERENCES songs(id),
  artist_id INTEGER REFERENCES artists(id)
);

INSERT INTO albums (release_date, name)
VALUES
('04-15-1997', 'Middle of Nowhere'),
('10-31-1975', 'A Night at the Opera'),
('11-14-1995', 'Daydream'),
('09-27-2018', 'A Star Is Born'),
('08-21-2001', 'Silver Side Up'),
('10-20-2009', 'The Blueprint 3'),
('12-17-2013', 'Prism'),
('06-21-2011', 'Hands All Over'),
('05-14-2002', 'Let Go'),
('11-07-1999', 'The Writing''s on the Wall');

INSERT INTO songs (title, duration_in_seconds, album_id)
VALUES
('MMMBop', 238, 1),
('Bohemian Rhapsody', 355, 2),
('One Sweet Day', 282, 3),
('Shallow', 216, 4),
('How You Remind Me', 223, 5),
('New York State of Mind', 276, 6),
('Dark Horse', 215, 7),
('Moves Like Jagger', 201, 8),
('Complicated', 244, 9),
('Say My Name', 240, 10);

INSERT INTO artists (name)
VALUES
('Hanson'), 
('Queen'),
('Mariah Carey'),
('Boyz II Men'),
('Lady Gaga'),
('Bradley Cooper'),
('Nickelback'),
('Jay Z'),
('Alicia Keys'),
('Katy Perry'),
('Juicy J'),
('Maroon 5'),
('Christina Aguilera'),
('Avril Lavigne'),
('Destiny''s Child');

INSERT INTO producers (name)
VALUES
('Dust Brothers'),
('Stephen Lironi'),
('Roy Thomas Baker'),
('Walter Afanasieff'),
('Benjamin Rice'),
('Rick Parashar'),
('Al Shux'),
('Max Martin'),
('Cirkut'),
('Shellback'),
('Benny Blanco'),
('The Matrix'),
('Darkchild');

INSERT INTO song_artists (song_id, artist_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(3, 4),
(4, 5),
(4, 6),
(5, 7),
(6, 8),
(6, 9),
(7, 10),
(7, 11),
(8, 12),
(8, 13),
(9, 14),
(10, 15);


INSERT INTO song_producers (song_id, producer_id)
VALUES
(1, 1),
(1,2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7,8),
(7,9),
(8, 10),
(8, 11),
(9, 12),
(10, 13);