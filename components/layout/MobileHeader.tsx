import { Menu } from 'lucide-react';
import Link from 'next/link';

interface MobileHeaderProps {
  onMenuClick: () => void;
  onHomeClick: () => void;
}

export function MobileHeader({ onMenuClick, onHomeClick }: MobileHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 z-30 lg:hidden">
      <div className="flex items-center justify-between h-full px-4">
        <button
          onClick={onMenuClick}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="메뉴 열기"
        >
          <Menu className="w-6 h-6" strokeWidth={2} />
        </button>

        <Link href="/" className="flex items-center gap-2" onClick={onHomeClick}>
          <span className="text-white tracking-tight text-base font-semibold">dev.log()</span>
        </Link>

        <div className="w-10" /> {/* Spacer for centering */}
      </div>
    </header>
  );
}
