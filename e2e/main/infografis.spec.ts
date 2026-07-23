import { test, expect } from "@playwright/test";

test.describe("Infografis", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/infografis");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/Infografis/);
  });

  test("shows Penduduk tab by default", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Penduduk" })).toBeVisible();
  });

  test("can switch to Potensi Desa tab", async ({ page }) => {
    await page.getByRole("button", { name: "Potensi Desa" }).click();
    await expect(page.getByRole("heading", { name: "Tanaman Pangan" })).toBeVisible();
  });

  test("can switch to APBDes tab", async ({ page }) => {
    await page.getByRole("button", { name: "APBDes" }).click();
    await expect(page.getByRole("heading", { name: /Anggaran Pendapatan/i })).toBeVisible();
  });
});
