import { test, expect } from "@playwright/test";

test.describe("Profil Desa", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/profil-desa");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Profil Desa/);
  });

  test("shows sejarah section", async ({ page }) => {
    await expect(page.getByText(/Balerejo/i).first()).toBeVisible();
  });
});
