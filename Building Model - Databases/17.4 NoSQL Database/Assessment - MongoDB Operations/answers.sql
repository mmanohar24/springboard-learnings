/*
  CREATE
*/

-- Insert a New Document into the Users Collection: Practice adding a new user document to the users collection. Include fields name and email.
db.users.insertOne( {name: "Manoj Manoharan", email: "manojtest@gmail.com"} )


/*
  READ
*/

-- 1. Find all movies directed by Christopher Nolan.
db.movies.find( {directors: "Christopher Nolan"} )

-- 2. Find movies that include the genre "Action" and sort (descending) them by year.
db.movies.find( {genres: "Action"} ).sort( { year: -1 } )

-- 3. Find movies with an IMDb rating greater than 8 and return only the title and IMDB information.
db.movies.find( {"imdb.rating": {$gt: 8 } }, {title: 1, imdb: 1}  )

-- 4. Find movies that starred both "Tom Hanks" and "Tim Allen".
db.movies.find( { cast: {$all: ["Tom Hanks", "Tim Allen"] } } )

-- 5. Find movies that starred both and only "Tom Hanks" and "Tim Allen".
db.movies.find( { cast: {$all: ["Tom Hanks", "Tim Allen"] } }, {title: 1, cast: 1} )

-- 6. Find comedy movies that are directed by Steven Spielberg.
db.movies.find( {genres: "Comedy", directors: "Steven Spielberg"})

/*
    UPDATE
*/

-- 1. Add a new field "available_on" with the value "Sflix" to "The Matrix".
db.movies.updateOne( {_id: ObjectId('573a139bf29313caabcf3d23')}, {$set: {available_on: "Sflix"} } )

-- 2. Increment the metacritic of "The Matrix" by 1.
db.movies.updateOne( {_id: ObjectId('573a139bf29313caabcf3d23')}, {$inc: {metacritic: 1} }  )

-- 3. Add a new genre "Gen Z" to all movies released in the year 1997.
db.movies.updateMany( {year: 1997}, {$addToSet: { genres: "Gen Z"} }  )

-- 4. Increase IMDb rating by 1 for all movies with a rating less than 5.
db.movies.updateMany( {"imdb.rating": {$lt: 5} }, {$inc: {"imdb.rating": 1} } )

/*
    DELETE
*/

-- 1. Delete a comment with a specific ID.
db.comments.deleteOne( {_id: ObjectId('5a9427648b0beebeb69579f5')} )

-- 2. Delete all comments made for "The Matrix".
db.comments.deleteMany({movie_id: ObjectId("573a139bf29313caabcf3d23")})

-- 3. Delete all movies that do not have any genres.
db.movies.deleteMany( {$or: [ { genres: {$exists: false} }, {genres: null} ]} )

/*
    AGGREGATE
*/

-- 1. Aggregate movies to count how many were released each year and display from the earliest year to the latest.
db.movies.aggregate([
  { $match: { year: { $type: "number" } } },
  { $group: { _id: "$year", count: { $sum: 1 } } },
  { $sort: { _id: 1 } }
])

-- 2. Calculate the average IMDb rating for movies grouped by director and display from highest to lowest.
db.movies.aggregate([
  { $match: { "imdb.rating": { $type: "number" }, directors: { $exists: true, $ne: [] } } },
  { $unwind: "$directors" },
  { $group: { _id: "$directors", avgRating: { $avg: "$imdb.rating" } } },
  { $sort: { avgRating: -1 } }
])