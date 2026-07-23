import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["iPhone 14"] });

test.describe("Mobile — UMKM site", () => {
  test("catalog renders on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByLabel("Katalog produk UMKM")).toBeVisible();
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /Buka menu/i }).click();
    await expect(page.getByRole("navigation", { name: "Navigasi mobile" })).toBeVisible();
    await page.getByRole("button", { name: /Tutup menu/i }).click();
    await expect(page.getByRole("navigation", { name: "Navigasi mobile" })).toBeHidden();
  });

  test("peta digital renders on mobile", async ({ page }) => {
    await page.goto("/peta-digital");
    await expect(page.locator(".maplibregl-map")).toBeVisible({ timeout: 10_000 });
  });

  test("sidebar defaults closed on mobile", async ({ page }) => {
    await page.goto("/peta-digital");
    await expect(
      page.getByRole("button", { name: /Tampilkan daftar/i })
    ).toBeVisible();
  });
});
