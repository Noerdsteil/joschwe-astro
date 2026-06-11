// Dev-only helper: drives headless Chromium against the dev server and
// drops screenshots into /tmp/joschwe-shots for visual review.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:4321';
const OUT = '/tmp/joschwe-shots';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const errors = [];

async function shoot(page, path, name, fullPage = true) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  // Force scroll-reveal elements visible for full-page shots
  await page.evaluate(() =>
    document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed')),
  );
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage });
  console.log(`shot: ${name}`);
}

// Desktop, light mode
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
let page = await desktop.newPage();
page.on('pageerror', (e) => errors.push(`pageerror ${page.url()}: ${e.message}`));
page.on('console', (m) => m.type() === 'error' && errors.push(`console ${page.url()}: ${m.text()}`));

await shoot(page, '/', 'home-light');
await shoot(page, '/engineering/', 'engineering-light');
await shoot(page, '/pricing/', 'pricing-light');
await shoot(page, '/cxo-sparring/', 'cxo-light');

// Dark mode via toggle
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
await page.click('button[aria-label="Switch to dark mode"]');
await page.evaluate(() =>
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed')),
);
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/home-dark.png`, fullPage: true });
console.log('shot: home-dark (via toggle)');
// Verify persistence across navigation
await page.goto(`${BASE}/pricing/`, { waitUntil: 'networkidle' });
const stillDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
console.log(`dark mode persists across nav: ${stillDark}`);
await page.evaluate(() =>
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed')),
);
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/pricing-dark.png`, fullPage: true });

// Mobile viewport + menu
const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
page = await mobile.newPage();
page.on('pageerror', (e) => errors.push(`pageerror(mobile) ${page.url()}: ${e.message}`));
await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
await page.screenshot({ path: `${OUT}/home-mobile.png` });
await page.click('button[aria-label="Open menu"]');
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/home-mobile-menu.png` });
console.log('shot: mobile + open menu');

await browser.close();

if (errors.length) {
  console.log('\nERRORS:');
  errors.forEach((e) => console.log(' -', e));
  process.exit(1);
}
console.log('\nNo console/page errors.');
