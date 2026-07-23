import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["iPhone 14"] });

test.describe("Mobile — Main site", () => {
  test("homepage renders on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Desa Balerejo/i, level: 1 })).toBeVisible();
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.goto("/");
    const menuButton = page.getByRole("button", { name: /Buka menu/i });
    await menuButton.click();
    await expect(page.getByRole("navigation", { name: "Navigasi mobile" })).toBeVisible();
    await page.getByRole("button", { name: /Tutup menu/i }).click();
    await expect(page.locator("#mobile-menu")).toHaveCSS("opacity", "0");
  });

  test("mobile menu navigates to Profil Desa", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /Buka menu/i }).click();
    await page.getByRole("navigation", { name: "Navigasi mobile" }).getByRole("link", { name: "Profil Desa" }).click();
    await expect(page).toHaveURL("/profil-desa");
  });

  test("infografis page renders on mobile", async ({ page }) => {
    await page.goto("/infografis");
    await expect(page.getByRole("button", { name: "Penduduk" })).toBeVisible();
  });
});
