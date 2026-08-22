"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  GraduationCap,
  Menu,
  Microscope,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Waves,
  Wrench,
  X,
} from "lucide-react";

type Detail = {
  id: string;
  title: string;
  image: string;
  description: string;
  message: string;
  bullets: string[];
};

type Service = {
  number: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  detail: Detail;
};

type EvidenceItem = {
  category: string;
  title: string;
  image: string;
  alt: string;
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
    image: "/lumi-water-hero.jpg",
    alt: "알파브릿지 루미워터 제품과 구성 부품",
  },
  {
    image: "/alpha-hero-pipeline.png",
    alt: "도시의 깨끗한 물과 산업용 급수 배관",
  },
  {
    image: "/water-city-hero.png",
    alt: "도시 수변 공간과 깨끗한 물이 흐르는 배관",
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
    image: "/service-water-quality.jpg",
    imageAlt: "전문 관리자가 수질을 측정하는 모습",
    detail: {
      id: "water-quality",
      title: "수질관리",
      image: "/service-water-quality.jpg",
      description: "시설의 사용 목적과 급수 환경을 확인하고, 현장 수질 상태에 맞는 관리 방향을 제안합니다.",
      message: "보이는 물뿐 아니라 물이 지나오는 환경까지 관리합니다.",
      bullets: ["현장 사용 환경 확인", "수질 상태 점검 및 기록", "시설별 맞춤 관리안 제시"],
    },
  },
  {
    number: "02",
    title: "배관관리",
    copy: "노후 배관과 급수설비의 상태를 체계적으로 관리",
    image: "/service-pipe-inspection.jpg",
    imageAlt: "전문 관리자가 배관 내부를 점검하는 모습",
    detail: {
      id: "pipe-management",
      title: "배관관리",
      image: "/service-pipe-inspection.jpg",
      description: "배관의 노후도와 오염 가능성을 진단하고 설비 특성에 맞춰 관리 주기와 개선 방법을 설계합니다.",
      message: "배관을 바꾸기 전에, 먼저 정확히 진단합니다.",
      bullets: ["노후·부식 상태 확인", "급수설비 점검", "예방 중심 관리 계획"],
    },
  },
  {
    number: "03",
    title: "배관세척",
    copy: "배관 내부의 스케일과 이물질을 전문적으로 세척",
    image: "/service-pipe-cleaning.jpg",
    imageAlt: "배관의 오염수를 배출하며 세척하는 모습",
    detail: {
      id: "pipe-cleaning",
      title: "배관세척",
      image: "/service-pipe-cleaning.jpg",
      description: "시설과 배관의 상태를 고려한 전문 세척 방식으로 내부 이물질과 침전물을 관리합니다.",
      message: "깨끗한 물은 깨끗한 배관에서 시작됩니다.",
      bullets: ["세척 전 상태 확인", "맞춤 세척 공정 적용", "세척 결과 및 관리 이력 제공"],
    },
  },
  {
    number: "04",
    title: "수질 솔루션",
    copy: "시설 목적에 맞는 수질관리 솔루션과 제품 제공",
    image: "/service-water-solution-install.jpg",
    imageAlt: "전문 관리자가 루미워터 제품을 배관에 설치하는 모습",
    detail: {
      id: "water-solution",
      title: "맞춤 워터솔루션",
      image: "/lumi-water-product.jpg",
      description: "진단 결과를 바탕으로 필터, 세척, 정기관리 등 시설에 필요한 요소를 하나의 관리 체계로 연결합니다.",
      message: "진단부터 개선, 기록까지 하나의 솔루션으로 연결합니다.",
      bullets: ["자성과 양자처리 특허 기술", "시설별 맞춤 설계", "3개월 주기 1:1 케어 서비스"],
    },
  },
  {
    number: "05",
    title: "정기관리",
    copy: "일회성 작업이 아닌 지속적인 평가와 기록 관리",
    image: "/service-regular-care.jpg",
    imageAlt: "정기관리 결과를 태블릿으로 안내하고 서명받는 모습",
    detail: {
      id: "regular-care",
      title: "정기관리",
      image: "/service-regular-care.jpg",
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

const evidenceItems: EvidenceItem[] = [
  { category: "연구 자료", title: "자화수 섭취 후 DNA 손상 감소 실험", image: "/evidence/KakaoTalk_20260816_205706676.png", alt: "자화수 섭취 18주 후 DNA 손상 정도 연구 자료" },
  { category: "연구 자료", title: "동물실험 혈당강하 및 암 DNA 손상 감소 실험", image: "/evidence/KakaoTalk_20260816_205643342.png", alt: "자화수 동물실험 혈당 변화와 경구 당부하 검사 연구 자료" },
  { category: "시험성적서", title: "한국원적외선협회 음이온 시험성적서", image: "/evidence/KakaoTalk_20260816_205606648.png", alt: "한국원적외선응용평가연구원 음이온 시험성적서" },
  { category: "시험 자료", title: "대장균·포도상구균 살균 비교 실험", image: "/evidence/KakaoTalk_20260816_205552985.png", alt: "제품 통과 전후 대장균과 포도상구균 살균 실험 비교 자료" },
  { category: "시험보고서", title: "한국화학융합시험연구원 살균 시험보고서", image: "/evidence/KakaoTalk_20260816_205431726.png", alt: "한국화학융합시험연구원 살균 시험보고서 요약" },
  { category: "시험성적서", title: "한국원적외선협회 살균 시험성적서", image: "/evidence/KakaoTalk_20260816_205503545.png", alt: "한국원적외선응용평가연구원 대장균과 포도상구균 살균 시험성적서" },
  { category: "시험보고서", title: "살모넬라균·비브리오균 살균 시험보고서", image: "/evidence/KakaoTalk_20260816_205452743.png", alt: "한국화학융합시험연구원 살모넬라균과 비브리오균 살균 시험보고서" },
  { category: "분석 자료", title: "자화수기 통과 전후 시료 분석 결과", image: "/evidence/KakaoTalk_20260816_205407149.png", alt: "자화수기 통과 전후 용존산소 시료 분석 결과" },
  { category: "현장실증", title: "한국지역난방공사 기술·제품 성능확인서", image: "/evidence/KakaoTalk_20260816_205347911.png", alt: "한국지역난방공사 부식억제 및 스케일 제거 장비 현장실증 확인서" },
  { category: "시험성적서", title: "한국화학융합시험연구원 강관 시험성적서", image: "/evidence/KakaoTalk_20260816_205335052.png", alt: "강관의 녹 억제장치 시험성적서" },
  { category: "시험성적서", title: "한국산업기술시험원 스케일 포집 시험", image: "/evidence/KakaoTalk_20260816_205317556.png", alt: "한국산업기술시험원 자화수기 스케일 포집 시험 결과" },
  { category: "특허", title: "탄산수 제조기를 이용한 관로 스케일 제거 특허", image: "/evidence/KakaoTalk_20260816_205306334.png", alt: "탄산수 제조기를 이용한 관로의 스케일 제거 및 갱생공법 특허증" },
  { category: "특허", title: "철분 계통용 플런저관 특허", image: "/evidence/KakaoTalk_20260816_205257980.png", alt: "철분 계통용 플런저관 특허증" },
  { category: "특허", title: "거품막을 이용한 부식 방지 및 스케일 제거 특허", image: "/evidence/KakaoTalk_20260816_205250371.png", alt: "자성체와 거품막을 이용하는 부식 방지 및 스케일 제거장치 특허증" },
  { category: "특허", title: "다단 자석형 세정장치 특허", image: "/evidence/KakaoTalk_20260816_205240272.png", alt: "다단 자석형 세정장치 특허증" },
  { category: "인증서", title: "위생안전기준 인증서", image: "/evidence/KakaoTalk_20260816_205228505.png", alt: "한국상하수도협회 자화이온화 발생장치 위생안전기준 인증서" },
  { category: "확인서", title: "조달청 제조 등록업체 직접생산 확인", image: "/evidence/KakaoTalk_20260816_205200199.png", alt: "조달청 부식억제장비 제조업체 직접생산확인 점검 결과 통보서" },
  { category: "사업자등록", title: "알파브릿지 사업자등록증", image: "/evidence/KakaoTalk_20260816_204937649.jpg", alt: "주식회사 알파브릿지 법인 사업자등록증" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [detail, setDetail] = useState<Detail | null>(null);
  const [evidenceIndex, setEvidenceIndex] = useState(0);
  const [activeEvidence, setActiveEvidence] = useState<EvidenceItem | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modalOpen", Boolean(detail || activeEvidence));
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetail(null);
        setActiveEvidence(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.classList.remove("modalOpen");
      window.removeEventListener("keydown", onEscape);
    };
  }, [detail, activeEvidence]);

  const moveHero = (direction: number) => {
    setHeroIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const moveEvidence = (direction: number) => {
    setEvidenceIndex((current) => (current + direction + evidenceItems.length) % evidenceItems.length);
  };

  const currentEvidence = evidenceItems[evidenceIndex];

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

          <a className="headerCall" href="tel:1544-7763"><Phone aria-hidden="true" /><span>관리상담<strong>1544-7763</strong></span></a>
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
          <p className="heroDescription">물의 품질을 넘어, 물이 지나오는 환경까지 관리합니다.<br />알파브릿지는 수질과 배관을 함께 진단하고 관리하는 전문기업입니다.</p>
          <div className="heroActions">
            <a className="primaryButton" href="#water-pipe">수질·배관 관리 상담<ArrowRight aria-hidden="true" /></a>
            <a className="outlineButton" href="#partner">사업 파트너 문의</a>
          </div>
        </div>
        {heroSlides.length > 1 ? (
          <>
            <button className="heroArrow prev" type="button" aria-label="이전 배너" onClick={() => moveHero(-1)}><ChevronLeft /></button>
            <button className="heroArrow next" type="button" aria-label="다음 배너" onClick={() => moveHero(1)}><ChevronRight /></button>
            <div className="heroDots" aria-label="배너 선택">
              {heroSlides.map((slide, index) => <button className={index === heroIndex ? "active" : ""} type="button" aria-label={`${index + 1}번 배너`} onClick={() => setHeroIndex(index)} key={slide.image} />)}
            </div>
          </>
        ) : null}
      </section>

      <section className="introSection" id="company">
        <div className="container">
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
            <p className="credentialTitle">한국상하수도협회 및 한국수질관리연합회</p>
            <div className="credentialBackdrop">
              <Image src="/pipe-water-quality-specialist-certificate.jpg" alt="배관 및 수질관리전문 자격증과 자격증 표지" fill sizes="(max-width: 980px) 88vw, 520px" />
            </div>
            <figure className="credentialForeground">
              <Image src="/water-quality-manager-certificate.jpg" alt="사진이 포함된 수질 배관 전문 관리자 자격증" fill sizes="(max-width: 720px) 48vw, 250px" />
            </figure>
          </div>
        </div>
      </section>

      <section className="serviceSection" id="solution">
        <div className="container">
          <div className="sectionHeading"><h2>알파브릿지의 전문 서비스</h2><span>카드를 선택하면 상세 내용을 확인할 수 있습니다.</span></div>
          <div className="serviceGrid">
            {services.map(({ detail: itemDetail, ...service }) => (
              <button className="serviceCard" type="button" onClick={() => setDetail(itemDetail)} key={service.number}>
                <span className="serviceCardImage"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 720px) 100vw, (max-width: 1180px) 33vw, 224px" /></span>
                <span className="serviceCardBody"><span className="serviceNumber">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><b>자세히 보기<ArrowRight aria-hidden="true" /></b></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="managementSection" id="management">
        <div className="container caseStudy">
          <div className="caseCopy">
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
            <div className="sectionHeading left"><h2>알파브릿지의 관리 프로세스</h2></div>
            <div className="stepsGrid">
              {managementSteps.map(([Icon, label], index) => <div key={label}><i><Icon aria-hidden="true" /></i><span>{index + 1}</span><strong>{label}</strong></div>)}
            </div>
          </div>
          <article className="certificatePhoto">
            <Image src="/certified-site-plaque.jpg" alt="루미워터 수질관리 인증 사업장 현판" fill sizes="(max-width: 980px) 100vw, 570px" />
          </article>
        </div>
      </section>

      <section className="evidenceSection" id="evidence" aria-labelledby="evidence-title" hidden>
        <div className="container">
          <div className="evidenceHeading">
            <div>
              <h2 id="evidence-title">기술 검증·인증 자료</h2>
              <p>시험성적서, 현장실증, 특허 및 인증 자료를 한눈에 확인하세요.</p>
            </div>
            <span>검증 자료 {evidenceItems.length}건</span>
          </div>

          <div className="evidenceCarousel">
            <button className="evidenceNav prev" type="button" aria-label="이전 검증 자료" onClick={() => moveEvidence(-1)}><ChevronLeft aria-hidden="true" /></button>
            <button className="evidenceSlide" type="button" aria-label={`${currentEvidence.title} 크게 보기`} onClick={() => setActiveEvidence(currentEvidence)}>
              <span className="evidenceImage">
                <Image key={currentEvidence.image} src={currentEvidence.image} alt={currentEvidence.alt} fill sizes="(max-width: 720px) 100vw, 760px" />
              </span>
              <span className="evidenceCaption">
                <small>{currentEvidence.category}</small>
                <strong>{currentEvidence.title}</strong>
                <span>이미지를 눌러 크게 보기<ArrowRight aria-hidden="true" /></span>
              </span>
            </button>
            <button className="evidenceNav next" type="button" aria-label="다음 검증 자료" onClick={() => moveEvidence(1)}><ChevronRight aria-hidden="true" /></button>
          </div>

          <div className="evidenceStatus" aria-live="polite">
            <span className="evidenceProgress"><i style={{ width: `${((evidenceIndex + 1) / evidenceItems.length) * 100}%` }} /></span>
            <strong>{String(evidenceIndex + 1).padStart(2, "0")}<small>/ {String(evidenceItems.length).padStart(2, "0")}</small></strong>
          </div>

          <div className="evidenceThumbnails" aria-label="검증 자료 선택">
            {evidenceItems.map((item, index) => (
              <button className={index === evidenceIndex ? "active" : ""} type="button" aria-label={`${index + 1}번 ${item.title}`} aria-current={index === evidenceIndex ? "true" : undefined} onClick={() => setEvidenceIndex(index)} key={item.image}>
                <span><Image src={item.image} alt="" fill sizes="84px" /></span>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="spacesSection">
        <div className="container">
          <Image className="managedSpacesImage" src="/managed-spaces.jpg" alt="아파트, 학교, 음식점, 공장, 병원, 복지시설, 상가와 일반 가정 등 알파브릿지가 관리하는 공간" width={2172} height={724} sizes="(max-width: 1200px) 100vw, 1180px" />
        </div>
      </section>

      <section className="trackRecordSection" aria-labelledby="track-record-title">
        <div className="container">
          <div className="sectionHeading"><h2 id="track-record-title">주요 관리 실적</h2><span>학교, 군부대, 생산설비, 공동주택과 공공시설 등 다양한 현장에서 함께했습니다.</span></div>
          <Image className="trackRecordImage" src="/management-track-record.jpg" alt="학교, 군부대, 생산설비, 아파트 단지, 관공서, 병원, 호텔, 축산, 원예, 양식장과 사우나 분야의 주요 관리 실적" width={1512} height={1340} sizes="(max-width: 1200px) 100vw, 1060px" />
        </div>
      </section>

      <section className="partnerSection" id="partner">
        <div className="container partnerPanel">
          <div><h2>알파브릿지와 함께<br />지역의 워터 매니지먼트 시장을 만듭니다.</h2><span>지사·대리점·영업점 파트너를 모집합니다.</span></div>
          <div className="partnerActions"><a href="tel:1544-7763"><Phone />관리 상담 1544-7763</a><a href="mailto:contact@alpha-waterbridge.com"><CalendarCheck2 />파트너 문의하기</a></div>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <div className="footerBrand"><div className="footerLogo"><span><Image src="/alpha-bridge-symbol-transparent.png" alt="" fill sizes="82px" /></span><strong>ALPHA BRIDGE</strong></div><p>WATER &amp; PIPE MANAGEMENT<br />물과 배관, 그리고 관리의 새로운 기준<br /><strong>소규모기술 창업 컨설팅</strong></p></div>
          <div className="footerInfo"><p><a href="#company">회사소개</a><a href="#water-pipe">수질·배관관리</a><a href="#partner">문의하기</a></p><p>알파브릿지 주식회사　|　사업자등록번호: 389-87-03895</p><p><strong>본사</strong>　대전광역시 서구 도산로 403번길 21, 635호 (용문동, 둔산전자타운)</p><p>고객센터: 1544-7763　|　contact@alpha-waterbridge.com</p><small>© ALPHA BRIDGE. All rights reserved.</small></div>
        </div>
      </footer>

      <nav className="floatingChannels" aria-label="빠른 채널">
        <button className="floatingChannel kakaoChannel" type="button" aria-label="카카오톡 상담 준비 중" aria-disabled="true">
          <span className="floatingChannelLogo" aria-hidden="true"><Image src="/brand/kakaotalk-official-icon.png" alt="" width={46} height={46} /></span>
          <span className="floatingChannelCopy"><strong>카카오톡</strong><small>상담 준비 중</small></span>
        </button>
        <a className="floatingChannel naverChannel" href="https://m.blog.naver.com/k--prime" target="_blank" rel="noopener noreferrer" aria-label="알파브릿지 네이버 블로그 새 창에서 열기">
          <span className="floatingChannelLogo" aria-hidden="true"><Image src="/brand/naver-blog-official.png" alt="" width={192} height={192} sizes="40px" /></span>
          <span className="floatingChannelCopy"><strong>네이버 블로그</strong><small>공식 블로그</small></span>
        </a>
        <a className="floatingChannel youtubeChannel" href="https://www.youtube.com/channel/UCy2_LC3YjKd9CzyQtVhABcQ" target="_blank" rel="noopener noreferrer" aria-label="알파브릿지 유튜브 채널 새 창에서 열기">
          <span className="floatingChannelLogo" aria-hidden="true"><Play /></span>
          <span className="floatingChannelCopy"><strong>유튜브</strong><small>공식 채널</small></span>
        </a>
      </nav>

      {detail ? (
        <div className="modalBackdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDetail(null); }}>
          <section className="detailModal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
            <button className="modalClose" type="button" aria-label="팝업 닫기" onClick={() => setDetail(null)}><X /></button>
            <header><h2 id="detail-title">{detail.title}</h2></header>
            <div className={detail.id === "water-solution" ? "modalImage contain" : "modalImage"}><Image src={detail.image} alt={`${detail.title} 대표 이미지`} fill sizes="(max-width: 640px) 95vw, 760px" /></div>
            <div className="modalBody"><p>{detail.description}</p><ul>{detail.bullets.map((bullet) => <li key={bullet}><Check />{bullet}</li>)}</ul><strong>{detail.message}</strong><a href="#partner" onClick={() => setDetail(null)}>상담 문의하기<ArrowRight /></a></div>
          </section>
        </div>
      ) : null}

      {activeEvidence ? (
        <div className="modalBackdrop evidenceModalBackdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveEvidence(null); }}>
          <section className="evidenceModal" role="dialog" aria-modal="true" aria-labelledby="evidence-modal-title">
            <button className="modalClose" type="button" aria-label="검증 자료 닫기" onClick={() => setActiveEvidence(null)}><X aria-hidden="true" /></button>
            <header>
              <span>{activeEvidence.category}</span>
              <h2 id="evidence-modal-title">{activeEvidence.title}</h2>
              <small>{String(evidenceItems.indexOf(activeEvidence) + 1).padStart(2, "0")} / {String(evidenceItems.length).padStart(2, "0")}</small>
            </header>
            <div className="evidenceModalImage"><Image src={activeEvidence.image} alt={activeEvidence.alt} fill sizes="(max-width: 1080px) 100vw, 980px" priority /></div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
