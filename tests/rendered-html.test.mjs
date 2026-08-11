import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the Alpha Bridge water management homepage wired", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    access(new URL("../public/water-city-hero.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(page, /ALPHA BRIDGE/);
  assert.match(page, /프리미엄/);
  assert.match(page, /워터 솔루션/);
  assert.match(page, /수질·배관 관리 상담/);
  assert.match(page, /알파브릿지의 전문 서비스/);
  assert.match(page, /water-city-hero\.png/);
  assert.match(layout, /프리미엄 수질·배관 관리/);
  assert.match(layout, /\/og\.png/);
  assert.match(css, /@media\(max-width:600px\)/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});
