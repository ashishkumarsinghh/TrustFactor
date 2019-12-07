describe("Google", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/api");
  });

  it("API Gateway", async () => {
    await expect(page).toMatch("API Gateway for TrustFactor.");
  });
});
