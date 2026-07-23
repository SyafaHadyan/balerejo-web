import { test, expect } from "@playwright/test";

test.describe("UMKM Catalog", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Katalog UMKM/);
  });

  test("shows product grid", async ({ page }) => {
    await expect(page.getByRole("list").first()).toBeVisible();
  });

  test("shows at least one product card", async ({ page }) => {
    const cards = page.getByRole("article");
    await expect(cards.first()).toBeVisible();
  });

  test("product card links to detail page", async ({ page }) => {
    const firstCard = page.getByRole("article").first();
    const link = firstCard.getByRole("link").first();
    await link.click();
    await expect(page).toHaveURL(/\/.+/);
  });
});
