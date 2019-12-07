const sum = require("../sum");
test("add negative nums", () => {
  expect(sum(-2, -4)).toBe(-6);
});
