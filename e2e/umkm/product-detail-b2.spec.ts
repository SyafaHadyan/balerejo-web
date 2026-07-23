import { test, expect } from "@playwright/test";

test.describe("Product Detail — Balerejo 2 (real GPS data)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/bara-collection");
  });

  test("shows product name as heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Bara Collection/i })).toBeVisible();
  });

  test("shows real contact number", async ({ page }) => {
    await expect(page.getByText(/0813-3488-8414/)).toBeVisible();
  });

  test("shows WhatsApp CTA", async ({ page }) => {
    await expect(page.getByRole("link", { name: /WhatsApp/i })).toBeVisible();
  });

  test("back link returns to catalog", async ({ page }) => {
    await page.getByRole("link", { name: /Kembali/i }).click();
    await expect(page).toHaveURL("/");
  });
});
