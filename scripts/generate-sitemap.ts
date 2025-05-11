import fs from "fs";
import path from "path";
import { getAllPosts, getAllTags } from "../lib/posts";

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
      (post) => `
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
      (tag) => `
  <url>
    <loc>${DOMAIN}/tags/${tag}</loc>
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
