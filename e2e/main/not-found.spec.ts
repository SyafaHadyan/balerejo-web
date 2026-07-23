import { test, expect } from "@playwright/test";

test.describe("404 page", () => {
  test("shows not found page for unknown route", async ({ page }) => {
    await page.goto("/halaman-tidak-ada");
    await expect(page.getByRole("heading", { name: /404|tidak ditemukan|not found/i })).toBeVisible();
  });
});
