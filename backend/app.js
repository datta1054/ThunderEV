require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const mongoFunction = require("./db");
const cors = require("cors");

const AuthRoute = require("./Routes/Auth");

mongoFunction(process.env.MONGODB_URL);

app.use(express.json());
app.use(cors());

app.get("/api/products", async (req, res, next) => {
  try {
    const fetch = await import("node-fetch");
    const response = await fetch.default(
      "https://guru-d8a3yuiat-nandanvasistabh29.vercel.app/api/products?limit=10"
    );
    const jsonData = await response.json();
    res.json(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.get("/api/getAllProducts", async (req, res, next) => {
  try {
    const fetch = await import("node-fetch");
    const response = await fetch.default(
      "https://guru-d8a3yuiat-nandanvasistabh29.vercel.app/api/products?sort=id&limit=40"
    );
    const jsonData = await response.json();
    res.json(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", AuthRoute);

app.listen(port, console.log(`Running on port: ${port} `));
