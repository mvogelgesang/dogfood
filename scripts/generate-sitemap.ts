import fs from "fs";
import path from "path";
import { getAllPosts, getAllTags, Post, TagCount } from "../lib/posts.js";

const DOMAIN = "https://dogfood.ing";

function generateSitemap() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${posts
    .map(
      (post: Post) => `
  <url>
    <loc>${DOMAIN}/posts/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
  ${tags
    .map(
      (tagCount: TagCount) => `
  <url>
    <loc>${DOMAIN}/tags/${tagCount.tag}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  const outPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outPath, sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap();
