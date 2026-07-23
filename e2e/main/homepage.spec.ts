import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Desa Balerejo/);
  });

  test("shows hero heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Desa Balerejo/i, level: 1 })).toBeVisible();
  });

  test("shows stats bar", async ({ page }) => {
    await expect(page.getByLabel("Statistik Desa")).toBeVisible();
  });

  test("shows info section", async ({ page }) => {
    await expect(page.getByLabel("Info lainnya")).toBeVisible();
  });

  test("shows footer", async ({ page }) => {
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
});
