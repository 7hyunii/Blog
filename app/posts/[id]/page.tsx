import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostById, getAllCategories } from '@/lib/posts';
import { PostDetailClient } from './PostDetailClient';

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

// 정적 경로 생성 (Static Site Generation)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

// 동적 메타데이터
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Dev Blog`,
    description: post.content.split('\n\n')[0].slice(0, 160),
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  const categories = getAllCategories();
  return <PostDetailClient post={post} categories={categories} />;
}