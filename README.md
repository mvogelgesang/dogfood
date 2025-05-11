# Dogfooding Blog

A modern blog built with Next.js, TypeScript, and Tailwind CSS.

## Content Management

### Writing Posts

1. Create new posts in `content/posts/` directory
2. Use Markdown format with frontmatter:

```markdown
---
title: "Your Post Title"
date: "YYYY-MM-DD"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
---

Your post content in Markdown...
```

### Post Structure

- **Title**: The main title of your post
- **Date**: Publication date in YYYY-MM-DD format
- **Excerpt**: A brief summary of your post
- **Tags**: Array of relevant tags
- **Content**: Main content in Markdown format

### Adding Images

1. Place images in `public/images/`
2. Reference them in your posts:
```markdown
![Alt text](/images/your-image.jpg)
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Deployment

### Firebase Setup

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase (first time only):
```bash
firebase init
```
- Select "Hosting"
- Choose your project
- Set `out` as your public directory
- Configure as a single-page app: Yes
- Set up automatic builds and deploys: Yes

### Deployment Commands

```bash
# Deploy to production
npm run deploy

# Deploy to preview channel
npm run deploy:preview
```

### Automated SEO

The build process automatically:
1. Generates Open Graph images for posts
2. Creates/updates sitemap.xml
3. Builds the Next.js application
4. Deploys to Firebase

## Project Structure

```
├── content/
│   └── posts/          # Blog posts in Markdown
├── lib/
│   └── posts.ts        # Post processing utilities
├── pages/              # Next.js pages
├── public/             # Static assets
│   ├── images/        # Post images
│   └── og/            # Generated OG images
├── scripts/           # Build and generation scripts
└── styles/            # Global styles
```

## Features

- 🎨 Dark/Light mode
- 📱 Responsive design
- 🔍 SEO optimized
- 🏷️ Tag-based navigation
- 📊 Open Graph images
- 🗺️ Sitemap generation
- 🚀 Fast deployment

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT 