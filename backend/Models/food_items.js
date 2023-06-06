const mongoose = require("mongoose");

const food_itemsSchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    default: [
      {
        half: {
          type: String,
        },
        full: {
          type: String,
        },
      },
    ],
  },
});

module.exports = mongoose.model("food_items", food_itemsSchema);
