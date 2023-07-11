const express = require("express");
const router = express.Router();

router.get("/api/products", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://guruapi-production.up.railway.app/api/products?sort=id&page=1"
    );
    const jsonData = await response.json();
    res.json(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/api/getAllProducts", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://guruapi-production.up.railway.app/api/getAllProducts?sort=id&page=1"
    );
    const jsonData = await response.json();
    console.log(jsonData);
    res.json(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});
module.exports = router;
