const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/FIND"
);

const animalSeed = [
  {
    img:"https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/119831759_1903636629777670_6423738682408907778_n.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_ohc=q0Mpj02HHCEAX_Vfh-u&_nc_ht=scontent.fhou1-2.fna&oh=1d2ffc19608a62b8b30d602440491f6a&oe=5FACF8A5",
    name: "Huey",
    species: "Boxer/Lab Mix",
    description:
      "Found near Cravens Road, Missouri City, Tx. No collar, no tags, no microchip. Brindle/White Color",
    date: new Date(Date.now())
  }
];

db.Animal
  .remove({})
  .then(() => db.Animal.collection.insertMany(animalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });