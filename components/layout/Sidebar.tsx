import { Mail, X, Folder } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  onClose?: () => void;
}

export function Sidebar({ 
  categories, 
  selectedCategory, 
  onCategorySelect,
  onClose
}: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 lg:w-96 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800 px-8 lg:px-12 py-16 overflow-y-auto flex flex-col text-gray-200">
      {/* Mobile Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors lg:hidden"
          aria-label="메뉴 닫기"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>
      )}

      {/* 프로필 */}
      <div className="mb-8 flex-shrink-0 text-center">
        <Link href="/" className="group mb-6 hover:opacity-80 transition-all inline-block">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all mx-auto">
            <Image
              src="https://avatars.githubusercontent.com/u/123531315?v=4"
              alt="7hyunii GitHub avatar"
              width={80}
              height={80}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h2 className="text-2xl tracking-tight text-white font-semibold">Hyunii</h2>
        </Link>
        <p className="text-gray-300 leading-relaxed text-sm">
          다양하게 접하며 배우고 성장하자
        </p>
      </div>

      {/* Contact */}
      <div className="mb-8 pb-8 border-b border-gray-800 flex-shrink-0">
        <a 
          href="mailto:7sonicx@gmail.com"
          className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group"
        >
          <div className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow transition-all">
            <Mail className="w-4 h-4" strokeWidth={2} />
          </div>
          <span className="text-xs tracking-tight text-gray-300 group-hover:text-white transition-colors">Contact</span>
        </a>
      </div>

      <nav className="space-y-10 flex-1 overflow-y-auto">
        <div className="flex-shrink-0">
          <h3 className="text-xs text-gray-300 uppercase tracking-widest mb-4 px-1 flex items-center gap-2">
            <Folder className="w-3.5 h-3.5 text-gray-300" strokeWidth={2} />
            <span>Categories</span>
          </h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <div key={category}>
                <button
                  onClick={() => onCategorySelect(category)}
                  className={`block w-full text-left py-2.5 px-4 rounded-lg transition-all text-sm ${
                    selectedCategory === category
                      ? 'bg-gray-800 text-white shadow-sm'
                      : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                  }`}
                >
                  <span className="tracking-tight">{category}</span>
                </button>

                {category === 'All' && (
                  <div className="mx-2 my-1 mb-2">
                    <div className="h-px bg-gray-800" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
