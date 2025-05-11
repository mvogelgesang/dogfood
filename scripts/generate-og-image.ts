import fs from "fs";
import path from "path";
import { createCanvas } from "canvas";
import { getAllPosts } from "../lib/posts.js";

const WIDTH = 1200;
const HEIGHT = 630;

async function generateOGImage(post: { title: string; slug: string }) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Title
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 60px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const words = post.title.split(" ");
  let line = "";
  let y = HEIGHT / 2;
  const lineHeight = 70;
  const maxWidth = WIDTH - 100;

  for (const word of words) {
    const testLine = line + word + " ";
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth) {
      ctx.fillText(line, WIDTH / 2, y);
      line = word + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, WIDTH / 2, y);

  // Save image
  const buffer = canvas.toBuffer("image/png");
  const outPath = path.join(process.cwd(), "public", "og", `${post.slug}.png`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buffer);
}

async function generateAllOGImages() {
  const posts = getAllPosts();
  for (const post of posts) {
    await generateOGImage(post);
  }
  console.log("OG images generated successfully!");
}

generateAllOGImages();
