const mongoose = require("mongoose");

const elecreicCategorySchema = new mongoose.Schema({
  CategoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("electricCategory", elecreicCategorySchema);
