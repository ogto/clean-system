import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "알파브릿지 | 프리미엄 수질·배관 관리";
  const description = "물의 품질부터 물이 지나오는 배관까지 진단하고 관리하는 알파브릿지 통합 워터 솔루션입니다.";

  return {
    title,
    description,
    icons: { icon: "/alpha-bridge-brand.png" },
    openGraph: {
      title: "알파브릿지 프리미엄 워터 솔루션",
      description: "수질, 배관, 세척, 정기관리를 하나의 시스템으로 연결합니다.",
      type: "website",
      locale: "ko_KR",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
          width: 1731,
          height: 909,
          alt: "알파브릿지 프리미엄 수질 및 배관 관리",
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
