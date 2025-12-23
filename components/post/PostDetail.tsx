import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { MarkdownRenderer } from '../common/MarkdownRenderer';
import { Comments } from '../common/Comments';

interface PostDetailProps {
  post: Post;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="max-w-full overflow-hidden">
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-500 hover:text-white mb-6 sm:mb-8 lg:mb-12 transition-all group px-3 py-1.5 sm:-ml-3 rounded-lg hover:bg-gray-900/50 text-sm"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" strokeWidth={2} />
        <span className="tracking-tight">목록으로</span>
      </Link>

      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5 lg:gap-3 mb-4 sm:mb-5 lg:mb-6">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="px-2.5 sm:px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg tracking-tight text-xs">
              {post.category}
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs">
              <Calendar className="w-3 sm:w-3.5 h-3 sm:h-3.5" strokeWidth={2} />
              <span className="hidden sm:inline">{post.date}</span>
              <span className="sm:hidden">{post.date.slice(5)}</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {post.title}
        </h1>
      </div>

      <div className="prose prose-lg max-w-none">
        <MarkdownRenderer content={post.content} />
      </div>

      <Comments />

      <div className="mt-8 sm:mt-10 lg:mt-12 pt-8 sm:pt-10 lg:pt-12 border-t border-gray-800">
        <Link href="/" className="w-full inline-block">
          <span className="block w-full py-2.5 sm:py-3 px-5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all shadow-md shadow-gray-900/40 hover:shadow-lg hover:shadow-gray-900/50 tracking-tight text-xs sm:text-sm text-center">
            목록으로 돌아가기
          </span>
        </Link>
      </div>
    </article>
  );
}
