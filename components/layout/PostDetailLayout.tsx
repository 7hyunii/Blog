"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileHeader } from '@/components/layout/MobileHeader';
import React from 'react';

interface PostDetailLayoutProps {
  categories: string[];
  children: React.ReactNode;
}

export function PostDetailLayout({ categories, children }: PostDetailLayoutProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategorySelect = (category: string) => {
    const categoryQuery = category === 'All' ? '' : `?category=${encodeURIComponent(category)}`;
    router.push(`/${categoryQuery}`);
    setIsMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-950 overflow-x-hidden w-full">
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

      {/* Main Content area will be provided as children */}
      <div className="flex-1 lg:ml-72 pt-16 lg:pt-0 w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
