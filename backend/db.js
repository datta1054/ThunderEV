const mongoose = require("mongoose");
const url =
  "";

const mongoFunction = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to the database");

    // const collection = mongoose.connection.db.collection("food_items");
    // const documents = await collection.find({}).toArray();

    // const c3 = mongoose.connection.db.collection("foodcategories");
    // const doc2 = await c3.find({}).toArray();

    // global.foodData = documents;
    // global.foodCategory = doc2;
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
};

module.exports = mongoFunction;
