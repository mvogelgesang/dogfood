import Link from 'next/link';
import { Post } from '../lib/posts';

interface ArticleGridProps {
  posts: Post[];
}

export default function ArticleGrid({ posts }: ArticleGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {post.image && (
            <Link href={`/posts/${post.slug}`}>
              <img
                src={post.image}
                alt={`Featured image for ${post.title}`}
                className="w-full h-48 object-cover"
              />
            </Link>
          )}
          <div className="p-6">
            <time
              dateTime={post.date}
              className="text-sm text-light-text dark:text-dark-text mb-2 block"
            >
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h2 className="text-xl font-semibold mb-3 text-light-heading dark:text-dark-heading">
              <Link
                href={`/posts/${post.slug}`}
                className="hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-light-text dark:text-dark-text mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="text-sm bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent px-2 py-1 rounded hover:bg-light-accent/30 dark:hover:bg-dark-accent/30 transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
} 