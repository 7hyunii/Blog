import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: 'Dev Blog - 개발 공부 노트',
  description: '배우고 성장하는 개발자의 기록',
  keywords: ['개발', '블로그', '프로그래밍', '스터디'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head></head>
      <body>{children}</body>
    </html>
  );
}