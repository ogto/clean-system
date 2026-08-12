"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck2,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Droplets,
  Factory,
  Gauge,
  GraduationCap,
  Hotel,
  House,
  Menu,
  Microscope,
  Phone,
  Pipette,
  School,
  ShieldCheck,
  Sparkles,
  Store,
  TestTube2,
  Waves,
  Wrench,
  X,
} from "lucide-react";

type Detail = {
  id: string;
  title: string;
  eyebrow: string;
  image: string;
  description: string;
  message: string;
  bullets: string[];
};

type Service = {
  number: string;
  title: string;
  copy: string;
  icon: LucideIcon;
  detail: Detail;
};

const navLinks = [
  ["#company", "회사소개"],
  ["#water-pipe", "수질·배관관리"],
  ["#solution", "워터솔루션"],
  ["#management", "관리·인증"],
  ["#partner", "파트너·상담"],
];

const heroSlides = [
  {
    image: "/alpha-hero-pipeline.png",
    alt: "도시와 깨끗한 물이 흐르는 산업용 배관",
  },
  {
    image: "/eco-technician.png",
    alt: "현장에서 수질 상태를 확인하는 전문 기술자",
  },
  {
    image: "/hero-pipe.png",
    alt: "깨끗하게 관리된 급수 배관 설비",
  },
];

const concerns = [
  { icon: Droplets, title: "녹물·이물질", copy: "눈에 보이지 않는 배관 내부의 침전물" },
  { icon: Waves, title: "냄새·탁도", copy: "생활용수의 불쾌한 냄새와 흐림" },
  { icon: Wrench, title: "노후 배관", copy: "부식과 스케일로 저하되는 배관 성능" },
  { icon: Sparkles, title: "스케일·부식", copy: "설비 수명과 수질에 영향을 주는 오염" },
  { icon: CalendarCheck2, title: "관리 주기 미확인", copy: "기록 없이 놓치기 쉬운 정기 관리" },
  { icon: ShieldCheck, title: "위생·안전 우려", copy: "시설 이용자의 건강과 신뢰 문제" },
];

const services: Service[] = [
  {
    number: "01",
    title: "수질관리",
    copy: "사용 환경에 맞는 수질 진단과 개선 솔루션",
    icon: TestTube2,
    detail: {
      id: "water-quality",
      title: "수질관리",
      eyebrow: "WATER QUALITY MANAGEMENT",
      image: "/eco-technician.png",
      description: "시설의 사용 목적과 급수 환경을 확인하고, 현장 수질 상태에 맞는 관리 방향을 제안합니다.",
      message: "보이는 물뿐 아니라 물이 지나오는 환경까지 관리합니다.",
      bullets: ["현장 사용 환경 확인", "수질 상태 점검 및 기록", "시설별 맞춤 관리안 제시"],
    },
  },
  {
    number: "02",
    title: "배관관리",
    copy: "노후 배관과 급수설비의 상태를 체계적으로 관리",
    icon: Wrench,
    detail: {
      id: "pipe-management",
      title: "배관관리",
      eyebrow: "PIPE MANAGEMENT",
      image: "/hero-pipe.png",
      description: "배관의 노후도와 오염 가능성을 진단하고 설비 특성에 맞춰 관리 주기와 개선 방법을 설계합니다.",
      message: "배관을 바꾸기 전에, 먼저 정확히 진단합니다.",
      bullets: ["노후·부식 상태 확인", "급수설비 점검", "예방 중심 관리 계획"],
    },
  },
  {
    number: "03",
    title: "배관세척",
    copy: "배관 내부의 스케일과 이물질을 전문적으로 세척",
    icon: Pipette,
    detail: {
      id: "pipe-cleaning",
      title: "배관세척",
      eyebrow: "PROFESSIONAL PIPE CLEANING",
      image: "/pipe-cleaning-illustration.png",
      description: "시설과 배관의 상태를 고려한 전문 세척 방식으로 내부 이물질과 침전물을 관리합니다.",
      message: "깨끗한 물은 깨끗한 배관에서 시작됩니다.",
      bullets: ["세척 전 상태 확인", "맞춤 세척 공정 적용", "세척 결과 및 관리 이력 제공"],
    },
  },
  {
    number: "04",
    title: "수질 솔루션",
    copy: "시설 목적에 맞는 수질관리 솔루션과 제품 제공",
    icon: Gauge,
    detail: {
      id: "water-solution",
      title: "맞춤 워터솔루션",
      eyebrow: "CUSTOM WATER SOLUTION",
      image: "/alpha-hero-pipeline.png",
      description: "진단 결과를 바탕으로 필터, 세척, 정기관리 등 시설에 필요한 요소를 하나의 관리 체계로 연결합니다.",
      message: "진단부터 개선, 기록까지 하나의 솔루션으로 연결합니다.",
      bullets: ["시설별 솔루션 설계", "제품 및 공정 제안", "사후관리 체계 구축"],
    },
  },
  {
    number: "05",
    title: "정기관리",
    copy: "일회성 작업이 아닌 지속적인 평가와 기록 관리",
    icon: ClipboardCheck,
    detail: {
      id: "regular-care",
      title: "정기관리",
      eyebrow: "REGULAR MANAGEMENT",
      image: "/partner-field-team.png",
      description: "점검 일정, 작업 결과, 개선 이력을 체계적으로 관리해 시설의 안정적인 수질 환경을 유지합니다.",
      message: "한 번의 작업보다 꾸준한 관리가 더 중요합니다.",
      bullets: ["정기 점검 일정 운영", "관리 이력 체계화", "변화 추이 및 개선점 안내"],
    },
  },
];

const managementSteps = [
  [Phone, "현장 상담"],
  [Building2, "시설·배관 확인"],
  [Microscope, "상태 분석"],
  [ClipboardCheck, "맞춤 솔루션 제안"],
  [Wrench, "세척·관리 적용"],
  [BadgeCheck, "관리 이력·인증"],
] as const;

const qualificationSteps = [
  [GraduationCap, "전문 교육"],
  [ClipboardCheck, "자격 검정"],
  [BadgeCheck, "자격 취득"],
  [Wrench, "현장 적용"],
  [CalendarCheck2, "지속 교육"],
] as const;

const spaces = [
  [Building2, "아파트·공동주택"],
  [School, "학교·교육시설"],
  [Store, "음식점·카페"],
  [Factory, "공장·산업시설"],
  [Hotel, "병원·요양시설"],
  [GraduationCap, "경로당·복지시설"],
  [Building2, "상가·업무시설"],
  [House, "일반 가정"],
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [detail, setDetail] = useState<Detail | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modalOpen", Boolean(detail));
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetail(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.classList.remove("modalOpen");
      window.removeEventListener("keydown", onEscape);
    };
  }, [detail]);

  const moveHero = (direction: number) => {
    setHeroIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <main id="top">
      <header className="siteHeader">
        <div className="headerInner">
          <a className="brand" href="#top" aria-label="알파브릿지 홈">
            <span className="brandLogo" aria-hidden="true">
              <Image src="/alpha-bridge-symbol-transparent.png" alt="" fill sizes="72px" priority />
            </span>
            <span className="brandWords"><strong>ALPHA BRIDGE</strong><small>WATER &amp; PIPE MANAGEMENT</small></span>
          </a>

          <nav id="primary-navigation" className={menuOpen ? "nav isOpen" : "nav"} aria-label="주요 메뉴">
            {navLinks.map(([href, label]) => (
              <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
          </nav>

          <a className="headerCall" href="tel:1533-0000"><Phone aria-hidden="true" /><span>관리상담<strong>1533-XXXX</strong></span></a>
          <button className="menuButton" type="button" aria-controls="primary-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroSlides" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <div className={index === heroIndex ? "heroSlide active" : "heroSlide"} key={slide.image}>
              <Image src={slide.image} alt="" fill priority={index === 0} sizes="(min-width: 1600px) 1600px, 100vw" />
            </div>
          ))}
          <div className="heroVeil" />
        </div>
        <div className="heroInner">
          <p className="eyebrow">더 나은 물, 더 나은 삶</p>
          <h1 id="hero-title">프리미엄<br /><strong>워터 솔루션</strong></h1>
          <p className="heroEnglish">WATER &amp; PIPE MANAGEMENT</p>
          <p className="heroDescription">물의 품질을 넘어, 물이 지나오는 환경까지 관리합니다.<br />알파브릿지는 수질과 배관을 함께 진단하고 관리하는 전문기업입니다.</p>
          <div className="heroActions">
            <a className="primaryButton" href="#water-pipe">수질·배관 관리 상담<ArrowRight aria-hidden="true" /></a>
            <a className="outlineButton" href="#partner">사업 파트너 문의</a>
          </div>
        </div>
        <button className="heroArrow prev" type="button" aria-label="이전 배너" onClick={() => moveHero(-1)}><ChevronLeft /></button>
        <button className="heroArrow next" type="button" aria-label="다음 배너" onClick={() => moveHero(1)}><ChevronRight /></button>
        <div className="heroDots" aria-label="배너 선택">
          {heroSlides.map((slide, index) => <button className={index === heroIndex ? "active" : ""} type="button" aria-label={`${index + 1}번 배너`} onClick={() => setHeroIndex(index)} key={slide.image} />)}
        </div>
      </section>

      <section className="introSection" id="company">
        <div className="container">
          <p className="sectionEyebrow">WHY ALPHA BRIDGE</p>
          <h2>우리가 매일 사용하는 물,<br />그 물이 지나오는 배관은 잘 관리되고 있을까요?</h2>
          <div className="concernGrid">
            {concerns.map(({ icon: Icon, title, copy }) => (
              <article key={title}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <p className="introMessage">눈에 보이는 물은 깨끗해 보여도, 배관 내부는 다양한 문제에 노출되어 있습니다.<br /><strong>그래서 알파브릿지는 물만 보는 것이 아니라, 물이 지나오는 환경까지 관리합니다.</strong></p>
        </div>
      </section>

      <section className="expertiseSection" id="water-pipe" aria-labelledby="expertise-title">
        <div className="container expertiseGrid">
          <div className="expertiseCopy">
            <p>PROFESSIONAL QUALIFICATION</p>
            <h2 id="expertise-title"><span>전문가가 관리해야</span><br />정확하고 안전합니다.</h2>
            <p className="expertiseLead">배관과 수질관리는 전문 지식과 현장 경험이 함께 필요한 영역입니다. 알파브릿지는 관련 전문 교육과 자격 기준을 바탕으로 시설별 관리 계획을 세웁니다.</p>
            <div className="qualificationFlow" aria-label="전문 자격 관리 과정">
              {qualificationSteps.map(([Icon, label], index) => (
                <div key={label}>
                  <i><Icon aria-hidden="true" /></i>
                  <strong>{label}</strong>
                  {index < qualificationSteps.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
                </div>
              ))}
            </div>
            <p className="expertiseNote"><BadgeCheck aria-hidden="true" />배관·수질관리 전문 자격을 갖춘 관리자가 현장에 맞는 관리 기준을 적용합니다.</p>
          </div>

          <div className="credentialGallery" aria-label="배관 및 수질관리 전문 자격 증빙">
            <p className="credentialTitle">한국수질관리연합회 자격증</p>
            <div className="credentialDocuments">
              <figure className="credentialDocument">
                <Image src="/water-quality-manager-certificate.jpg" alt="한국 수질 관리 연합회 수질 배관 전문 관리자 자격증" fill sizes="(max-width: 720px) 43vw, 235px" />
              </figure>
              <figure className="credentialDocument">
                <Image src="/pipe-water-quality-specialist-certificate.jpg" alt="배관 및 수질관리전문 자격증과 자격증 표지" fill sizes="(max-width: 720px) 43vw, 235px" />
              </figure>
            </div>
            <div className="credentialBadge">
              <span>자격증 예시</span>
              <BadgeCheck aria-hidden="true" />
              <div><strong>배관·수질관리</strong><small>전문 자격 보유</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="serviceSection" id="solution">
        <div className="container">
          <div className="sectionHeading"><p>OUR SERVICES</p><h2>알파브릿지의 전문 서비스</h2><span>카드를 선택하면 상세 내용을 확인할 수 있습니다.</span></div>
          <div className="serviceGrid">
            {services.map(({ icon: Icon, detail: itemDetail, ...service }) => (
              <button className="serviceCard" type="button" onClick={() => setDetail(itemDetail)} key={service.number}>
                <span className="serviceNumber">{service.number}</span><i><Icon aria-hidden="true" /></i><h3>{service.title}</h3><p>{service.copy}</p><b>자세히 보기<ArrowRight aria-hidden="true" /></b>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="managementSection" id="management">
        <div className="container caseStudy">
          <div className="caseCopy">
            <p>BEFORE &amp; AFTER</p>
            <h2>배관세척 전·후,<br />변화를 직접 확인하세요.</h2>
            <span>동일한 배관 내부를 세척 전과 후로 비교해 오염과 스케일 제거 상태를 한눈에 보여드립니다.</span>
            <small>※ 관리 결과를 설명하기 위한 예시 이미지이며, 실제 결과는 배관 재질과 노후도에 따라 달라질 수 있습니다.</small>
            <button type="button" onClick={() => setDetail(services[2].detail)}>배관세척 상담하기<ArrowRight /></button>
          </div>
          <div className="caseVisual">
            <Image src="/pipe-before-after.png" alt="오염과 스케일이 쌓인 배관 내부와 세척 후 깨끗해진 동일 배관 내부 비교" fill sizes="(max-width: 760px) 100vw, 58vw" />
            <span className="before">BEFORE · 세척 전</span>
            <span className="after">AFTER · 세척 후</span>
          </div>
        </div>

        <div className="container managementGrid">
          <div className="managementProcess">
            <div className="sectionHeading left"><p>MANAGEMENT PROCESS</p><h2>알파브릿지의 관리 프로세스</h2></div>
            <div className="stepsGrid">
              {managementSteps.map(([Icon, label], index) => <div key={label}><i><Icon aria-hidden="true" /></i><span>{index + 1}</span><strong>{label}</strong></div>)}
            </div>
          </div>
          <article className="certificateCard">
            <div><p>ALPHA BRIDGE QUALITY STANDARD</p><h2>수질관리 인증</h2><span>관리되고 있다는 것을 보여주는 새로운 기준</span><ul><li><Check />정기적인 수질·배관 관리 실시</li><li><Check />관리기록 및 점검 보유</li><li><Check />필요한 배관 관리 및 세척</li><li><Check />지속적인 사후 관리</li></ul></div>
            <div className="certificateSeal"><BadgeCheck aria-hidden="true" /><small>ALPHA BRIDGE</small><strong>수질관리<br />인증사업장</strong><span>QUALITY MANAGEMENT</span></div>
          </article>
        </div>
      </section>

      <section className="spacesSection">
        <div className="container">
          <div className="sectionHeading"><p>WHO WE MANAGE</p><h2>알파브릿지가 관리하는 공간</h2></div>
          <div className="spacesGrid">{spaces.map(([Icon, label]) => <article key={label}><Icon aria-hidden="true" /><strong>{label}</strong></article>)}</div>
        </div>
      </section>

      <section className="partnerSection" id="partner">
        <div className="container partnerPanel">
          <div><p>BUSINESS PARTNER</p><h2>알파브릿지와 함께<br />지역의 워터 매니지먼트 시장을 만듭니다.</h2><span>지사·대리점·영업점 파트너를 모집합니다.</span></div>
          <div className="partnerActions"><a href="tel:1533-0000"><Phone />관리 상담 1533-XXXX</a><a href="mailto:contact@alpha-waterbridge.com"><CalendarCheck2 />파트너 문의하기</a></div>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <div className="footerBrand"><div className="footerLogo"><span><Image src="/alpha-bridge-symbol-transparent.png" alt="" fill sizes="82px" /></span><strong>ALPHA BRIDGE</strong></div><p>WATER &amp; PIPE MANAGEMENT<br />물과 배관, 그리고 관리의 새로운 기준</p></div>
          <div className="footerInfo"><p><a href="#company">회사소개</a><a href="#water-pipe">수질·배관관리</a><a href="#partner">문의하기</a></p><p>알파브릿지 주식회사　|　사업자등록번호: 123-45-67890</p><p>고객센터: 1533-XXXX　|　contact@alpha-waterbridge.com</p><small>© ALPHA BRIDGE. All rights reserved.</small></div>
        </div>
      </footer>

      {detail ? (
        <div className="modalBackdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDetail(null); }}>
          <section className="detailModal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
            <button className="modalClose" type="button" aria-label="팝업 닫기" onClick={() => setDetail(null)}><X /></button>
            <header><p>{detail.eyebrow}</p><h2 id="detail-title">{detail.title}</h2></header>
            <div className="modalImage"><Image src={detail.image} alt={`${detail.title} 대표 이미지`} fill sizes="(max-width: 640px) 95vw, 760px" /></div>
            <div className="modalBody"><p>{detail.description}</p><ul>{detail.bullets.map((bullet) => <li key={bullet}><Check />{bullet}</li>)}</ul><strong>{detail.message}</strong><a href="#partner" onClick={() => setDetail(null)}>상담 문의하기<ArrowRight /></a></div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
