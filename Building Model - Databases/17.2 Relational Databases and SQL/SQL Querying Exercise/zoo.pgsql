-- SQL ZOO

-- SELECT Basics

-- Population of Germany
SELECT population FROM world WHERE name = 'Germany';

-- Show the name and the population for 'Sweden', 'Norway' and 'Denmark'.
SELECT name, population FROM world
WHERE name IN ('Sweden', 'Norway', 'Denmark');

-- show the country and the area for countries with an area between 200,000 and 250,000.
SELECT name, area FROM world
WHERE area BETWEEN 200000 AND 250000;


-- SELECT Names

-- Find the country that start with Y
SELECT name FROM world
WHERE name LIKE 'Y%';

-- Find the country that end with Y
SELECT name FROM world
WHERE name LIKE '%Y';

-- Find the countries that contain the letter X
SELECT name FROM world
WHERE name LIKE '%X%';

-- Find the countries that end with land
SELECT name FROM world
WHERE name LIKE '%land';

-- Find the countries that start with C and end with ia
SELECT name FROM world
WHERE name LIKE 'C%ia';

-- Find the country that has oo in the name
SELECT name FROM world
WHERE name LIKE '%oo%';

-- Find the countries that have three or more a in the name
SELECT name FROM world
WHERE name LIKE '%a%a%a%';

-- FInd the countries that have "t" as the second character
SELECT name FROM world
WHERE name LIKE '_t%'
ORDER BY name;

-- Find the countries that have two "o" characters separated by two others.
SELECT name FROM world
WHERE name LIKE '%o__o%';

-- FInd the countries that have exactly four characters
SELECT name FROM world
WHERE LENGTH(name) = 4;

/*
    HARDER QUESTIONS
*/

-- Find the country where the name is the capital city
SELECT name FROM world
WHERE name = capital;

-- Find the country where the capital is the country plus "City".
SELECT name FROM world
WHERE capital = concat( name, ' City');

-- Find the capital and the name where the capital includes the name of the country.
SELECT capital, name FROM world
WHERE capital LIKE CONCAT ('%', name, '%');

-- Find the capital and the name where the capital is an extension of name of the country.
SELECT capital, name FROM world
WHERE capital LIKE CONCAT (name , '_%');

-- Show the name and the extension where the capital is a proper (non-empty) extension of name of the country.
SELECT name, REPLACE(capital, name, '') AS extension 
FROM world
WHERE capital LIKE concat(name, '_%');

/*
SELECT from World
*/

-- show the name, continent and population of all countries.
SELECT name, continent, population FROM world;

-- Show the name for the countries that have a population of at least 200 million.
SELECT name FROM world 
WHERE population >= 200000000;

-- Give the name and the per capita GDP for those countries with a population of at least 200 million.
SELECT name, gdp/ population AS per_capita_GDP FROM world
WHERE population >= 200000000;

-- Show the name and population in millions for the countries of the continent 'South America'. Divide the population by 1000000 to get population in millions.
SELECT name, population / 1000000 AS population_millions  FROM world
WHERE continent = 'South America';

-- Show the name and population for France, Germany, Italy
SELECT name, population FROM world 
WHERE name IN ('France', 'Germany', 'Italy');

-- Show the countries which have a name that includes the word 'United'
SELECT name FROM world
WHERE name LIKE 'United%';

-- Show the countries that are big by area or big by population. Show name, population and area.
SELECT name, population, area FROM world
WHERE area > 3000000 OR population > 250000000;

/*
Exclusive OR (XOR). 
Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. 
Show name, population and area.
*/

-- MySQL Command
SELECT name, population, area FROM world
WHERE area > 3000000 XOR population > 250000000;

-- PostgreSQL Command
SELECT name, population, area FROM world
WHERE ( area > 3000000 AND NOT population > 250000000 ) OR
( population > 250000000 AND NOT area > 3000000);

/*
Show the name and population in millions and the GDP in billions for the countries of the continent 'South America'. 
Use the ROUND function to show the values to two decimal places.
*/

SELECT name, ROUND(population/1000000, 2) AS population_millions, ROUND(gdp/1000000000, 2) AS gdp_billions FROM world
WHERE continent = 'South America';

/*
Show the name and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros).
Round this value to the nearest 1000.
Show per-capita GDP for the trillion dollar countries to the nearest $1000.
*/

SELECT name, ROUND(gdp/population, -3) AS gdp_nearest_thousands FROM world
WHERE gdp >= 1000000000000;

-- Show the name and capital where the name and the capital have the same number of characters.
SELECT name, capital FROM world
WHERE LENGTH(name) = LENGTH(capital);

-- Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word.
SELECT name, capital FROM world
WHERE LEFT(name, 1) = LEFT(capital, 1) 
AND name <> capital;

/*
Equatorial Guinea and Dominican Republic have all of the vowels (a e i o u) in the name. 
They don't count because they have more than one word in the name.

Find the country that has all the vowels and no spaces in its name.

You can use the phrase name NOT LIKE '%a%' to exclude characters from your results.
The query shown misses countries like Bahamas and Belarus because they contain at least one 'a'
*/

SELECT name FROM world
WHERE name LIKE '%a%'
AND name LIKE '%e%'
AND name LIKE '%i%' 
AND name LIKE '%o%' 
AND name LIKE '%u%' 
AND name NOT LIKE '% %';


/*
    SELECT FROM NOBEL
*/

-- Change the query shown so that it displays Nobel prizes for 1950.
SELECT yr, subject, winner FROM nobel
WHERE yr = 1950;

-- Show who won the 1962 prize for literature.
SELECT winner FROM nobel
WHERE yr = 1962 AND subject = 'Literature';

-- Show the year and subject that won 'Albert Einstein' his prize.
SELECT yr, subject FROM nobel
WHERE winner = 'Albert Einstein';

-- Give the name of the 'Peace' winners since the year 2000, including 2000.
SELECT winner FROM nobel
WHERE subject = 'Peace' AND yr >= 2000;

-- Show all details (yr, subject, winner) of the literature prize winners for 1980 to 1989 inclusive.
SELECT yr, subject, winner FROM nobel
WHERE subject = 'Literature' AND 
yr BETWEEN 1980 AND 1989;

/*
Show all details of the presidential winners:

Theodore Roosevelt
Thomas Woodrow Wilson
Jimmy Carter
Barack Obama
*/

SELECT * FROM nobel
WHERE winner IN ('Theodore Roosevelt', 'Thomas Woodrow Wilson', 'Jimmy Carter', 'Barack Obama');

-- Show the winners with first name John
SELECT winner FROM nobel
WHERE winner LIKE 'John%';

-- Show the year, subject, and name of physics winners for 1980 together with the chemistry winners for 1984.
SELECT * FROM nobel
WHERE ( subject = 'Physics' AND yr = 1980) OR ( subject = 'Chemistry' AND yr = 1984);

-- Show the year, subject, and name of winners for 1980 excluding chemistry and medicine
SELECT * FROM nobel
WHERE yr = 1980 AND subject NOT IN ('Chemistry', 'Medicine');

/*
Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910)
together with winners of a 'Literature' prize in a later year (after 2004, including 2004)
*/

SELECT * FROM nobel
WHERE ( subject = 'Medicine' AND yr < 1910) OR
( subject = 'Literature' AND yr >= 2004);

-- Find all details of the prize won by PETER GRÜNBERG
SELECT * FROM nobel
WHERE winner = 'PETER GRÜNBERG';

/*
Find all details of the prize won by EUGENE O'NEILL

Escaping single quotes
You can't put a single quote in a quote string directly.
You can use two single quotes within a quoted string.
*/

SELECT * FROM nobel
WHERE winner = 'EUGENE O''NEILL';

/*
List the winners, year and subject where the winner starts with Sir.
Show the the most recent first, then by name order.
*/

SELECT winner, yr, subject FROM nobel
WHERE winner LIKE 'Sir%' ORDER BY yr DESC, winner;

/*
The expression subject IN ('chemistry','physics') can be used as a value - it will be 0 or 1.

Show the 1984 winners and subject ordered by subject and winner name; but list chemistry and physics last.
*/

SELECT winner, subject FROM nobel
WHERE yr = 1984
ORDER BY
CASE WHEN subject IN ('Chemistry', 'Physics') THEN 1
ELSE 0
END,
subject, winner

/*
    SUM AND COUNT
*/

-- Show the total population of the world.
SELECT SUM(population) FROM world;

-- List all the continents - just once each.
SELECT DISTINCT continent FROM world;

-- Give the total GDP of Africa
SELECT SUM(gdp) as africa_gdp FROM world 
WHERE continent = 'Africa';

-- How many countries have an area of at least 1000000
SELECT COUNT(name) AS big_area FROM world 
WHERE area >= 1000000;

-- What is the total population of ('Estonia', 'Latvia', 'Lithuania')
SELECT SUM(population) AS total_population FROM world 
WHERE name IN ('Estonia', 'Latvia', 'Lithuania');

-- For each continent show the continent and number of countries.
SELECT continent, COUNT(name) AS number_of_countries FROM world 
GROUP BY continent;

-- For each continent show the continent and number of countries with populations of at least 10 million.
SELECT continent, COUNT(name) AS number_of_countries FROM world 
WHERE population >= 10000000 GROUP BY continent;

-- List the continents that have a total population of at least 100 million.
SELECT continent FROM world 
GROUP BY continent HAVING SUM(population) >= 100000000;

/*
    SQL JOINS
*/

/*
1. The first example shows the goal scored by a player with the last name 'Bender'. The * says to list all the columns in the table - a shorter way of saying matchid, teamid, player, gtime

Modify it to show the matchid and player name for all goals scored by Germany. To identify German players, check for: teamid = 'GER'
*/

SELECT matchid, player FROM goal 
WHERE teamid = 'GER';

/*
2. From the previous query you can see that Lars Bender's scored a goal in game 1012. Now we want to know what teams were playing in that match.

Notice in the that the column matchid in the goal table corresponds to the id column in the game table. We can look up information about game 1012 by finding that row in the game table.

Show id, stadium, team1, team2 for just game 1012
*/
SELECT id, stadium, team1, team2 FROM game 
WHERE id = 1012;

-- 3. Modify it to show the player, teamid, stadium and mdate for every German goal.
SELECT go.player, go.teamid, ga.stadium, ga.mdate FROM goal go 
JOIN game ga ON go.matchid = ga.id WHERE go.teamid = 'GER'; 

-- 4. Show the team1, team2 and player for every goal scored by a player called Mario player LIKE 'Mario%'
SELECT ga.team1, ga.team2, go.player FROM game ga 
JOIN goal go ON ga.id = go.matchid WHERE player LIKE 'Mario%';

-- 5. Show player, teamid, coach, gtime for all goals scored in the first 10 minutes gtime<=10
SELECT go.player, go.teamid, e.coach, go.gtime FROM goal go 
JOIN eteam e ON go.teamid = e.id WHERE go.gtime <= 10;

-- 6. List the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.
SELECT ga.mdate, e.teamname FROM game ga 
JOIN eteam e ON ga.team1 = e.id WHERE e.coach = 'Fernando Santos';

-- 7. List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'
SELECT go.player FROM goal go 
JOIN game ga ON go.matchid = ga.id WHERE ga.stadium = 'National Stadium, Warsaw';

-- 8. Instead show the name of all players who scored a goal against Germany.
SELECT DISTINCT go.player FROM game ga JOIN goal go ON ga.id = go.matchid
WHERE (ga.team1 = 'GER' OR ga.team2 = 'GER') AND go.teamid!= 'GER';

-- 9. Show teamname and the total number of goals scored.
SELECT e.teamname, COUNT(go.teamid) FROM eteam e 
JOIN goal go ON e.id = go.teamid GROUP BY e.teamname

-- 10. Show the stadium and the number of goals scored in each stadium.
SELECT ga.stadium, COUNT(go.teamid) AS number_of_goals FROM game ga 
JOIN goal go ON ga.id = go.matchid GROUP BY ga.stadium;

-- 11. For every match involving 'POL', show the matchid, date and the number of goals scored.
SELECT ga.id, ga.mdate, COUNT(go.matchid) AS goals_scored FROM game ga 
JOIN goal go ON ga.id = go.matchid 
WHERE ga.team1 = 'POL' OR ga.team2 = 'POL' GROUP BY ga.id, ga.mdate;

-- 12. For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'
SELECT go.matchid, ga.mdate, COUNT(go.matchid) AS goal_scored FROM goal go 
JOIN game ga ON go.matchid = ga.id 
WHERE go.teamid = 'GER' GROUP BY go.matchid, ga.mdate;

-- 13. List every match involving the ENG team, show the number goals scored by each team as shown.
SELECT ga.mdate, ga.team1, SUM(CASE WHEN go.teamid = ga.team1 THEN 1 ELSE 0 END) AS score1, ga.team2,
SUM(CASE WHEN go.teamid = ga.team2 THEN 1 ELSE 0 END) AS score2 FROM game ga LEFT JOIN goal go ON ga.id = go.matchid
WHERE ga.team1 = 'ENG' OR ga.team2 = 'ENG' GROUP BY ga.mdate, go.matchid, ga.team1, ga.team2 
ORDER BY ga.mdate, go.matchid, ga.team1, ga.team2;

/*
    TUTORIAL 7: MORE JOIN OPERATIONS
*/

-- List the films where the yr is 1962 and the budget is over 2000000 [Show id, title]
SELECT id, title FROM movie 
WHERE yr = 1962 AND budget > 2000000;

-- Give year of 'Citizen Kane'.
SELECT yr FROM movie 
WHERE title = 'Citizen Kane';

-- List all of the Star Trek movies, include the id, title and yr (all of these movies start with the words Star Trek in the title). Order results by year.
SELECT id, title, yr FROM movie 
WHERE title LIKE 'Star Trek%' ORDER BY yr ASC;

-- What id number does the actor 'Glenn Close' have?
SELECT id FROM actor WHERE name = 'Glenn Close';

-- What is the id of the 1942 film 'Casablanca'
SELECT id FROM movie WHERE yr = 1942 AND title = 'Casablanca';

-- Obtain the cast list for 1942's 'Casablanca'.
SELECT a.name FROM actor a JOIN casting cast ON a.id = cast.actorid WHERE cast.movieid = 11768;

-- Obtain the cast list for the film 'Alien'
SELECT a.name FROM actor a JOIN casting cast ON a.id = cast.actorid WHERE cast.movieid = 10522;

-- List the films in which 'Harrison Ford' has appeared
SELECT m.title FROM movie m 
JOIN casting c ON m.id = c.movieid JOIN actor a ON c.actorid = a.id 
WHERE a.name = 'Harrison Ford';

/*
List the films where 'Harrison Ford' has appeared - but not in the starring role. 
[Note: the ord field of casting gives the position of the actor. If ord=1 then this actor is in the starring role]
*/

SELECT m.title FROM movie m 
JOIN casting c ON m.id = c.movieid JOIN actor a ON c.actorid = a.id 
WHERE a.name = 'Harrison Ford' AND c.ord != 1;

-- List the films together with the leading star for all 1962 films.
SELECT m.title, a.name FROM movie m 
JOIN casting c ON m.id = c.movieid JOIN actor a ON c.actorid = a.id WHERE m.yr = 1962 AND c.ord = 1;

-- Which were the busiest years for 'Rock Hudson', show the year and the number of movies he made each year for any year in which he made more than 2 movies.
SELECT m.yr, COUNT(m.title) AS movie_count FROM movie m 
JOIN casting c ON m.id = c.movieid JOIN actor a ON c.actorid = a.id 
WHERE a.name = 'Rock Hudson' GROUP BY m.yr HAVING COUNT(m.title) > 2;

/*
List the film title and the leading actor for all of the films 'Julie Andrews' played in.

Did you get "Little Miss Marker twice"?
Julie Andrews starred in the 1980 remake of Little Miss Marker and not the original(1934).

Title is not a unique field, create a table of IDs in your subquery
*/

SELECT m.title, a.name FROM movie m 
JOIN casting c ON m.id = c.movieid JOIN actor a ON c.actorid = a.id 
WHERE c.movieid IN ( SELECT movieid FROM casting JOIN actor ON actorid = id WHERE name = 'Julie Andrews') AND c.ord = 1;

-- Obtain a list, in alphabetical order, of actors who've had at least 15 starring roles.
SELECT a.name FROM actor a 
JOIN casting c ON a.id = c.actorid 
WHERE c.ord = 1 GROUP BY a.name HAVING COUNT(c.movieid) >= 15 ORDER BY a.name ASC;

-- List the films released in the year 1978 ordered by the number of actors in the cast, then by title.
SELECT m.title, COUNT(c.actorid) AS cast_size FROM movie m 
JOIN casting c ON m.id = c.movieid 
WHERE m.yr = 1978 GROUP BY m.id, m.title ORDER BY cast_size DESC, m.title ASC;

-- List all the people who have worked with 'Art Garfunkel'.
SELECT a.name FROM actor a 
JOIN casting c ON a.id = c.actorid WHERE c.movieid IN 
(SELECT movieid FROM casting JOIN actor ON actorid = id WHERE name = 'Art Garfunkel') AND a.name != 'Art Garfunkel';