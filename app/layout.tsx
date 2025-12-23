import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import 'katex/dist/katex.min.css';

export const metadata: Metadata = {
  title: 'dev.log()',
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
      <body>
        <div className="hidden sm:block fixed top-6 right-8 z-40 text-gray-200 text-lg tracking-tight hover:text-cyan-200 transition-colors font-semibold">
          <Link href="/">dev.log()</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
