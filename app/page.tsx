"use client";

import Image from "next/image";
import { useEffect } from "react";

const reasons = [
  { no: "01", title: "배관 수명과 열효율", body: "한 번의 전문 시공으로 배관 사용 기간을 늘리고, 열효율 저하와 불필요한 연료비를 줄입니다." },
  { no: "02", title: "주기적인 노후 배관 관리", body: "준공 후 시간이 지날수록 배관 내부의 녹과 스케일은 쌓입니다. 눈에 보이지 않을 때부터 관리가 필요합니다." },
  { no: "03", title: "부식으로 인한 손실 예방", body: "누수·막힘·수질 저하로 이어지기 전에 배관을 관리해 더 큰 교체 비용과 생활 불편을 예방합니다." },
];

const methods = [
  { name: "크린워터 갱생공법", desc: "스케일 제거 + 부식억제장비 설치\n배관 내부 부동태막 형성", cost: "약 7억원", time: "약 1개월", featured: true },
  { name: "배관 전면 교체", desc: "기존 배관 철거 후\n스테인리스·동관으로 교체", cost: "약 24억원", time: "6개월 이상" },
  { name: "에폭시 라이닝", desc: "배관 절단·고압 세척 후\n에폭시 도료 코팅", cost: "약 18억원", time: "3개월 이상" },
];

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <section className="hero">
        <Image src="/hero-pipe.png" alt="녹슨 배관에서 맑은 물이 흐르는 깨끗한 배관으로 변화하는 모습" fill priority sizes="100vw" className="heroImage" />
        <div className="heroShade" />
        <div className="topbar">
          <div className="brand"><span className="drop">C</span><span>CLEAN WATER</span><small>SYSTEM</small></div>
          <a href="tel:1644-7231" className="phone"><span>상담전화</span> 1644-7231</a>
        </div>
        <div className="heroContent">
          <p className="eyebrow"><span /> PATENTED PIPE CARE SOLUTION</p>
          <h1>보이지 않는 배관까지,<br /><em>맑은 물이 흐르도록.</em></h1>
          <p className="heroLead">자화활성수와 미세버블을 결합한 특허 공법으로<br className="desktop" /> 배관 속 녹과 스케일을 친환경적으로 제거합니다.</p>
          <div className="heroActions">
            <a href="#contact" className="primaryBtn">무료 상담 요청 <b>↗</b></a>
            <a href="#technology" className="textBtn">공법 알아보기 <span>↓</span></a>
          </div>
        </div>
        <div className="scrollHint"><i /><span>SCROLL TO DISCOVER</span></div>
        <div className="heroStat"><strong>01</strong><span>물리적 충격을 활용한<br />친환경 세척</span></div>
      </section>

      <section className="intro section">
        <div className="sectionLabel reveal">OUR PROMISE <span>01</span></div>
        <div className="introGrid">
          <h2 className="reveal">우리집 맑은 물,<br /><em>배관부터 달라야 합니다.</em></h2>
          <div className="introCopy reveal">
            <p>배관은 물이 지나가는 가장 긴 그릇입니다. 재질이나 형태에 관계없이 내부에 흡착된 녹과 스케일을 효율적으로 제거해 일상의 물을 다시 깨끗하게 만듭니다.</p>
            <div className="chips"><span>무화학 약품</span><span>저소음 시공</span><span>다양한 배관 적용</span></div>
          </div>
        </div>
        <div className="bigStatement reveal"><span>CLEAN</span><span>WATER,</span><span className="outline">BETTER LIFE.</span></div>
      </section>

      <section id="technology" className="technology">
        <div className="techImage reveal"><Image src="/pipe-cleaning-illustration.png" alt="미세버블이 배관의 녹과 스케일을 분리하는 공법 일러스트" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="techPanel reveal">
          <p className="eyebrow dark"><span /> OUR TECHNOLOGY · 02</p>
          <h2>자화활성수 ×<br /><em>압축 미세버블</em></h2>
          <p>자화활성수기를 통과한 친환경 자화수와 압축 공기를 배관에 반복 투입합니다. 공기층이 수축·팽창하며 만드는 물리적 충격이 배관 벽의 녹과 스케일을 떨어뜨립니다.</p>
          <div className="process">
            <div><b>01</b><span>자화활성수<br />배관 투입</span></div><i>→</i>
            <div><b>02</b><span>미세버블<br />수축·팽창</span></div><i>→</i>
            <div><b>03</b><span>녹·스케일<br />분리 배출</span></div>
          </div>
          <div className="patent"><span>특허 공법</span><p>화학 약품 대신 물과 공기의 힘으로<br />배관을 세척하는 친환경 솔루션</p></div>
        </div>
      </section>

      <section className="reasons section">
        <div className="sectionLabel reveal">WHY PIPE CLEANING <span>03</span></div>
        <div className="titleRow reveal"><h2>왜, 지금<br /><em>배관세척일까요?</em></h2><p>깨끗해 보이는 수돗물도 노후 배관을 지나며 달라질 수 있습니다.<br />배관 관리는 선택이 아니라 우리 가족의 일상을 위한 기본입니다.</p></div>
        <div className="reasonList">
          {reasons.map((item) => <article className="reason reveal" key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.body}</p><b>↗</b></article>)}
        </div>
      </section>

      <section className="eco">
        <div className="ecoVisual reveal"><Image src="/eco-technician.png" alt="배관 세척 후 맑은 물을 점검하는 전문 기사" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
        <div className="ecoCopy reveal">
          <p className="eyebrow"><span /> ECO-FRIENDLY SERVICE</p>
          <h2>강한 세척보다<br /><em>올바른 세척.</em></h2>
          <p>배관을 무리하게 손상시키거나 화학 약품에 의존하지 않습니다. 배관의 재질과 현장 상태를 살핀 뒤, 물과 공기의 물리적 에너지로 필요한 부분을 섬세하게 관리합니다.</p>
          <ul><li><b>✓</b> 배관 재질·형태에 관계없이 적용</li><li><b>✓</b> 녹과 스케일의 친환경적 제거</li><li><b>✓</b> 세척부터 부식 억제까지 통합 관리</li></ul>
        </div>
      </section>

      <section className="compare section">
        <div className="sectionLabel reveal">SMARTER CHOICE <span>04</span></div>
        <div className="titleRow reveal"><h2>철거는 줄이고,<br /><em>효율은 높이고.</em></h2><p>크린워터시스템의 갱생공법은 기존 배관을 활용해<br />공사 기간과 비용 부담을 효과적으로 낮춥니다.</p></div>
        <div className="compareGrid reveal">
          {methods.map((m) => <article className={m.featured ? "method featured" : "method"} key={m.name}>{m.featured && <span className="best">CLEAN WATER</span>}<h3>{m.name}</h3><p>{m.desc}</p><dl><div><dt>예상 공사비</dt><dd>{m.cost}</dd></div><div><dt>예상 기간</dt><dd>{m.time}</dd></div></dl></article>)}
        </div>
        <p className="note">* 비용과 기간은 원문에 제시된 비교 예시이며, 실제 현장 규모와 상태에 따라 달라질 수 있습니다.</p>
      </section>

      <section id="contact" className="contact">
        <div className="contactGlow" />
        <div className="contactInner reveal">
          <p className="eyebrow"><span /> START WITH CLEAN WATER</p>
          <h2>우리집 배관,<br /><em>지금 확인해보세요.</em></h2>
          <p>현장에 맞는 세척 방법부터 예상 비용까지<br />크린워터시스템이 친절하게 안내해 드립니다.</p>
          <a href="tel:1644-7231" className="callBtn"><small>고객센터</small><strong>1644-7231</strong><b>전화 상담 ↗</b></a>
          <div className="contactInfo"><span>cleanwater7233@naver.com</span><span>충청북도 옥천군 군북면 비야대정로 213-11</span></div>
        </div>
      </section>

      <footer><div className="brand"><span className="drop">C</span><span>CLEAN WATER</span><small>SYSTEM</small></div><p>대표 이명주 · 사업자등록번호 305-86-18170</p><p>© CLEAN WATER SYSTEM. ALL RIGHTS RESERVED.</p></footer>
      <a className="floatingCall" href="tel:1644-7231" aria-label="전화 상담"><span>☎</span><small>빠른상담</small></a>
    </main>
  );
}
