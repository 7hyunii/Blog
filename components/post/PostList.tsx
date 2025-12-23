import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Post } from '@/lib/posts';

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
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
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="block">
            <article
              className="cursor-pointer group py-4 sm:py-5 lg:py-6 px-4 sm:px-5 lg:px-6 -mx-4 sm:-mx-5 lg:-mx-6 rounded-xl hover:bg-gray-900/50 transition-all border border-transparent hover:border-gray-800"
            >
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

            <div className="flex items-start justify-between gap-4 sm:gap-5 lg:gap-6">
              <div className="flex-1 min-w-0">
                <h2 className="text-lg sm:text-xl lg:text-2xl tracking-tight mb-2 text-gray-100 group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-gray-500 leading-relaxed line-clamp-2 text-sm sm:text-base">
                  {post.content.split('\n\n')[0]}
                </p>
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 hidden sm:block">
                <div className="w-9 sm:w-10 lg:w-11 h-9 sm:h-10 lg:h-11 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}