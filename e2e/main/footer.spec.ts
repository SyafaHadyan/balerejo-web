import { test, expect } from "@playwright/test";

test.describe("Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("shows contact phone number", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByRole("link", { name: /\+62/ })).toBeVisible();
  });

  test("shows contact email", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByRole("link", { name: /balerejo\.desa\.id/i })).toBeVisible();
  });

  test("shows copyright", async ({ page }) => {
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText(/Pemerintah Desa Balerejo/i)).toBeVisible();
  });
});
