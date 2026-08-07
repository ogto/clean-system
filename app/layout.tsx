import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "알파브릿지 파트너 | 생활 배관 관리 사업 파트너 모집";
  const description =
    "지역 고객과 수도배관 진단·시공·정기 관리 서비스를 연결할 알파브릿지 지사 및 영업점 파트너를 모집합니다.";

  return {
    title,
    description,
    icons: { icon: "/alpha-bridge-brand.png" },
    openGraph: {
      title: "알파브릿지 비즈니스 파트너 모집",
      description: "지역의 물길을 관리하고 오래 함께 성장할 파트너를 찾습니다.",
      type: "website",
      locale: "ko_KR",
      url: origin,
      images: [
        {
          url: `${origin}/og-partner.png`,
          width: 1731,
          height: 909,
          alt: "지역의 물길을 관리하고 오래 함께 성장할 알파브릿지 파트너를 찾습니다.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og-partner.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
