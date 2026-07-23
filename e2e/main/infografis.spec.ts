import { test, expect } from "@playwright/test";

test.describe("Infografis", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/infografis");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Infografis/);
  });

  test("shows demografi tab by default", async ({ page }) => {
    await expect(page.getByRole("tab", { name: /Demografi/i })).toBeVisible();
  });

  test("can switch to Potensi Desa tab", async ({ page }) => {
    await page.getByRole("tab", { name: /Potensi Desa/i }).click();
    await expect(page.getByText(/Tanaman Pangan/i)).toBeVisible();
  });

  test("can switch to APBDes tab", async ({ page }) => {
    await page.getByRole("tab", { name: /APBDes/i }).click();
    await expect(page.getByText(/Anggaran/i)).toBeVisible();
  });
});
