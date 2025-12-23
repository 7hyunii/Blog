import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Post } from '@/lib/posts';

interface PostListProps {
  posts: Post[];
  pageSize?: number;
}

export function PostList({ posts, pageSize = 6 }: PostListProps) {
  const [page, setPage] = useState<number>(1);

  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const visible = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return posts.slice(start, start + pageSize);
  }, [posts, currentPage, pageSize]);

  const goToPage = (nextPage: number) => {
    const clamped = Math.max(1, Math.min(totalPages, nextPage));
    setPage(clamped);
  };

  const renderPagination = () => {
    const DOTS = 'DOTS';
    const range: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i += 1) range.push(i);
    } else {
      const left = Math.max(2, currentPage - 1);
      const right = Math.min(totalPages - 1, currentPage + 1);

      range.push(1);

      if (left > 2) {
        range.push(DOTS);
      }

      for (let i = left; i <= right; i += 1) range.push(i);

      if (right < totalPages - 1) {
        range.push(DOTS);
      }

      range.push(totalPages);
    }

    return range.map((item, idx) => {
      if (item === DOTS) {
        return (
          <span key={`dots-${idx}`} className="px-2 text-gray-500">
            ...
          </span>
        );
      }
      const pageNum = Number(item);
      return (
        <button
          key={pageNum}
          onClick={() => goToPage(pageNum)}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === pageNum ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-800'
          }`}
        >
          {pageNum}
        </button>
      );
    });
  };

  return (
    <div>
      <div className="mb-10 sm:mb-12 lg:mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Posts
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          개발하며 배운 것들을 기록합니다
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4 lg:space-y-6">
        {visible.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="block">
            <article className="cursor-pointer group py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-6 -mx-4 sm:-mx-5 lg:-mx-6 rounded-xl hover:bg-gray-900/50 transition-all border border-transparent hover:border-gray-800">
              <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 mb-3">
                <span className="px-2.5 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs tracking-tight">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-600">
                  <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5" strokeWidth={2} />
                  <span className="hidden sm:inline">{post.date}</span>
                  <span className="sm:hidden">{post.date.slice(5)}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg sm:text-xl lg:text-2xl tracking-tight mb-2 text-gray-100 group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-gray-500 leading-relaxed line-clamp-2 text-sm sm:text-base">
                    {post.content.split('\n\n')[0]}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === 1 ? 'text-gray-600' : 'text-white hover:bg-gray-800'
          }`}
        >
          Prev
        </button>

        {renderPagination()}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-md text-sm ${
            currentPage === totalPages ? 'text-gray-600' : 'text-white hover:bg-gray-800'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
