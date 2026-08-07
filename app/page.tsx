"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Droplets,
  FileText,
  Flag,
  GraduationCap,
  Handshake,
  HardHat,
  Headphones,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Pause,
  Phone,
  Play,
  Presentation,
  Repeat2,
  ShieldCheck,
  Store,
  Target,
  Users,
  Wrench,
  X,
} from "lucide-react";

type IconItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const navLinks = [
  ["#business", "파트너 사업"],
  ["#model", "사업 모델"],
  ["#support", "본사 지원"],
  ["#opening", "개설 절차"],
  ["#region", "모집 권역"],
  ["#faq", "자주 묻는 질문"],
];

const marketReasons: IconItem[] = [
  {
    icon: Droplets,
    title: "생활과 연결된 꾸준한 수요",
    copy: "배관은 주거·상업 공간의 일상과 직접 연결됩니다. 점검과 관리가 반복적으로 필요한 생활 기반 영역입니다.",
  },
  {
    icon: MapPin,
    title: "지역 밀착형 현장 서비스",
    copy: "현장마다 다른 배관 상태에 빠르게 대응하려면 고객과 가까운 지역 파트너의 역할이 중요합니다.",
  },
  {
    icon: Repeat2,
    title: "시공 이후까지 이어지는 관계",
    copy: "한 번의 시공으로 끝내지 않고 점검 이력을 이어가며 고객과 장기적인 신뢰 관계를 만들 수 있습니다.",
  },
];

const businessSteps: Array<IconItem & { no: string; label: string }> = [
  { no: "01", label: "CONSULT", icon: MessageCircle, title: "고객 상담", copy: "불편 사항과 관리 목적을 확인합니다." },
  { no: "02", label: "INSPECT", icon: ClipboardCheck, title: "현장 진단", copy: "배관 상태와 작업 환경을 살펴봅니다." },
  { no: "03", label: "PROPOSE", icon: FileText, title: "맞춤 제안", copy: "현장에 적합한 작업 범위와 방법을 안내합니다." },
  { no: "04", label: "SERVICE", icon: HardHat, title: "전문 시공", copy: "교육된 절차와 기준에 따라 작업합니다." },
  { no: "05", label: "CARE", icon: CalendarCheck2, title: "사후 관리", copy: "점검 이력과 다음 관리 시점을 이어갑니다." },
];

const partnerNetwork = [
  {
    no: "01",
    label: "HEADQUARTERS",
    title: "본사",
    icon: ShieldCheck,
    copy: "브랜드 전략과 기술 기준을 만들고, 교육·상담 자료·운영 가이드로 지역 사업의 기반을 지원합니다.",
    tags: ["브랜드 운영", "기술 기준", "전국 지원"],
  },
  {
    no: "02",
    label: "REGIONAL BRANCH",
    title: "지역 지사",
    icon: Building2,
    copy: "담당 권역의 사업 운영과 고객 관리를 맡고, 지역 영업점과 현장 파트너의 협업을 이끄는 거점입니다.",
    tags: ["권역 운영", "파트너 협업", "품질 관리"],
  },
  {
    no: "03",
    label: "LOCAL SALES",
    title: "지역 영업점",
    icon: Store,
    copy: "고객과 가장 가까운 곳에서 상담과 영업을 담당하고, 현장 확인부터 설치 이후 관계까지 연결합니다.",
    tags: ["고객 상담", "지역 영업", "관계 관리"],
  },
  {
    no: "04",
    label: "FIELD SERVICE",
    title: "현장 서비스",
    icon: Wrench,
    copy: "표준 교육을 이수한 현장 인력이 진단·시공·점검을 책임 있게 수행해 일관된 고객 경험을 만듭니다.",
    tags: ["현장 진단", "전문 시공", "정기 점검"],
  },
];

const partnerTypes = [
  {
    icon: Building2,
    eyebrow: "REGIONAL BRANCH",
    title: "지역 지사",
    copy: "권역의 사업 운영과 파트너 네트워크를 이끄는 지역 거점",
    points: ["담당 권역의 사업 운영 및 고객 관리", "지역 영업점·현장 파트너 협업", "교육·물류·운영 업무의 지역 연결", "권역별 시장 개발과 서비스 품질 관리"],
  },
  {
    icon: Store,
    eyebrow: "LOCAL SALES PARTNER",
    title: "지역 영업점",
    copy: "고객과 가장 가까운 곳에서 상담과 영업을 담당하는 지역 접점",
    points: ["지역 고객 발굴 및 상담", "현장 확인 일정과 시공 과정 연결", "설치 이후 고객 관계 관리", "지역 기반의 홍보·영업 활동"],
  },
];

const supportItems: Array<IconItem & { no: string }> = [
  { no: "01", icon: GraduationCap, title: "제품·기술 교육", copy: "배관 기초, 제품 이해, 현장 진단과 작업 절차를 단계별로 교육합니다." },
  { no: "02", icon: Presentation, title: "영업·상담 자료", copy: "서비스를 정확히 설명할 수 있도록 상담 자료와 고객 안내 콘텐츠를 제공합니다." },
  { no: "03", icon: Headphones, title: "현장·기술 지원", copy: "기술 문의와 작업 판단이 필요한 상황에 대응할 수 있도록 지원합니다." },
  { no: "04", icon: PackageCheck, title: "운영·마케팅 지원", copy: "지역 영업과 고객 관리를 위한 운영 가이드와 홍보 자료를 제공합니다." },
];

const openingSteps: Array<IconItem & { no: string }> = [
  { no: "1", icon: MessageCircle, title: "파트너 상담", copy: "희망 지역과 사업 방향 확인" },
  { no: "2", icon: MapPin, title: "지역·조건 검토", copy: "권역 현황과 활동 범위 협의" },
  { no: "3", icon: Handshake, title: "계약 및 교육", copy: "세부 조건 확인과 필수 교육" },
  { no: "4", icon: BriefcaseBusiness, title: "영업·운영 준비", copy: "상담 자료와 운영 기준 준비" },
  { no: "5", icon: Flag, title: "사업 시작", copy: "지역 고객 상담과 운영 지원" },
];

const candidateTraits: IconItem[] = [
  { icon: MapPin, title: "지역을 잘 아는 분", copy: "지역의 고객 특성과 생활권을 이해하고 꾸준히 활동할 수 있는 분" },
  { icon: Users, title: "고객 신뢰를 중시하는 분", copy: "과장보다 정확한 안내와 책임 있는 사후 관리를 우선하는 분" },
  { icon: Wrench, title: "현장을 배우고 실행하는 분", copy: "기술과 운영 기준을 성실히 익혀 현장에 적용할 수 있는 분" },
  { icon: Target, title: "장기적인 사업 의지가 있는 분", copy: "단기 실적보다 고객 관계와 지역 기반을 차근차근 쌓아갈 분" },
];

const recruitmentRows = [
  ["권역 운영 파트너", "전국 주요 권역", "운영 역량과 지역 네트워크를 종합적으로 검토"],
  ["지역 영업 파트너", "전국 지역 생활권", "고객 접근성과 실제 활동 가능 범위를 중심으로 협의"],
  ["상담 가능 지역", "전국", "세부 모집 가능 여부는 상담 후 개별 안내"],
];

const faqs = [
  ["지사와 영업점은 어떻게 다른가요?", "지사는 담당 권역의 사업 운영과 파트너 협업을 맡는 지역 거점이며, 영업점은 지역 고객 발굴과 상담을 중심으로 활동합니다. 구체적인 역할과 범위는 상담을 통해 안내합니다."],
  ["초기 비용은 어느 정도 필요한가요?", "파트너 유형, 희망 지역, 장비와 운영 구성에 따라 달라집니다. 상담 과정에서 필요한 항목과 조건을 확인한 뒤 구체적으로 안내합니다."],
  ["배관이나 시공 경험이 꼭 필요한가요?", "관련 경험이 있으면 도움이 되지만 일률적인 필수 조건으로 판단하지는 않습니다. 지원자의 경력과 역할 적합성을 확인하고 필요한 교육 과정을 안내합니다."],
  ["담당 영업 권역은 어떻게 정해지나요?", "희망 지역, 기존 파트너 운영 현황, 고객 접근성, 실제 활동 범위를 함께 검토해 협의합니다. 특정 권역이 자동으로 보장되는 것은 아닙니다."],
  ["본사에서 고객을 제공하나요?", "지역 파트너의 주도적인 영업 활동을 기본으로 하며, 본사는 상담 자료와 활용 가능한 마케팅 콘텐츠 등 운영 기반을 지원합니다."],
  ["예상 매출이나 수익을 알 수 있나요?", "매출과 수익은 지역 수요, 활동량, 운영 비용 등에 따라 달라지므로 일률적으로 보장할 수 없습니다. 상담 시 사업 구조와 주요 비용 항목을 설명드립니다."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePartner, setActivePartner] = useState(0);
  const [partnerInteractionPaused, setPartnerInteractionPaused] = useState(false);
  const [partnerManuallyPaused, setPartnerManuallyPaused] = useState(false);
  const partnerPaused = partnerInteractionPaused || partnerManuallyPaused;

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
    if (partnerPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActivePartner((current) => (current + 1) % partnerNetwork.length),
      3200
    );
    return () => window.clearInterval(timer);
  }, [partnerPaused]);

  const activePartnerItem = partnerNetwork[activePartner];
  const ActivePartnerIcon = activePartnerItem.icon;

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="알파브릿지 파트너 페이지 홈">
          <span className="brandMark">
            <Image src="/alpha-bridge-logo.png" alt="" fill sizes="48px" priority />
          </span>
          <span className="brandType">
            <strong>ALPHA BRIDGE</strong>
            <small>알파브릿지 파트너</small>
          </span>
        </a>

        <nav id="primary-navigation" className={menuOpen ? "nav is-open" : "nav"} aria-label="주요 메뉴">
          {navLinks.map(([href, label]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <a className="headerCta" href="#contact">
          <CalendarCheck2 aria-hidden="true" />
          파트너 상담 신청
        </a>
        <button
          className={menuOpen ? "menuButton is-active" : "menuButton"}
          type="button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="kicker"><span /> ALPHA BRIDGE BUSINESS PARTNER</p>
          <h1>
            지역의 물길을 관리하고<br />
            <em>오래 함께 성장할<br />파트너를 찾습니다.</em>
          </h1>
          <p className="heroText">
            알파브릿지는 수도배관 진단·시공·정기 관리 서비스를 지역 고객과 연결합니다.<br className="desktopOnly" />
            현장을 이해하고 신뢰를 쌓아갈 파트너와 함께 생활 배관 관리의 새로운 기준을 만들어갑니다.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#contact">지사 파트너 상담 <ArrowRight aria-hidden="true" /></a>
            <a className="secondaryButton" href="#contact"><Phone aria-hidden="true" /> 영업점 파트너 상담</a>
          </div>
          <p className="heroNotice"><CheckCircle2 aria-hidden="true" /> 파트너 유형과 모집 가능 권역은 상담 후 안내해 드립니다.</p>
        </div>

        <div className="heroVisual">
          <Image
            src="/partner-consultation-hero.png"
            alt="알파브릿지 담당자와 지역 파트너가 배관 관리 사업을 상담하는 모습"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <div className="heroImageFade" />
          <div className="heroBadge">
            <span>LOCAL BUSINESS</span>
            <strong>지역은 파트너가,<br />운영 기반은 본사가 함께합니다.</strong>
          </div>
        </div>

        <div className="heroBottom">
          <span>LOCAL MARKET</span><i />
          <span>PARTNER SYSTEM</span><i />
          <span>AFTER CARE</span>
        </div>
        <a className="heroScroll" href="#business" aria-label="다음 섹션으로 이동"><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="about section" id="business">
        <div className="sectionHead" data-reveal>
          <p className="sectionNo">01</p>
          <p className="sectionEyebrow">BUSINESS OPPORTUNITY</p>
          <p className="sectionSide">LOCAL · RECURRING · TRUST</p>
        </div>
        <div className="aboutLead">
          <h2 data-reveal>
            왜 지금 생활 배관<br />
            <em>관리 사업인가요?</em>
          </h2>
          <div className="aboutCopy" data-reveal>
            <p>
              눈에 잘 보이지 않지만 모든 건물에 필요한 배관. 지역과 가까운 전문 관리 서비스의 역할은 계속됩니다.
            </p>
            <p>
              알파브릿지는 단기 판매보다 <strong>상담·진단·시공·사후 관리가 이어지는 지역 사업</strong>을 함께 만듭니다.
            </p>
          </div>
        </div>

        <div className="valueGrid">
          {marketReasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="valueCard" data-reveal key={item.title}>
                <span className="valueIndex">0{index + 1}</span>
                <span className="valueIcon"><Icon aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <div className="valueLine" />
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="solution section" id="model">
        <div className="sectionHead light" data-reveal>
          <p className="sectionNo">02</p>
          <p className="sectionEyebrow">CONNECTED OPERATING MODEL</p>
          <p className="sectionSide">CONSULT · INSTALL · CARE</p>
        </div>

        <div className="processBand" data-reveal>
          <div className="processBandTitle">
            <span>ONE CONNECTED FLOW</span>
            <strong>상담에서 시공 후 관리까지 이어지는 사업 구조</strong>
          </div>
          <div className="processSteps">
            {businessSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="processStep" key={step.no}>
                  <span><Icon aria-hidden="true" /></span>
                  <strong>{step.title}</strong>
                  <small>{step.copy}</small>
                  {index < businessSteps.length - 1 ? <ArrowRight className="processArrow" aria-hidden="true" /> : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="solutionGrid">
          <div className="solutionCopy" data-reveal>
            <p className="miniLabel">CLEAR ROLE, CONSISTENT SERVICE</p>
            <h2>
              지역의 고객 접점과<br />
              <em>본사의 운영 기반을 연결합니다.</em>
            </h2>
            <p className="solutionText">
              고객 상담과 지역 활동은 파트너가 주도하고, 본사는 기술·교육·자료·운영 기준을 지원합니다.
              각자의 역할을 명확히 나눠 어느 지역에서도 신뢰할 수 있는 고객 경험을 만들어갑니다.
            </p>
            <ul className="featureList">
              <li><b>01</b><span><strong>명확한 역할 분담</strong>지역 활동과 본사 지원의 범위를 구분해 운영합니다.</span></li>
              <li><b>02</b><span><strong>표준화된 고객 경험</strong>상담부터 사후 관리까지 같은 기준으로 연결합니다.</span></li>
              <li><b>03</b><span><strong>관계가 쌓이는 사업</strong>설치 이후의 점검과 관리로 고객 관계를 이어갑니다.</span></li>
            </ul>
          </div>

          <div className="businessOrbit" data-reveal aria-label="알파브릿지 파트너 사업 순환 구조">
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            <div className="orbitCenter">
              <span>ALPHA BRIDGE</span>
              <strong>PARTNER<br />SYSTEM</strong>
              <small>LOCAL BUSINESS</small>
            </div>
            <div className="orbitNodes">
              {businessSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className={`orbitNode orbitNode${index + 1}`} key={step.no}>
                    <span><Icon aria-hidden="true" /></span>
                    <strong>{step.title}</strong>
                    <small>{step.label}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="network section" id="partner-model">
        <div className="sectionHead" data-reveal>
          <p className="sectionNo">03</p>
          <p className="sectionEyebrow">PARTNER NETWORK</p>
          <p className="sectionSide">HEADQUARTERS · BRANCH · SALES · FIELD</p>
        </div>
        <div className="networkIntro">
          <h2 data-reveal>
            혼자가 아닌 시스템으로,<br />
            <em>지역 사업을 함께 운영합니다.</em>
          </h2>
          <p data-reveal>
            본사에서 현장 서비스까지 역할과 책임을 연결합니다. 단순 모집이 아니라 지역에서 지속되는 사업을 함께 만드는 운영 네트워크입니다.
          </p>
        </div>

        <div
          className="networkGraph"
          data-reveal
          onMouseEnter={() => setPartnerInteractionPaused(true)}
          onMouseLeave={() => setPartnerInteractionPaused(false)}
        >
          <div className="networkGraphHeader">
            <span>INTERACTIVE PARTNER SYSTEM</span>
            <div>
              <p>각 거점을 선택해 역할과 연결 구조를 확인해 보세요.</p>
              <button
                className="networkPause"
                type="button"
                aria-pressed={partnerManuallyPaused}
                onClick={() => setPartnerManuallyPaused((paused) => !paused)}
              >
                {partnerManuallyPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
                <span>{partnerManuallyPaused ? "자동 전환 재생" : "자동 전환 일시정지"}</span>
              </button>
            </div>
          </div>
          <div className="networkGraphCanvas">
            <div className="networkRail" aria-hidden="true">
              <i style={{ width: `${(activePartner / (partnerNetwork.length - 1)) * 100}%` }} />
            </div>
            <div className="networkNodes">
              {partnerNetwork.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    className={activePartner === index ? "networkNode is-active" : "networkNode"}
                    type="button"
                    key={item.no}
                    onClick={() => setActivePartner(index)}
                    onFocus={() => {
                      setActivePartner(index);
                      setPartnerInteractionPaused(true);
                    }}
                    onBlur={() => setPartnerInteractionPaused(false)}
                    onMouseEnter={() => setActivePartner(index)}
                    aria-pressed={activePartner === index}
                  >
                    <span className="nodeNumber">{item.no}</span>
                    <span className="nodePulse"><Icon aria-hidden="true" /></span>
                    <strong>{item.title}</strong>
                    <small>{item.label}</small>
                  </button>
                );
              })}
            </div>
            <aside className="networkDetail" key={activePartnerItem.no}>
              <ActivePartnerIcon aria-hidden="true" />
              <span>{activePartnerItem.no} · {activePartnerItem.label}</span>
              <h3>{activePartnerItem.title}</h3>
              <p>{activePartnerItem.copy}</p>
              <div>
                {activePartnerItem.tags.map((tag) => <b key={tag}>{tag}</b>)}
              </div>
            </aside>
          </div>
        </div>

        <div className="partnerChoice" data-reveal>
          <div className="partnerChoiceHead">
            <span>CHOOSE YOUR PARTNER TYPE</span>
            <h3>두 가지 방식으로 함께합니다.</h3>
            <p>활동 범위와 운영 역량에 따라 적합한 파트너 모델을 함께 검토합니다.</p>
          </div>
          <div className="partnerChoiceGrid">
            {partnerTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className={index === 0 ? "partnerType is-primary" : "partnerType"} key={item.title}>
                  <div className="partnerTypeTop">
                    <span><Icon aria-hidden="true" /></span>
                    <p>{item.eyebrow}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <strong>{item.copy}</strong>
                  <ul>
                    {item.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}
                  </ul>
                  <a href="#contact">{item.title} 상담하기 <ArrowRight aria-hidden="true" /></a>
                </article>
              );
            })}
          </div>
          <p className="partnerFinePrint">담당 권역, 세부 역할, 운영 조건은 지역 현황과 파트너 유형을 검토한 뒤 협의합니다.</p>
        </div>
      </section>

      <section className="care section" id="support">
        <div className="careBackdrop" aria-hidden="true">SUPPORT</div>
        <div className="sectionHead light" data-reveal>
          <p className="sectionNo">04</p>
          <p className="sectionEyebrow">HEADQUARTERS SUPPORT</p>
          <p className="sectionSide">EDUCATION · SALES · FIELD · OPERATION</p>
        </div>
        <div className="careIntro">
          <div data-reveal>
            <p className="miniLabel">BUILD THE BUSINESS FOUNDATION</p>
            <h2>
              사업의 시작과 운영에 필요한<br />
              <em>기반을 지원합니다.</em>
            </h2>
          </div>
          <p data-reveal>
            교육부터 현장 대응, 고객 안내까지 파트너가 기준을 갖고 운영할 수 있도록 단계별로 지원합니다.
          </p>
        </div>

        <div className="careContent">
          <div className="careTimeline" data-reveal>
            <div className="cycle">
              <span>ALPHA BRIDGE</span>
              <strong>365</strong>
              <b>PARTNER SUPPORT</b>
            </div>
            <div className="cycleRing ringOne" />
            <div className="cycleRing ringTwo" />
            <div className="cycleDot dotOne" />
            <div className="cycleDot dotTwo" />
            <div className="cycleDot dotThree" />
          </div>
          <div className="careList">
            {supportItems.map((item) => {
              const Icon = item.icon;
              return (
                <article data-reveal key={item.no}>
                  <span>{item.no}</span>
                  <i><Icon aria-hidden="true" /></i>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="vision section" id="opening">
        <div className="sectionHead" data-reveal>
          <p className="sectionNo">05</p>
          <p className="sectionEyebrow">OPENING JOURNEY</p>
          <p className="sectionSide">CONSULTATION TO LAUNCH</p>
        </div>
        <p className="visionEyebrow" data-reveal>START YOUR LOCAL BUSINESS</p>
        <h2 data-reveal>
          상담부터 사업 시작까지,<br />
          <em>한 단계씩 함께 준비합니다.</em>
        </h2>
        <p className="visionCopy" data-reveal>지원자의 경험과 희망 지역을 확인한 뒤, 적합한 방식으로 개설 과정을 진행합니다.</p>

        <div className="openingGrid">
          {openingSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <article data-reveal key={item.no}>
                <b>{item.no}</b>
                <span><Icon aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                {index < openingSteps.length - 1 ? <ArrowRight aria-hidden="true" className="openingArrow" /> : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="region section" id="region">
        <div className="sectionHead" data-reveal>
          <p className="sectionNo">06</p>
          <p className="sectionEyebrow">RECRUITING AREA</p>
          <p className="sectionSide">NATIONWIDE CONSULTATION</p>
        </div>
        <div className="regionGrid">
          <div className="regionVisual" data-reveal>
            <div className="regionWord" aria-hidden="true">KOREA</div>
            <span className="regionPin pinCapital"><MapPin aria-hidden="true" /> 수도권</span>
            <span className="regionPin pinCentral"><MapPin aria-hidden="true" /> 충청권</span>
            <span className="regionPin pinEast"><MapPin aria-hidden="true" /> 강원권</span>
            <span className="regionPin pinSouth"><MapPin aria-hidden="true" /> 영남권</span>
            <span className="regionPin pinWest"><MapPin aria-hidden="true" /> 호남·제주권</span>
            <div className="regionPulse" />
          </div>
          <div className="regionCopy" data-reveal>
            <p className="miniLabel">FIND YOUR REGION</p>
            <h2>지역별 파트너를 찾습니다.</h2>
            <p>전국의 지역 생활권을 기준으로 사업 가능 지역과 운영 조건을 함께 검토합니다. 권역별 세부 모집 여부는 기존 운영 현황과 사업 계획을 확인한 뒤 개별 안내합니다.</p>
            <div className="regionRows">
              {recruitmentRows.map(([title, area, note]) => (
                <div key={title}>
                  <span />
                  <strong>{title}</strong>
                  <b>{area}</b>
                  <small>{note}</small>
                </div>
              ))}
            </div>
            <a className="yellowButton" href="#contact">우리 지역 모집 여부 확인 <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>

        <div className="candidateBlock">
          <div className="candidateHead" data-reveal>
            <p className="miniLabel">OUR PARTNER PRINCIPLE</p>
            <h2>이런 분과 오래 함께하고 싶습니다.</h2>
          </div>
          <div className="candidateGrid">
            {candidateTraits.map((item) => {
              const Icon = item.icon;
              return (
                <article data-reveal key={item.title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
          <p className="candidateNote" data-reveal>관련 경험도 중요하지만, 알파브릿지의 서비스 기준을 이해하고 꾸준히 실천하려는 태도를 더 중요하게 봅니다.</p>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="sectionHead" data-reveal>
          <p className="sectionNo">07</p>
          <p className="sectionEyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <p className="sectionSide">PARTNER FAQ</p>
        </div>
        <div className="faqIntro" data-reveal>
          <p className="miniLabel">BEFORE YOU APPLY</p>
          <h2>자주 묻는 질문</h2>
          <p>파트너 상담 전 가장 많이 궁금해하시는 내용을 정리했습니다.</p>
        </div>
        <div className="faqList">
          {faqs.map(([question, answer], index) => (
            <details data-reveal key={question} open={index === 0}>
              <summary>
                <span>Q</span>
                <strong>{question}</strong>
                <ChevronDown aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contactCard" data-reveal>
          <div className="contactImage">
            <Image
              src="/eco-technician.png"
              alt="배관 상태를 점검하는 알파브릿지 현장 전문가"
              fill
              sizes="(max-width: 720px) 100vw, 34vw"
            />
          </div>
          <div className="contactMain">
            <p className="miniLabel">BUILD YOUR LOCAL BUSINESS WITH ALPHA BRIDGE</p>
            <h2>지역의 물길을 관리하는 사업,<br /><em>알파브릿지와 함께 시작해 보세요.</em></h2>
            <p>희망 지역과 경험, 운영 계획을 알려주시면 적합한 파트너 유형과 진행 절차를 안내해 드립니다.</p>
            <div className="contactActions">
              <a className="yellowButton" href="tel:16447231"><Phone aria-hidden="true" /> 1644-7231 전화 상담</a>
              <a className="contactSecondary" href="#faq">FAQ 먼저 보기 <ArrowRight aria-hidden="true" /></a>
            </div>
            <small>상담 신청은 계약을 의미하지 않으며, 모집 가능 여부와 세부 조건은 검토 후 개별 안내합니다.</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <span className="footerMark"><Image src="/alpha-bridge-logo.png" alt="" fill sizes="56px" /></span>
          <span><strong>ALPHA BRIDGE</strong><small>알파브릿지 파트너</small></span>
        </div>
        <div className="footerMeta">
          <p>생활 배관 관리 사업 파트너 모집</p>
          <p>© 2026 ALPHA BRIDGE. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="footerLinks">
          <a href="#business">파트너 사업</a>
          <a href="#support">본사 지원</a>
          <a href="#faq">FAQ</a>
        </div>
      </footer>

      <aside className="floatingActions" aria-label="빠른 상담 메뉴">
        <a href="#contact"><MessageCircle aria-hidden="true" /><span>상담</span></a>
        <a href="tel:16447231"><Phone aria-hidden="true" /><span>전화</span></a>
        <a href="#top" aria-label="페이지 맨 위로"><ArrowUp aria-hidden="true" /></a>
      </aside>
    </main>
  );
}
