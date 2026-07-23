import { test, expect } from "@playwright/test";

test.describe("UMKM Navbar navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navigates to Peta Digital", async ({ page }) => {
    await page.getByRole("navigation", { name: "Navigasi utama" }).getByRole("link", { name: "Peta Digital" }).click();
    await expect(page).toHaveURL("/peta-digital");
  });

  test("wordmark navigates to catalog", async ({ page }) => {
    await page.goto("/peta-digital");
    await page.getByRole("link", { name: "Jelajah Balerejo — katalog UMKM" }).click();
    await expect(page).toHaveURL("/");
  });
});
