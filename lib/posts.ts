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
  image: string | null;
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

// Helper function to ensure tags are in the correct format
function ensureTags(tags: unknown): string[] {
  if (!tags) return [];
  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag));
  }
  if (typeof tags === "string") {
    return tags.split(",").map((tag) => tag.trim());
  }
  return [];
}

// Helper function to ensure a value is either a string or null
function ensureStringOrNull(value: unknown): string | null {
  if (!value) return null;
  return String(value);
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
        title: String(data.title),
        date: String(data.date),
        content,
        excerpt: ensureStringOrNull(data.excerpt) || "",
        tags: ensureTags(data.tags).map(normalizeTag),
        image: ensureStringOrNull(data.image),
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
    title: String(data.title),
    date: String(data.date),
    excerpt: ensureStringOrNull(data.excerpt) || "",
    content,
    tags: ensureTags(data.tags).map(normalizeTag),
    image: ensureStringOrNull(data.image),
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
