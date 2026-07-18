import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "크린워터시스템 | 친환경 배관세척",
  description: "자화활성수와 미세버블 특허 공법으로 배관 속 녹과 스케일을 친환경적으로 제거합니다.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
