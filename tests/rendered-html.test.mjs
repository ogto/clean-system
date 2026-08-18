import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
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

test("wires all verification images into an interactive evidence carousel", async () => {
  const [page, evidenceFiles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readdir(new URL("../public/evidence/", import.meta.url)),
  ]);

  assert.equal(evidenceFiles.length, 18);
  assert.equal(page.match(/image:\s*"\/evidence\//g)?.length, 18);
  assert.match(page, /className="evidenceSection"/);
  assert.match(page, /moveEvidence/);
  assert.match(page, /setActiveEvidence\(currentEvidence\)/);
  assert.match(page, /role="dialog"[^>]+aria-labelledby="evidence-modal-title"/);
});

test("uses the requested representative phone number everywhere", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /tel:1544-7763/);
  assert.match(page, /고객센터: 1544-7763/);
  assert.doesNotMatch(page, /1533|XXXX/);
  assert.match(page, /사업자등록번호: 389-87-03895/);
  assert.doesNotMatch(page, /123-45-67890/);
});

test("provides fixed Kakao and Naver Blog channel buttons with official assets", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    access(new URL("../public/brand/kakao-talk-consult-official.png", import.meta.url)),
    access(new URL("../public/brand/naver-blog-official.png", import.meta.url)),
  ]);

  assert.match(page, /className="floatingChannel kakaoChannel"[^>]+aria-disabled="true"/);
  assert.match(page, /href="https:\/\/m\.blog\.naver\.com\/k--prime"/);
  assert.match(page, /target="_blank" rel="noopener noreferrer"/);
  assert.match(page, /\/brand\/kakao-talk-consult-official\.png/);
  assert.match(page, /\/brand\/naver-blog-official\.png/);
  assert.doesNotMatch(page, /naverBlogCrop/);
  assert.match(css, /\.floatingChannels\s*\{[^}]*position:\s*fixed[^}]*right:[^}]*bottom:/s);
});
