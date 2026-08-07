"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  Check,
  ChevronDown,
  FileCheck2,
  FileText,
  Flag,
  GraduationCap,
  HardHat,
  Headphones,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Presentation,
  SearchCheck,
  Store,
  Target,
  Users,
  Wrench,
  X,
  Droplets,
  Megaphone,
} from "lucide-react";
import { KoreaMap } from "./korea-map";

type ContentItem = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const navLinks = [
  ["#business", "사업 소개"],
  ["#partner-model", "파트너 모델"],
  ["#support", "본사 지원"],
  ["#opening", "개설 절차"],
  ["#region", "모집 지역"],
  ["#faq", "자주 묻는 질문"],
];

const marketReasons: ContentItem[] = [
  {
    icon: Droplets,
    title: "지속되는 생활 수요",
    copy: "생활 필수 인프라로 꾸준한 관리 수요가 지속됩니다.",
  },
  {
    icon: MapPin,
    title: "지역 밀착형 서비스",
    copy: "지역 기반 네트워크로 신뢰와 고객 관계를 쌓습니다.",
  },
  {
    icon: Wrench,
    title: "현장 중심 사업",
    copy: "설치·점검 등 현장 중심의 실용적인 서비스를 제공합니다.",
  },
  {
    icon: BarChart3,
    title: "확장 가능한 시장",
    copy: "주거·상업 공간을 아우르는 지역 사업으로 성장할 수 있습니다.",
  },
];

const processSteps = [
  { icon: MessageCircle, title: "고객 상담" },
  { icon: SearchCheck, title: "현장 확인" },
  { icon: FileText, title: "맞춤 제안" },
  { icon: HardHat, title: "방문 설치" },
  { icon: CalendarCheck2, title: "정기 점검" },
];

const partnerTypes = [
  {
    icon: Building2,
    title: "지역 지사",
    subtitle: "지역 관리·인력 운영·사업 확장",
    points: ["지역 파트너 네트워크 구축", "영업점 관리 및 운영 지원", "본사와 연계한 권역 사업 운영"],
    button: "지사 모델 자세히 보기",
    tone: "dark",
  },
  {
    icon: Store,
    title: "지역 영업점",
    subtitle: "고객 확보·상담·지역 영업",
    points: ["고객 발굴 및 상담·계약", "설치·관리 서비스 일정 연결", "안정적인 지역 고객 관계 형성"],
    button: "영업점 모델 자세히 보기",
    tone: "light",
  },
];

const supportItems: ContentItem[] = [
  {
    icon: GraduationCap,
    title: "제품·기술 교육",
    copy: "제품 이해부터 설치·관리 기초까지 체계적으로 교육합니다.",
  },
  {
    icon: Presentation,
    title: "영업 자료 제공",
    copy: "제안서·상담 자료 등 영업에 필요한 자료를 제공합니다.",
  },
  {
    icon: Headphones,
    title: "상담·견적 지원",
    copy: "고객 문의와 현장 판단을 본사와 함께 검토합니다.",
  },
  {
    icon: Wrench,
    title: "설치 교육",
    copy: "현장 실습과 안전 기준으로 전문성을 강화합니다.",
  },
  {
    icon: Megaphone,
    title: "운영·마케팅 지원",
    copy: "지역 홍보와 고객 관리에 필요한 콘텐츠를 제공합니다.",
  },
];

const openingSteps: ContentItem[] = [
  { icon: MessageCircle, title: "파트너 상담", copy: "사업 방향 및 모델 안내" },
  { icon: MapPin, title: "지역·조건 검토", copy: "지역 적합성 및 조건 검토" },
  { icon: FileCheck2, title: "계약 및 교육", copy: "계약 체결 및 기본 교육" },
  { icon: BriefcaseBusiness, title: "영업 준비", copy: "자료·도구·제품 준비" },
  { icon: Flag, title: "사업 시작", copy: "영업 개시 및 운영 지원" },
];

const candidateTraits: ContentItem[] = [
  { icon: BriefcaseBusiness, title: "지역 영업 경험", copy: "지역 시장에 대한 이해와 영업 경험이 있는 분" },
  { icon: Users, title: "고객 관리 역량", copy: "고객과 신뢰를 쌓고 관계를 관리할 수 있는 분" },
  { icon: HardHat, title: "현장 실행력", copy: "현장을 중심으로 문제를 해결해 나가는 분" },
  { icon: Target, title: "장기적인 사업 의지", copy: "함께 성장할 수 있는 의지와 열정이 있는 분" },
];

const recruitmentRows = [
  { color: "navy", title: "지사 모집", region: "권역별 협의" },
  { color: "gold", title: "영업점 모집", region: "전국 주요 지역" },
  { color: "gray", title: "상담 가능 지역", region: "전국" },
];

const faqs = [
  ["지사 또는 영업점 개설 비용은 어떻게 되나요?", "파트너 유형과 운영 구성에 따라 달라지며, 상담 후 세부 항목을 안내합니다."],
  ["지역 독점권을 받을 수 있나요?", "희망 지역과 기존 운영 현황을 검토한 뒤 담당 권역을 협의합니다."],
  ["기술 경험이 없어도 사업 운영이 가능한가요?", "관련 경험은 도움이 되며, 필요한 제품·설치·운영 교육을 제공합니다."],
  ["교육은 어떤 방식으로 진행되나요?", "기초 이론과 현장 실습을 중심으로 단계별 교육을 진행합니다."],
  ["수익 구조와 정산 방식은 어떻게 되나요?", "파트너 모델과 실제 영업 활동에 따라 달라지며 상담 시 상세히 설명합니다."],
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="sectionTitle">{children}</h2>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  return (
    <main id="top">
      <header className="siteHeader">
        <div className="headerInner">
          <a className="brand" href="#top" aria-label="알파브릿지 홈">
            <span className="brandLogo" aria-hidden="true">
              <Image src="/alpha-bridge-brand.png" alt="" fill sizes="64px" priority />
            </span>
            <span className="brandName">ALPHA BRIDGE</span>
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
            className="menuButton"
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <p className="heroEyebrow">ALPHA BRIDGE BUSINESS PARTNER</p>
          <h1 id="hero-title">
            지역의 생활 배관 시장을<br />
            <strong>함께 개척할 파트너를 모집합니다</strong>
          </h1>
          <p className="heroText">
            가정용 수도계량기·이음배관 관리 서비스를 기반으로<br />
            지사와 영업점의 안정적인 지역 운영을 지원합니다.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#contact"><MessageCircle aria-hidden="true" />지사 상담</a>
            <a className="button buttonOutline" href="#contact"><Phone aria-hidden="true" />영업점 상담</a>
          </div>
        </div>

        <div className="heroVisual">
          <Image
            src="/partner-consultation-hero.png"
            alt="알파브릿지 담당자와 지역 파트너가 배관 관리 사업을 상담하는 모습"
            fill
            priority
            sizes="(max-width: 920px) 100vw, 59vw"
          />
          <span className="heroPhotoLabel">PARTNER CONSULTING</span>
        </div>
      </section>

      <section className="contentSection market" id="business">
        <div className="container">
          <SectionTitle>왜 지금 생활 배관 관리 사업인가요?</SectionTitle>
          <div className="marketGrid">
            {marketReasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="infoCard revealItem" data-reveal style={{ "--delay": `${index * 70}ms` } as React.CSSProperties} key={item.title}>
                  <span className="lineIcon"><Icon aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="processSection" aria-labelledby="process-title">
        <div className="container processPanel" data-reveal>
          <h2 id="process-title">상담에서 설치·관리까지 이어지는 사업 구조</h2>
          <div className="processGrid">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div className="processItem" key={step.title}>
                  <span><Icon aria-hidden="true" /></span>
                  <strong>{step.title}</strong>
                  {index < processSteps.length - 1 ? <ArrowRight className="processArrow" aria-hidden="true" /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contentSection partnerSection" id="partner-model">
        <div className="container">
          <SectionTitle>두 가지 방식으로 함께합니다</SectionTitle>
          <div className="partnerGrid">
            {partnerTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className={`partnerCard ${item.tone}`} data-reveal style={{ "--delay": `${index * 90}ms` } as React.CSSProperties} key={item.title}>
                  <div className="partnerIcon"><Icon aria-hidden="true" /></div>
                  <div className="partnerBody">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <ul>
                      {item.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}
                    </ul>
                    <a href="#contact">{item.button}<ArrowRight aria-hidden="true" /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contentSection supportSection" id="support">
        <div className="container">
          <SectionTitle>사업 운영에 필요한 기반을 지원합니다</SectionTitle>
          <div className="supportGrid">
            {supportItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article data-reveal style={{ "--delay": `${index * 55}ms` } as React.CSSProperties} key={item.title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contentSection openingSection" id="opening">
        <div className="container">
          <SectionTitle>상담부터 영업 시작까지</SectionTitle>
          <div className="openingGrid">
            {openingSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <article data-reveal style={{ "--delay": `${index * 65}ms` } as React.CSSProperties} key={item.title}>
                  <b>{index + 1}</b>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {index < openingSteps.length - 1 ? <ArrowRight className="openingArrow" aria-hidden="true" /> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="regionSection" id="region">
        <div className="container regionPanel" data-reveal>
          <KoreaMap />
          <div className="regionContent">
            <SectionTitle>지역별 파트너를 모집합니다</SectionTitle>
            <p>지역 생활권을 기준으로 사업 가능 여부와 운영 조건을 함께 검토합니다.</p>
            <div className="regionRows">
              {recruitmentRows.map((row) => (
                <div key={row.title}>
                  <span className={`regionDot ${row.color}`} />
                  <strong>{row.title}</strong>
                  <b>{row.region}</b>
                  <ArrowRight aria-hidden="true" />
                </div>
              ))}
            </div>
            <a className="regionButton" href="#contact">우리 지역 모집 여부 확인<ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="contentSection candidateSection">
        <div className="container">
          <SectionTitle>이런 분과 함께하고 싶습니다</SectionTitle>
          <div className="candidateGrid">
            {candidateTraits.map((item, index) => {
              const Icon = item.icon;
              return (
                <article data-reveal style={{ "--delay": `${index * 65}ms` } as React.CSSProperties} key={item.title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="faqSection" id="faq">
        <div className="container">
          <SectionTitle>자주 묻는 질문</SectionTitle>
          <div className="faqList" data-reveal>
            {faqs.map(([question, answer], index) => (
              <details key={question}>
                <summary><span>Q{index + 1}</span><strong>{question}</strong><ChevronDown aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="container contactBanner" data-reveal>
          <div className="contactImage">
            <Image
              src="/partner-field-team.png"
              alt="알파브릿지 현장 기술진이 수도계량기를 함께 점검하는 모습"
              fill
              sizes="(max-width: 700px) 100vw, 320px"
            />
          </div>
          <div className="contactCopy">
            <small>ALPHA BRIDGE BUSINESS PARTNER</small>
            <h2>알파브릿지와 함께<br />지역 사업의 기회를 시작하세요</h2>
          </div>
          <div className="contactActions">
            <a className="kakaoButton" href="#contact" data-modal-trigger="partner-consultation"><span>TALK</span>카카오톡으로 상담하기</a>
            <a className="phoneButton" href="tel:02-1234-5678"><Phone aria-hidden="true" />전화 상담하기</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerInner">
          <div className="footerBrand">
            <span className="footerLogo" aria-hidden="true">
              <Image src="/alpha-bridge-brand.png" alt="" fill sizes="72px" />
            </span>
            <div>
              <strong>ALPHA BRIDGE</strong>
              <p>생활 배관 관리 사업 파트너 모집<br />신뢰와 기술로 지역과 함께 성장합니다.</p>
            </div>
          </div>
          <div className="footerInfo">
            <p><a href="#top">개인정보처리방침</a><a href="#top">이용약관</a><a href="#top">문의하기</a></p>
            <p>알파브릿지 주식회사　|　대표: 홍길동　|　사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123　|　고객센터: 02-1234-5678</p>
            <small>© ALPHA BRIDGE. All rights reserved.</small>
          </div>
          <div className="footerSeal"><span>AB</span><p>안심 기준 준수</p></div>
        </div>
      </footer>

      <aside className="floatingActions" aria-label="빠른 상담 메뉴">
        <a className="floatKakao" href="#contact"><span>TALK</span><strong>카카오톡<br />상담</strong></a>
        <a className="floatPhone" href="tel:02-1234-5678"><Phone aria-hidden="true" /><strong>전화<br />상담</strong></a>
        <a className="floatTop" href="#top"><ArrowUp aria-hidden="true" /><strong>맨 위로</strong></a>
      </aside>
    </main>
  );
}
