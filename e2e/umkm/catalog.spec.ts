import { test, expect } from "@playwright/test";

test.describe("UMKM Catalog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Katalog UMKM/);
  });

  test("shows product grid", async ({ page }) => {
    await expect(page.getByLabel("Katalog produk UMKM")).toBeVisible();
  });

  test("shows at least one product card", async ({ page }) => {
    const firstCard = page.getByLabel(/Katalog produk UMKM/).getByRole("link").first();
    await expect(firstCard).toBeVisible();
  });

  test("product card links to detail page", async ({ page }) => {
    const firstCard = page.getByLabel(/Katalog produk UMKM/).getByRole("link").first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/.+/);
  });
});
