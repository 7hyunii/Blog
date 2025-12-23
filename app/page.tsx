import { getAllPosts, getAllCategories } from '@/lib/posts';
import { HomeClient } from '@/components/HomeClient';

export default function HomePage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  return <HomeClient allPosts={allPosts} categories={categories} />;
}
