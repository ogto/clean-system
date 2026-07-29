"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const network = [
  {
    no: "01",
    label: "HEADQUARTERS",
    title: "본사",
    copy: "브랜드 전략과 기술을 개발하고, 장비·필터·교육·고객관리 시스템을 하나의 기준으로 연결합니다.",
    tags: ["브랜드 운영", "기술 개발", "전국 마케팅"],
  },
  {
    no: "02",
    label: "REGIONAL HUB",
    title: "지사",
    copy: "광역 단위 운영 거점으로 물류와 교육을 지원하며, 지역 네트워크의 안정적인 성장을 관리합니다.",
    tags: ["광역 운영", "교육 지원", "물류 관리"],
  },
  {
    no: "03",
    label: "LOCAL CENTER",
    title: "지점",
    copy: "현장과 가장 가까운 관리 거점으로 대리점 교육, 품질 점검, 고객 경험을 체계적으로 관리합니다.",
    tags: ["현장 지원", "품질 관리", "고객 경험"],
  },
  {
    no: "04",
    label: "SERVICE PARTNER",
    title: "대리점",
    copy: "표준 교육을 이수한 지역 파트너가 시공부터 정기 케어까지 고객의 배관을 책임 있게 관리합니다.",
    tags: ["전문 시공", "정기 케어", "A/S 지원"],
  },
];

const careItems = [
  ["01", "정기 방문 관리", "3개월 주기로 배관·필터·장비 상태를 점검하고 관리 이력을 남깁니다."],
  ["02", "배관 건강지수", "점검 결과를 이해하기 쉬운 지표로 정리해 현재 상태와 관리 시점을 안내합니다."],
  ["03", "필터·장비 케어", "정품 필터의 교체 주기와 장비 컨디션을 지속적으로 확인합니다."],
  ["04", "수질 분석 연계", "필요 시 전문기관 수질 분석을 연계해 물 상태를 더욱 면밀히 확인합니다."],
];

const values = [
  ["Standard", "전국 어디서나 같은 품질", "교육부터 시공, 사후관리까지 알파브릿지의 표준 프로세스를 적용합니다."],
  ["Technology", "현장을 바꾸는 기술", "배관 세척과 내부 도금, 필터 케어를 연결해 배관의 생애주기를 관리합니다."],
  ["Care", "설치 이후가 진짜 시작", "일회성 시공에 그치지 않고 정기 방문과 기록으로 오래 신뢰받는 서비스를 만듭니다."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNetwork, setActiveNetwork] = useState(0);
  const [networkPaused, setNetworkPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (networkPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActiveNetwork((current) => (current + 1) % network.length),
      3200
    );
    return () => window.clearInterval(timer);
  }, [networkPaused]);

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="알파브릿지 홈">
          <span className="brandMark">
            <Image src="/alpha-bridge-logo.png" alt="" fill sizes="48px" priority />
          </span>
          <span className="brandType">
            <strong>ALPHA BRIDGE</strong>
            <small>알파브릿지</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="주요 메뉴">
          <a href="#about" onClick={() => setMenuOpen(false)}>기업소개</a>
          <a href="#solution" onClick={() => setMenuOpen(false)}>배관 솔루션</a>
          <a href="#network" onClick={() => setMenuOpen(false)}>파트너 네트워크</a>
          <a href="#care" onClick={() => setMenuOpen(false)}>케어 서비스</a>
        </nav>

        <a className="headerCta" href="#contact">사업 제휴 문의 <span>↗</span></a>
        <button
          className={menuOpen ? "menuButton is-active" : "menuButton"}
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="kicker"><span /> WATER INFRASTRUCTURE COMPANY</p>
          <h1>
            깨끗한 물이 흐르는 길,<br />
            <em>알파브릿지가 만듭니다.</em>
          </h1>
          <p className="heroText">
            배관을 시공하는 데서 멈추지 않습니다.<br />
            기술과 사람, 지역을 연결해 대한민국의 수도배관을<br className="desktopOnly" />
            평생 관리하는 새로운 기준을 만듭니다.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#about">알파브릿지 알아보기 <span>↓</span></a>
            <a className="linkButton" href="#network">파트너십 안내 <span>→</span></a>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <Image
            src="/alpha-hero-pipeline.png"
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 60vw"
          />
          <div className="heroImageFade" />
          <div className="heroBadge">
            <span>OUR VISION</span>
            <strong>대한민국 수도배관<br />관리의 새로운 표준</strong>
          </div>
        </div>

        <div className="heroBottom">
          <span>TECHNOLOGY</span><i />
          <span>NETWORK</span><i />
          <span>LIFETIME CARE</span>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="sectionHead" data-reveal>
          <p className="sectionNo">01</p>
          <p className="sectionEyebrow">ABOUT ALPHA BRIDGE</p>
          <p className="sectionSide">BRAND · TECHNOLOGY · NETWORK</p>
        </div>
        <div className="aboutLead">
          <h2 data-reveal>
            한 번의 시공이 아닌,<br />
            <em>평생의 물을 관리합니다.</em>
          </h2>
          <div className="aboutCopy" data-reveal>
            <p>
              알파브릿지는 장비 판매 중심의 회사가 아닙니다. 배관 기술, 표준화된 교육,
              지역 파트너, 정기 케어 서비스를 하나로 연결하는 <strong>수도배관 관리 전문 기업</strong>입니다.
            </p>
            <p>
              고객에게는 오래 안심할 수 있는 물 환경을, 파트너에게는 기술과 시스템을
              기반으로 성장할 수 있는 지속 가능한 사업 기반을 제공합니다.
            </p>
          </div>
        </div>

        <div className="valueGrid">
          {values.map((item, index) => (
            <article className="valueCard" data-reveal key={item[0]}>
              <span className="valueIndex">0{index + 1}</span>
              <p>{item[0]}</p>
              <h3>{item[1]}</h3>
              <div className="valueLine" />
              <small>{item[2]}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="solution section" id="solution">
        <div className="sectionHead light" data-reveal>
          <p className="sectionNo">02</p>
          <p className="sectionEyebrow">PIPE INNER PLATING</p>
          <p className="sectionSide">ALPHA INNER SHIELD™</p>
        </div>

        <figure className="solutionScene" data-reveal>
          <Image
            src="/og.png"
            alt="도금 보호층과 맑은 물이 흐르는 알파브릿지 배관 인프라"
            fill
            sizes="(max-width: 900px) 100vw, 90vw"
          />
          <figcaption>
            <span>ALPHA INNER SHIELD™</span>
            <strong>도금 기술로 완성하는 더 깨끗한 물길</strong>
          </figcaption>
        </figure>

        <div className="solutionGrid">
          <div className="solutionCopy" data-reveal>
            <p className="miniLabel">배관 내부까지 생각한 보호 기술</p>
            <h2>
              물이 닿는 가장 안쪽,<br />
              <em>도금으로 한 번 더 보호합니다.</em>
            </h2>
            <p className="solutionText">
              배관 안쪽에 균일한 보호 도금층을 형성해 물과 배관 모재의 직접 접촉을 줄이고,
              내부 표면을 매끄럽게 유지하도록 돕는 배관 솔루션입니다. 노후 배관의 관리
              부담을 낮추고, 더 안정적인 물길을 만드는 데 초점을 맞췄습니다.
            </p>
            <ul className="featureList">
              <li><b>01</b><span><strong>내부 표면 보호</strong>부식과 스케일 발생 요인을 줄이는 보호층</span></li>
              <li><b>02</b><span><strong>위생적인 물길</strong>매끄러운 내면으로 오염물 부착 부담 완화</span></li>
              <li><b>03</b><span><strong>배관 수명 관리</strong>교체 전 관리 선택지를 넓히는 예방 솔루션</span></li>
            </ul>
            <p className="finePrint">
              * 적용 가능 여부와 기대 효과는 배관 재질, 노후도, 현장 조건에 따라 달라질 수 있으며 사전 진단 후 안내됩니다.
            </p>
          </div>

          <div className="pipeDiagram" data-reveal>
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="pipeCutaway">
              <div className="pipeShell">
                <div className="platingLayer">
                  <div className="waterCore">
                    <span className="waterGlint" />
                  </div>
                </div>
              </div>
            </div>
            <div className="diagramLabel labelShell"><span>01</span><b>배관 모재</b><small>Structural pipe</small></div>
            <div className="diagramLabel labelPlating"><span>02</span><b>보호 도금층</b><small>Inner plating</small></div>
            <div className="diagramLabel labelWater"><span>03</span><b>깨끗한 물길</b><small>Clean water</small></div>
            <p className="diagramCaption">ALPHA INNER SHIELD™ <span>PIPE CROSS SECTION</span></p>
          </div>
        </div>
      </section>

      <section className="network section" id="network">
        <div className="sectionHead" data-reveal>
          <p className="sectionNo">03</p>
          <p className="sectionEyebrow">NATIONWIDE PARTNERSHIP</p>
          <p className="sectionSide">CONNECTED GROWTH SYSTEM</p>
        </div>
        <div className="networkIntro">
          <h2 data-reveal>
            혼자가 아닌 시스템으로,<br />
            <em>전국을 하나의 품질로.</em>
          </h2>
          <p data-reveal>
            본사에서 지역 파트너까지 역할과 책임을 명확히 나누고,
            기술·교육·물류·고객관리를 연결합니다. 단순 모집이 아니라
            현장에서 지속되는 사업을 함께 만드는 운영 네트워크입니다.
          </p>
        </div>

        <div
          className="networkGraph"
          data-reveal
          onMouseEnter={() => setNetworkPaused(true)}
          onMouseLeave={() => setNetworkPaused(false)}
        >
          <div className="networkGraphHeader">
            <span>INTERACTIVE NETWORK</span>
            <p>각 거점을 선택해 역할과 연결 구조를 확인해 보세요.</p>
          </div>
          <div className="networkGraphCanvas">
            <div className="networkRail" aria-hidden="true">
              <i style={{ width: `${(activeNetwork / (network.length - 1)) * 100}%` }} />
            </div>
            <div className="networkNodes">
              {network.map((item, index) => (
                <button
                  className={activeNetwork === index ? "networkNode is-active" : "networkNode"}
                  type="button"
                  key={item.no}
                  onClick={() => setActiveNetwork(index)}
                  onFocus={() => {
                    setActiveNetwork(index);
                    setNetworkPaused(true);
                  }}
                  onBlur={() => setNetworkPaused(false)}
                  onMouseEnter={() => setActiveNetwork(index)}
                  aria-pressed={activeNetwork === index}
                >
                  <span className="nodeNumber">{item.no}</span>
                  <span className="nodePulse"><i /><i /><i /></span>
                  <strong>{item.title}</strong>
                  <small>{item.label}</small>
                </button>
              ))}
            </div>
            <aside className="networkDetail" key={network[activeNetwork].no}>
              <span>{network[activeNetwork].no} · {network[activeNetwork].label}</span>
              <h3>{network[activeNetwork].title}</h3>
              <p>{network[activeNetwork].copy}</p>
              <div>
                {network[activeNetwork].tags.map((tag) => <b key={tag}>{tag}</b>)}
              </div>
            </aside>
          </div>
        </div>

        <div className="networkFlow" data-reveal>
          {network.map((item, index) => (
            <article className="networkCard" key={item.no}>
              <div className="networkCardTop">
                <span>{item.no}</span>
                <small>{item.label}</small>
              </div>
              <div className="networkSymbol" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="networkTags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              {index < network.length - 1 && <b className="flowArrow">→</b>}
            </article>
          ))}
        </div>

        <div className="networkPromise" data-reveal>
          <p>PARTNER PRINCIPLE</p>
          <strong>알파브릿지는 모집이 아닌, 실제 사업 운영과 성장에 보상하는 파트너십을 지향합니다.</strong>
          <span>표준 교육 · 운영 지원 · 기술 지원 · 품질 관리</span>
        </div>
      </section>

      <section className="care section" id="care">
        <div className="careBackdrop" aria-hidden="true">CARE</div>
        <div className="sectionHead light" data-reveal>
          <p className="sectionNo">04</p>
          <p className="sectionEyebrow">ALPHA BRIDGE CARE</p>
          <p className="sectionSide">BEYOND INSTALLATION</p>
        </div>
        <div className="careIntro">
          <div data-reveal>
            <p className="miniLabel">설치 이후에도 계속되는 관리</p>
            <h2>
              3개월마다 확인하고,<br />
              <em>평생 안심을 쌓습니다.</em>
            </h2>
          </div>
          <p data-reveal>
            전문 파트너가 정기적으로 방문해 배관과 필터 상태를 확인하고,
            기록 기반으로 다음 관리 시점을 안내합니다. 고객은 더 쉽게 확인하고,
            파트너는 더 체계적으로 관리하는 서비스 경험을 설계합니다.
          </p>
        </div>

        <div className="careContent">
          <div className="careTimeline" data-reveal>
            <div className="cycle">
              <span>EVERY</span>
              <strong>3</strong>
              <b>MONTHS</b>
            </div>
            <div className="cycleRing ringOne" />
            <div className="cycleRing ringTwo" />
            <div className="cycleDot dotOne" />
            <div className="cycleDot dotTwo" />
            <div className="cycleDot dotThree" />
          </div>
          <div className="careList">
            {careItems.map((item) => (
              <article data-reveal key={item[0]}>
                <span>{item[0]}</span>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vision section">
        <p className="visionEyebrow" data-reveal>THE NEXT STANDARD OF WATER CARE</p>
        <h2 data-reveal>
          기술을 잇고, 지역을 잇고,<br />
          <em>더 건강한 일상을 잇습니다.</em>
        </h2>
        <div className="visionLine" data-reveal>
          <span>PIPE TECHNOLOGY</span>
          <i />
          <span>PEOPLE &amp; NETWORK</span>
          <i />
          <span>CLEAN WATER LIFE</span>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactCard" data-reveal>
          <div>
            <p className="miniLabel">BUILD THE STANDARD TOGETHER</p>
            <h2>알파브릿지와 함께<br />새로운 물길을 시작하세요.</h2>
          </div>
          <div className="contactCopy">
            <p>
              지역 사업 파트너십부터 배관 솔루션 도입까지,<br />
              알파브릿지가 함께 검토하고 안내해 드립니다.
            </p>
            <a href="tel:16447231">사업 제휴 상담 <span>1644-7231</span><b>↗</b></a>
            <small>상담 가능 시간 · 평일 09:00 — 18:00</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <span className="footerMark"><Image src="/alpha-bridge-logo.png" alt="" fill sizes="60px" /></span>
          <span><strong>ALPHA BRIDGE</strong><small>알파브릿지</small></span>
        </div>
        <div className="footerMeta">
          <p>깨끗한 물을 평생 관리하는 수도배관 전문 기업</p>
          <p>© 2026 ALPHA BRIDGE. ALL RIGHTS RESERVED.</p>
        </div>
        <a href="#top" className="toTop" aria-label="페이지 맨 위로">↑</a>
      </footer>
    </main>
  );
}
