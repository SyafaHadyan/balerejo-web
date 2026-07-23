import { test, expect } from "@playwright/test";

test.describe("Navbar navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navigates to Profil Desa", async ({ page }) => {
    await page.getByRole("navigation", { name: "Navigasi utama" }).getByRole("link", { name: "Profil Desa" }).click();
    await expect(page).toHaveURL("/profil-desa");
  });

  test("navigates to Infografis", async ({ page }) => {
    await page.getByRole("navigation", { name: "Navigasi utama" }).getByRole("link", { name: "Infografis" }).click();
    await expect(page).toHaveURL("/infografis");
  });

  test("navigates to Galeri", async ({ page }) => {
    await page.getByRole("navigation", { name: "Navigasi utama" }).getByRole("link", { name: "Galeri" }).click();
    await expect(page).toHaveURL("/galeri");
  });

  test("wordmark navigates to homepage", async ({ page }) => {
    await page.goto("/profil-desa");
    await page.getByRole("link", { name: "Desa Balerejo — beranda" }).click();
    await expect(page).toHaveURL("/");
  });
});
