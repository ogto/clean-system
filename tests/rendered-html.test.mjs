import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the Alpha Bridge homepage content in the Next.js source", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /ALPHA BRIDGE/);
  assert.match(page, /프리미엄/);
  assert.match(page, /워터 솔루션/);
  assert.match(page, /수질·배관 관리 상담/);
  assert.match(page, /알파브릿지의 전문 서비스/);
  assert.doesNotMatch(page, /flowSection/);
  assert.ok(page.indexOf('className="expertiseSection"') < page.indexOf('className="serviceSection"'));
  assert.match(page, /credentialBackdrop/);
  assert.match(page, /credentialForeground/);
  assert.doesNotMatch(page, /credentialBadge/);
  assert.doesNotMatch(page, /heroEnglish|sectionEyebrow|detail\.eyebrow/);
  assert.doesNotMatch(page, /WHY ALPHA BRIDGE|PROFESSIONAL QUALIFICATION|OUR SERVICES|BEFORE &amp; AFTER|MANAGEMENT PROCESS|ALPHA BRIDGE QUALITY STANDARD|WHO WE MANAGE|BUSINESS PARTNER/);
  assert.doesNotMatch(page, /codex-preview|Your site is taking shape/i);
});

test("keeps production metadata, comparison, and qualification imagery wired", async () => {
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    access(new URL("../public/pipe-before-after.png", import.meta.url)),
    access(new URL("../public/water-quality-manager-certificate.jpg", import.meta.url)),
    access(new URL("../public/pipe-water-quality-specialist-certificate.jpg", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(page, /pipe-before-after\.png/);
  assert.match(page, /water-quality-manager-certificate\.jpg/);
  assert.match(page, /pipe-water-quality-specialist-certificate\.jpg/);
  assert.match(layout, /수질·배관관리 전문 워터솔루션/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("keeps the qualification section inside the mobile viewport", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.expertiseGrid\s*>\s*\*\s*\{\s*min-width:\s*0/);
  assert.match(css, /\.expertiseGrid\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/s);
  assert.match(css, /\.credentialForeground\s*\{[^}]*left:\s*50%[^}]*margin:\s*0[^}]*translateX\(-50%\)/s);
});
