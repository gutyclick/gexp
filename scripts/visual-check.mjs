import { chromium } from "playwright-core";
import { tmpdir } from "node:os";
import { join } from "node:path";

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});

const checks = [
  ["home-desktop", "/", 1440, 1000],
  ["home-laptop", "/", 1024, 768],
  ["home-tablet", "/", 768, 1024],
  ["home-mobile", "/", 390, 844],
  ["apps-desktop", "/proyectos/apps", 1440, 1000],
  ["apps-mobile", "/proyectos/apps", 390, 844],
  ["post-tablet", "/proyectos/post-produccion", 768, 1024],
  ["crealy-mobile", "/proyectos/crealy", 390, 844],
];

for (const [name, pathname, width, height] of checks) {
  const page = await browser.newPage({ viewport: { width, height } });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto(`http://localhost:3000${pathname}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(pathname === "/" ? 1400 : 200);
  const dimensions = await page.evaluate(() => ({
    viewport: innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
    documentHeight: document.documentElement.scrollHeight,
    cursor: (() => { const element = document.querySelector(".custom-cursor"); if (!element) return null; const rect = element.getBoundingClientRect(); return { display: getComputedStyle(element).display, left: rect.left, top: rect.top, width: rect.width }; })(),
    overflowing: [...document.querySelectorAll("body *")]
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return { tag: element.tagName, className: element.className, parent: `${element.parentElement?.tagName}.${element.parentElement?.className}`, parentText: element.parentElement?.textContent?.trim().slice(0, 55), text: element.textContent?.trim().slice(0, 45), left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) };
      })
      .filter((rect) => rect.right > innerWidth + 1 || rect.left < -1)
      .sort((a, b) => b.right - a.right)
      .slice(0, 8),
  }));
  const screenshot = join(tmpdir(), `gexp-${name}.png`);
  await page.screenshot({ path: screenshot, fullPage: true });
  await page.screenshot({ path: join(tmpdir(), `gexp-${name}-top.png`) });
  console.log(JSON.stringify({ name, ...dimensions, overflow: dimensions.documentWidth > dimensions.viewport, errors, screenshot }));
  await page.close();
}

await browser.close();
