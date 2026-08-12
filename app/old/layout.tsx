import type { Metadata } from "next";
import "./old.css";

export const metadata: Metadata = {
  title: "알파브릿지 회사소개 | 이전 디자인",
  description: "알파브릿지 회사소개형 홈페이지 이전 디자인 비교본입니다.",
  robots: { index: false, follow: false },
};

export default function OldLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
