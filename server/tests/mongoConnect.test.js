const dotenv = require("dotenv").config();
const connectToMongo = require("../mongoConnect");

test("Connect to mongodb", () => {
  return expect(connectToMongo()).resolves.toBe("connected");
});
