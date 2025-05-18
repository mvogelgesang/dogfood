import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface TagCount {
  tag: string;
  count: number;
}

// Helper function to normalize tags
function normalizeTag(tag: string): string {
  return (
    tag
      .toLowerCase()
      .trim()
      // Replace multiple spaces with a single space
      .replace(/\s+/g, " ")
      // Replace special characters with spaces
      .replace(/[^a-z0-9\s-]/g, " ")
      // Replace multiple spaces with a single space again
      .replace(/\s+/g, " ")
      .trim()
  );
}

// Helper function to format tag for display
function formatTag(tag: string): string {
  return tag
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        content,
        excerpt: data.excerpt || "",
        tags: (data.tags || []).map(normalizeTag),
      };
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || "",
    content,
    tags: (data.tags || []).map(normalizeTag),
  };
}

export function getAllTags(): TagCount[] {
  const posts = getAllPosts();
  const tagCounts: { [key: string]: number } = {};

  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      const normalizedTag = normalizeTag(tag);
      tagCounts[normalizedTag] = (tagCounts[normalizedTag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([tag, count]) => ({
      tag: formatTag(tag),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts();
  const normalizedTag = normalizeTag(tag);
  return posts.filter((post) =>
    post.tags?.some((postTag) => normalizeTag(postTag) === normalizedTag)
  );
}
