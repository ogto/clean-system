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

test("preserves representative image proportions on mobile", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.heroSlide img,[^{]+\{[^}]*object-fit:\s*contain/s);
  assert.match(css, /\.serviceCardImage\s*\{[^}]*aspect-ratio:\s*3\s*\/\s*2/s);
  assert.match(css, /\.certificatePhoto\s*\{[^}]*aspect-ratio:\s*3\s*\/\s*2/s);
  assert.match(css, /\.caseVisual\s*\{[^}]*aspect-ratio:\s*1672\s*\/\s*941/s);
  assert.match(css, /\.modalImage img\s*\{[^}]*object-fit:\s*contain/s);
});

test("keeps verification assets available while the evidence section is unpublished", async () => {
  const [page, evidenceFiles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readdir(new URL("../public/evidence/", import.meta.url)),
  ]);

  assert.equal(evidenceFiles.length, 18);
  assert.equal(page.match(/image:\s*"\/evidence\//g)?.length, 18);
  assert.match(page, /className="evidenceSection"[^>]+hidden/);
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

test("provides fixed Kakao, Naver Blog, and YouTube channel buttons", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    access(new URL("../public/brand/kakaotalk-official-icon.png", import.meta.url)),
    access(new URL("../public/brand/naver-blog-official.png", import.meta.url)),
  ]);

  assert.match(page, /className="floatingChannel kakaoChannel"[^>]+aria-disabled="true"/);
  assert.match(page, /href="https:\/\/m\.blog\.naver\.com\/k--prime"/);
  assert.match(page, /target="_blank" rel="noopener noreferrer"/);
  assert.match(page, /\/brand\/kakaotalk-official-icon\.png/);
  assert.match(page, /\/brand\/naver-blog-official\.png/);
  assert.match(page, /<strong>카카오톡<\/strong><small>상담 준비 중<\/small>/);
  assert.match(page, /<strong>네이버 블로그<\/strong><small>공식 블로그<\/small>/);
  assert.match(page, /https:\/\/www\.youtube\.com\/channel\/UCy2_LC3YjKd9CzyQtVhABcQ/);
  assert.match(page, /className="floatingChannel youtubeChannel"/);
  assert.doesNotMatch(page, /naverBlogCrop/);
  assert.match(css, /\.floatingChannels\s*\{[^}]*position:\s*fixed[^}]*right:[^}]*bottom:/s);
});

test("wires the supplied revision images and requested copy", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const assets = [
    "lumi-water-hero.jpg",
    "alpha-hero-pipeline.png",
    "eco-technician.png",
    "space-apartment.png",
    "space-school.png",
    "space-cafe.png",
    "space-factory.png",
    "space-hospital.png",
    "space-welfare.png",
    "space-office.png",
    "management-track-record.jpg",
    "service-water-quality.jpg",
    "service-pipe-inspection.jpg",
    "service-pipe-cleaning.jpg",
    "service-water-solution-install.jpg",
    "service-regular-care.jpg",
    "certified-site-plaque.jpg",
    "lumi-water-product.jpg",
  ];

  await Promise.all(assets.map((asset) => access(new URL(`../public/${asset}`, import.meta.url))));
  for (const asset of assets) assert.match(page, new RegExp(asset.replace(".", "\\.")));
  assert.match(page, /한국상하수도협회 및 한국수질관리연합회/);
  assert.match(page, /자성과 양자처리 특허 기술/);
  assert.match(page, /3개월 주기 1:1 케어 서비스/);
  assert.match(page, /setInterval[\s\S]*5200/);
  assert.match(page, /aria-label="이전 배너"/);
  assert.match(page, /aria-label="다음 배너"/);
  assert.match(page, /<h2>알파브릿지가 관리하는 공간<\/h2>/);
  assert.match(page, /대전광역시 서구 도산로 403번길 21, 635호/);
  assert.match(page, /소규모기술 창업 컨설팅/);
});
