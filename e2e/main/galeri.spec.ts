import { test, expect } from "@playwright/test";

test.describe("Galeri", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/galeri");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Galeri/);
  });

  test("shows page heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Galeri/i })).toBeVisible();
  });

  test("shows footer", async ({ page }) => {
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
});
