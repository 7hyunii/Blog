import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'contents', 'posts');

export interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  content: string;
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title || 'Untitled',
        category: data.category || 'Uncategorized',
        date: data.date || new Date().toISOString().split('T')[0],
        content,
      };
    });

  // 날짜순 정렬 (최신순)
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostById(id: string): Post | null {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.id === id) || null;
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category));
  return ['All', ...Array.from(categories).sort()];
}
