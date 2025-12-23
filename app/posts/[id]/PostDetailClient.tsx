'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileHeader } from '@/components/layout/MobileHeader';
import { PostDetail } from '@/components/post/PostDetail';
import type { Post } from '@/lib/posts';

interface PostDetailClientProps {
  post: Post;
  categories: string[];
}

export function PostDetailClient({ post, categories }: PostDetailClientProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategorySelect = (category: string) => {
    router.push('/');
    setIsMobileMenuOpen(false);
  };
  const handleHomeClick = () => {
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar 
          categories={categories}
          selectedCategory="All"
          onCategorySelect={handleCategorySelect}
        />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <MobileHeader 
          onMenuClick={() => setIsMobileMenuOpen(true)}
          onHomeClick={handleHomeClick}
        />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 z-50 lg:hidden">
            <Sidebar 
              categories={categories}
              selectedCategory="All"
              onCategorySelect={handleCategorySelect}
              onClose={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </>
      )}
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-72 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
          <PostDetail 
            post={post} 
            onBack={handleBack}
          />
        </div>
      </main>
    </div>
  );
}