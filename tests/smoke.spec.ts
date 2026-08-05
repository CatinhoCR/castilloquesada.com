import { test, expect } from "@playwright/test";
import { navContent } from "../src/content/nav";
import { contactContent } from "../src/content/contact";
import { heroContent } from "../src/content/hero";

test("homepage loads, hero headline visible, no console errors", async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  const pageErrors: string[] = [];
  page.on("pageerror", (err) => pageErrors.push(err.message));

  await page.goto("/");

  const headline = page.locator("h1");
  await expect(headline).toBeVisible();
  await expect(headline).toContainText(heroContent.headlineLine1);
  await expect(headline).toContainText(heroContent.headlineLine2);

  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test("nav links exist with correct hrefs", async ({ page }) => {
  await page.goto("/");

  const nav = page.locator("header nav");
  for (const { label, href } of navContent.navLinks) {
    const link = nav.getByRole("link", { name: label });
    await expect(link).toHaveAttribute("href", href);
  }
});

test("contact links have correct hrefs and are not broken", async ({
  page,
}) => {
  await page.goto("/");

  const contactSection = page.locator("#contact");
  await contactSection.scrollIntoViewIfNeeded();

  for (const { label, href } of contactContent.rows) {
    const link = contactSection.getByRole("link", { name: label });
    await expect(link).toHaveAttribute("href", href);

    if (href.startsWith("http")) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  }
});

test.describe("responsive layout", () => {
  for (const { name, width, height } of [
    { name: "mobile", width: 390, height: 844 },
    { name: "desktop", width: 1440, height: 900 },
  ]) {
    test(`renders without horizontal overflow at ${name} (${width}px)`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height });
      await page.goto("/");

      const headline = page.locator("h1");
      await expect(headline).toBeVisible();

      const scrollWidth = await page.evaluate(
        () => document.documentElement.scrollWidth
      );
      expect(scrollWidth).toBeLessThanOrEqual(width + 1);
    });
  }
});

test("prefers-reduced-motion: hero renders final state without entrance animation", async ({
  browser,
}) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();

  await page.goto("/");

  const eyebrow = page.locator("[data-hero-fade]");
  const cta = page.locator("[data-hero-cta]");

  await expect(eyebrow).toBeVisible();
  await expect(cta).toBeVisible();

  const eyebrowOpacity = await eyebrow.evaluate(
    (el) => getComputedStyle(el).opacity
  );
  const ctaOpacity = await cta.evaluate((el) => getComputedStyle(el).opacity);

  expect(eyebrowOpacity).toBe("1");
  expect(ctaOpacity).toBe("1");

  await context.close();
});
