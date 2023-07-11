const mongoose = require("mongoose");

const mongoFunction = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
  }
};

module.exports = mongoFunction;
