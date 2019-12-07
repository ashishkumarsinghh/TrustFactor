const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running...");
  }
});

app.get("/api", (req, res) => {
  res.send("API Gateway for TrustFactor.");
});
