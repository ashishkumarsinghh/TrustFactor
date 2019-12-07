const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.listen(process.env.SERVER_PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running...");
  }
});

app.get("/api", (req, res) => {
  res.send("API Gateway for TrustFactor.");
});
