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

  // Expects login to be visible
  const loginPage = await page.waitForSelector('a[href="/account/login"]');

  // Verified the login link be present
  expect(loginPage).not.toBeNull();

  // click in the login
  await loginPage.click();

  // Expects page to have a heading with the name of Customer Login.
  await expect(
    page.getByRole("heading", { name: "Customer Login" })
  ).toBeVisible();
});
