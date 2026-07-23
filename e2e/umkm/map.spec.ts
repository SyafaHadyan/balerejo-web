import { test, expect } from "@playwright/test";

test.describe("Peta Digital", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/peta-digital");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Peta Digital/);
  });

  test("shows map container", async ({ page }) => {
    await expect(page.locator(".maplibregl-map")).toBeVisible({ timeout: 10_000 });
  });

  test("shows sidebar toggle button", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /Tampilkan daftar|Sembunyikan daftar/i })
    ).toBeVisible();
  });
});
