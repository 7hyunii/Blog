import { PostDetail } from '@/components/post/PostDetail';
import { PostDetailLayout } from '@/components/layout/PostDetailLayout';
import type { Post } from '@/lib/posts';

interface PostDetailWrapperProps {
  post: Post;
  categories: string[];
}

// Server component wrapper: render server-side and use a small client layout for interactivity
export function PostDetailWrapper({ post, categories }: PostDetailWrapperProps) {
  return (
    <PostDetailLayout categories={categories}>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <PostDetail post={post} />
      </main>
    </PostDetailLayout>
  );
}
