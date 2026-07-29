import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "알파브릿지 | 대한민국 수도배관 관리의 새로운 표준";
  const description =
    "배관 기술과 전국 파트너 네트워크, 정기 케어 서비스를 연결하는 수도배관 관리 전문 기업 알파브릿지입니다.";

  return {
    title,
    description,
    icons: { icon: "/alpha-bridge-logo.png" },
    openGraph: {
      title: "알파브릿지 | 깨끗한 물이 흐르는 길",
      description: "기술과 사람, 지역을 연결해 대한민국의 수도배관을 평생 관리합니다.",
      type: "website",
      locale: "ko_KR",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1731, height: 909, alt: "알파브릿지 — 깨끗한 물이 흐르는 길" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
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
