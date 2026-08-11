"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  Check,
  ClipboardCheck,
  Droplet,
  Factory,
  Gauge,
  Home as House,
  Hotel,
  Menu,
  Microscope,
  Phone,
  Pipette,
  School,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Stethoscope,
  Store,
  Waves,
  Wrench,
  X,
} from "lucide-react";

type IconItem = { icon: LucideIcon; title: string; copy?: string };

const concerns: IconItem[] = [
  { icon: Droplet, title: "녹물·이물질" },
  { icon: Waves, title: "냄새·탁도" },
  { icon: Wrench, title: "노후 배관" },
  { icon: Sparkles, title: "스케일·부식" },
  { icon: CalendarCheck2, title: "관리 주기 미확인" },
  { icon: ShieldCheck, title: "위생·안전 우려" },
];

const process: IconItem[] = [
  { icon: Droplet, title: "수질관리" },
  { icon: Wrench, title: "배관관리" },
  { icon: Microscope, title: "배관세척" },
  { icon: Pipette, title: "수질 솔루션" },
  { icon: CalendarCheck2, title: "정기관리" },
  { icon: ClipboardCheck, title: "관리기록" },
];

const services = [
  { image: "/alpha-hero-pipeline.png", title: "수질관리", copy: "사용 환경에 맞춘 수질 진단과 관리 계획을 제공합니다." },
  { image: "/hero-pipe.png", title: "배관관리", copy: "노후 배관과 급수 설비의 상태를 정밀하게 점검합니다." },
  { image: "/pipe-cleaning-illustration.png", title: "배관세척", copy: "전문 세척으로 배관 내부의 이물질과 스케일을 관리합니다." },
  { image: "/microbubble-process.png", title: "수질 솔루션", copy: "현장 목적에 맞는 수질관리 장비와 제품을 제안합니다." },
  { image: "/eco-technician.png", title: "정기관리", copy: "점검 이력과 관리 주기를 기록해 안심을 이어갑니다." },
];

const managementSteps = ["현장 상담", "수질·배관 확인", "상태 분석", "맞춤 솔루션", "세척·관리", "관리 이력 제공"];

const spaces: IconItem[] = [
  { icon: Building2, title: "아파트·공동주택" },
  { icon: School, title: "학교·교육시설" },
  { icon: Store, title: "음식점·카페" },
  { icon: Factory, title: "공장·산업시설" },
  { icon: Stethoscope, title: "병원·요양시설" },
  { icon: Hotel, title: "호텔·복지시설" },
  { icon: ShowerHead, title: "상가·업무시설" },
  { icon: House, title: "일반 가정" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <header className="siteHeader">
        <div className="navInner">
          <a className="brand" href="#top" aria-label="알파브릿지 홈">
            <Image src="/alpha-bridge-symbol-transparent.png" alt="" width={64} height={41} priority />
            <span><strong>ALPHA BRIDGE</strong><small>WATER &amp; PIPE MANAGEMENT</small></span>
          </a>
          <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="주요 메뉴">
            <a href="#about" onClick={() => setMenuOpen(false)}>회사소개</a><a href="#process" onClick={() => setMenuOpen(false)}>수질·배관관리</a><a href="#services" onClick={() => setMenuOpen(false)}>워터솔루션</a><a href="#certification" onClick={() => setMenuOpen(false)}>관리·인증</a><a href="#contact" onClick={() => setMenuOpen(false)}>파트너·상담</a>
          </nav>
          <a className="phoneCta" href="tel:15330000"><Phone aria-hidden="true" /><span><small>관리상담</small>1533-0000</span></a>
          <button className="menuButton" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <Image className="heroImage" src="/water-city-hero.png" alt="맑은 물과 도시를 연결하는 알파브릿지 수질 배관 관리 시스템" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="container heroContent">
          <p className="eyebrow">더 나은 물, 더 나은 삶</p>
          <h1 id="hero-title">프리미엄<br /><strong>워터 솔루션</strong></h1>
          <p className="heroEnglish">WATER &amp; PIPE MANAGEMENT</p>
          <p className="heroCopy">물의 품질을 넘어, 물이 지나오는 환경까지 관리합니다.<br /> 수질과 배관을 함께 진단하는 알파브릿지의 통합 관리 서비스.</p>
          <div className="heroActions"><a className="primaryButton" href="#contact">수질·배관 관리 상담</a><a className="secondaryButton" href="#contact">사업 파트너 문의</a></div>
        </div>
      </section>

      <section className="concernSection" id="about">
        <div className="container">
          <div className="sectionHeading"><p>WATER CHECK</p><h2>우리가 매일 사용하는 물,<br />그 물이 지나오는 배관은 잘 관리되고 있을까요?</h2></div>
          <div className="concernGrid">
            {concerns.map(({ icon: Icon, title }, index) => <article key={title} data-reveal style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}><span><Icon /></span><h3>{title}</h3></article>)}
          </div>
          <p className="concernCopy">눈에 보이는 물은 깨끗해 보여도, 배관 내부는 다양한 문제에 노출되어 있습니다.<br /><strong>그래서 알파브릿지는 물만 보는 것이 아니라, 물이 지나오는 환경까지 관리합니다.</strong></p>
        </div>
      </section>

      <section className="processSection" id="process">
        <div className="container">
          <div className="processTitle"><small>ALPHA BRIDGE</small><h2><span>WATER &amp; PIPE</span> MANAGEMENT</h2><p>수질 + 배관 + 지속관리를 하나의 시스템으로 연결합니다.</p></div>
          <div className="processGrid">
            {process.map(({ icon: Icon, title }, index) => <div className="processItem" key={title}><span><Icon /></span><strong>{title}</strong>{index < process.length - 1 && <ArrowRight className="processArrow" />}</div>)}
          </div>
        </div>
      </section>

      <section className="servicesSection" id="services">
        <div className="container">
          <div className="sectionHeading"><p>OUR SERVICES</p><h2>알파브릿지의 전문 서비스</h2></div>
          <div className="serviceGrid">
            {services.map((service, index) => <article key={service.title} data-reveal style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}><div className="serviceImage"><Image src={service.image} alt="" fill sizes="(max-width: 700px) 85vw, 220px" /></div><div className="serviceBody"><b>{String(index + 1).padStart(2, "0")}</b><h3>{service.title}</h3><p>{service.copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="managementSection" id="certification">
        <div className="container managementGrid">
          <div className="managementFlow" data-reveal>
            <div className="sectionHeading alignLeft"><p>MANAGEMENT PROCESS</p><h2>알파브릿지의 관리 프로세스</h2></div>
            <div className="flowGrid">{managementSteps.map((step, index) => <div key={step}><span>{index + 1}</span><strong>{step}</strong>{index < managementSteps.length - 1 && <ArrowRight />}</div>)}</div>
          </div>
          <div className="certCard" data-reveal>
            <div className="certCopy"><small>ALPHA BRIDGE STANDARD</small><h2>수질관리 인증</h2><p>관리되고 있다는 것을<br />보여주는 새로운 기준</p><ul><li><Check />정기적인 수질·배관 관리</li><li><Check />관리기록 및 점검 보유</li><li><Check />필요 시 개선 솔루션 적용</li></ul></div>
            <div className="seal"><ShieldCheck /><small>WATER &amp; PIPE</small><strong>수질관리<br />인증사업장</strong><span>ALPHA BRIDGE</span></div>
          </div>
        </div>
      </section>

      <section className="spacesSection">
        <div className="container">
          <div className="sectionHeading"><p>WHO WE MANAGE</p><h2>알파브릿지가 관리하는 공간</h2></div>
          <div className="spacesGrid">{spaces.map(({ icon: Icon, title }) => <article key={title}><Icon /><span>{title}</span></article>)}</div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="container contactPanel">
          <div><small>MY WATER MANAGEMENT</small><h2>내 시설의 수질과 배관을<br />한눈에 관리하세요.</h2></div>
          <ul><li><Gauge />시설 정보·배관 관리 이력</li><li><CalendarCheck2 />정기 관리 일정과 알림</li><li><ClipboardCheck />점검 결과 및 인증 확인</li></ul>
          <div className="contactCall"><span>상담 및 문의</span><a href="tel:15330000">1533-0000</a><small>평일 09:00 - 18:00</small></div>
        </div>
      </section>

      <footer><div className="container footerInner"><div className="footerBrand"><Image src="/alpha-bridge-symbol-transparent.png" alt="" width={54} height={35} /><strong>ALPHA BRIDGE</strong></div><p>알파브릿지 주식회사 · 수질 및 배관 통합관리 전문기업</p><small>© ALPHA BRIDGE. All rights reserved.</small></div></footer>
    </main>
  );
}
