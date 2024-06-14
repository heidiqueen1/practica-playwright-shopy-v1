const { test, expect } = require("@playwright/test");

test("get started link", async ({ page }) => {
  await page.goto("https://sauce-demo.myshopify.com/");

  //Expects page to have title with the name´s Sauce Demo
  await expect(page).toHaveTitle(/Sauce Demo/);

  // Expects page to have a img with the phrase simple.
  await page.$("img[alt='Sauce Demo']");

  // Expects page to have a phrase 'Just a demo site showing off what Sauce can do'

  await expect(
    page.getByRole("heading", {
      name: "Just a demo site showing off what Sauce can do.",
    })
  ).toBeVisible();
});
