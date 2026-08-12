import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "알파브릿지 | 수질·배관관리 전문 워터솔루션";
  const description =
    "수질 진단부터 배관관리, 전문 세척, 정기관리와 인증까지 연결하는 알파브릿지 워터솔루션입니다.";

  return {
    title,
    description,
    icons: { icon: "/alpha-bridge-brand.png" },
    openGraph: {
      title: "알파브릿지 워터 & 파이프 매니지먼트",
      description: "물의 품질을 넘어, 물이 지나오는 환경까지 관리합니다.",
      type: "website",
      locale: "ko_KR",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1731,
          height: 909,
          alt: "수질과 배관을 함께 관리하는 알파브릿지 워터솔루션",
        },
      ],
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
