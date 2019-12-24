const mongoose = require("mongoose");

const connectToMongo = () => {
  return mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(
      () => {
        return "connected";
      },
      err => {
        console.error(err);
      }
    );
};

module.exports = connectToMongo;
