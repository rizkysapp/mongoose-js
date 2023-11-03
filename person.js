const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/product")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

// { virtual }
personSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// { middleware mongoose }
personSchema.pre("save", async function () {
  console.log("data sedang disimpan");
});

personSchema.post("save", async function () {
  console.log("data berhasil disimpan");
});

const Person = mongoose.model("person", personSchema);

const personOne = new Person({
  firstName: "John",
  lastName: "jeri",
});

personOne
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

console.log(personOne.fullName);
