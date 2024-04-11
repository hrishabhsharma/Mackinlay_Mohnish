require("dotenv").config();
require("./config/config")();
const express = require("express");
const cors = require("cors");

const app = express();
const Port = process.env.Port || 5000;

app.use(express.json());

app.use(cors({
  origin: "*",
}));

app.use("/api", require("./routes"));

app.listen(Port, () => console.log(`Express is running on ${Port}`));
