import { test, expect } from "@playwright/test";

test.describe("Product Detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/bakso-berkah");
  });

  test("shows product name as heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Bakso Berkah/i })).toBeVisible();
  });

  test("shows WhatsApp CTA button", async ({ page }) => {
    await expect(page.getByRole("link", { name: /WhatsApp/i })).toBeVisible();
  });

  test("shows back to catalog link", async ({ page }) => {
    await expect(page.getByRole("link", { name: /Kembali/i })).toBeVisible();
  });

  test("back link navigates to catalog", async ({ page }) => {
    await page.getByRole("link", { name: /Kembali/i }).click();
    await expect(page).toHaveURL("/");
  });
});
