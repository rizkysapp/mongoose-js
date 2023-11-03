const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/movie")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  director: String,
  year: Number,
  rating: Number,
});

const Movie = mongoose.model("Movies", movieSchema);

// const movie = new Movie({
//   title: "fast x",
//   genre: "action",
//   director: "jhon tender",
//   year: 2023,
//   rating: 8.5,
// });

// Movie.find({ year: { $gte: 2018 }, genre: "Drama" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findById("6492cd9d3f6db23075027fac")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// update
// Movie.updateOne({ title: "parasite" }, { rating: 7.1 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findByIdAndUpdate("6492cd9d3f6db23075027fac", { rating: 5.8 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Delete

Movie.findByIdAndRemove("6492cd9d3f6db23075027fac")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Movie.insertMany([
//   {
//     title: "Black Panther",
//     genre: "Action",
//     director: "Ryan Coogler",
//     year: 2018,

//     rating: 7.3,
//   },
//   {
//     title: "Avengers: Infinity War",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,

//     rating: 8.4,
//   },
//   {
//     title: "Joker",
//     genre: "Crime",
//     director: "Todd Phillips",
//     year: 2019,

//     rating: 8.4,
//   },
//   {
//     title: "Parasite",
//     genre: "Drama",
//     director: "Bong Joon Ho",
//     year: 2019,

//     rating: 8.3,
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     genre: "Animation",
//     director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//     year: 2023,
//     rating: 8.4,
//   },
// ])
//   .then((result) => {
//     console.log("is work");
//     console.log(result);
//   })
//   .catch((err) => {
//     console, log(err);
//   });

// console.log(movie);

// movie.save();
