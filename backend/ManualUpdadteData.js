const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const food_itemsSchema = require("./Models/food_items");

dotenv.config({ path: "./config.env" });

const DB =
  "";

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

// READ JSON FILE
const food_items = JSON.parse(
  fs.readFileSync(`${__dirname}/food_items.json`, "utf-8")
);

const importData = async () => {
  try {
    await food_itemsSchema.create(food_items, { validateBeforeSave: false });
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await food_itemsSchema.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

/*  node ManualUpdadteData --import */
/*  node ManualUpdadteData --delete */
