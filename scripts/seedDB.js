const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    title: "Claire (Shelter Name)",
    author: "Female-German Shepard",
    synopsis:
      "Light Blue collar, No tags, No microchip, Black and Tan, Tan face with black around eyes and black snout with tan down middle, Found on Quail Valley East Drive, Missouri City, Texas on 10/18/2020, Located at Missori City Animal Shelter, Call (281)-403-8707",
    date: new Date(Date.now())
  },
  {
    title: "Lady (Shelter Name)",
    author: "Female-Pitbull",
    synopsis:
      "Black collar, Active microchip, No tags, White body with Black/Blue around eyes and most of ears, Found on Creighton Drive, Missouri City, Texas on 10/18/2020, Located at Missori City Animal Shelter, Call (281)-403-8707",
    date: new Date(Date.now())
  },
  {
    title: "Moe (Shelter Name)",
    author: "Male-Labrador (INJURED TIME SENSITIVE)",
    synopsis:
      "Black with white on paws and front of mouth, Found on Gessner and Highway 6, Blue collar, No tags, No microchip, Missouri City, Texas on 10/09/2020, Located at Missori City Animal Shelter, Call (281)-403-8707",
    date: new Date(Date.now())
  },
  {
    title: "Bane (Shelter Name)",
    author: "Male-Mastiff",
    synopsis:
      "Tan with black eyes and black/tan snout, No collar, No tags, No microchip, Found on Wild Peach Place, Missouri City, Texas on 10/07/2020, Located at Missori City Animal Shelter, Call (281)-403-8707",
    date: new Date(Date.now())
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
