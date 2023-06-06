const express = require("express");
const app = express();
const port = 8080;

const mongoFunction = require("./db");
const cors = require("cors");

const AuthRoute = require("./Routes/Auth");

mongoFunction();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", AuthRoute);

app.listen(port, console.log(`Running on port: ${port} `));
