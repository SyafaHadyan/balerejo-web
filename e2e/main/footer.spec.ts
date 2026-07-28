import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows contact email", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByRole("link", { name: /desabalerejo1@gmail\.com/i })).toBeVisible();
  });

  test("shows copyright", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText(/Pemerintah Desa Balerejo/i)).toBeVisible();
  });
});
