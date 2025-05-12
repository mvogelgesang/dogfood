import Link from 'next/link';
import { Post } from '../lib/posts';

interface FeaturedArticlesProps {
  posts: Post[];
}

export default function FeaturedArticles({ posts }: FeaturedArticlesProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-light-heading dark:text-dark-heading">
            Featured Stories
          </h2>
          <p className="text-lg text-light-text dark:text-dark-text max-w-2xl mx-auto">
            Explore how companies use their own products and technology to improve their offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-light-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link
                href={`/posts/${post.slug}`}
                className="block p-6 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-light-heading dark:text-dark-heading">
                  {post.title}
                </h3>
                <time
                  dateTime={post.date}
                  className="text-sm text-light-text dark:text-dark-text block mb-3"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <p className="text-light-text dark:text-dark-text mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Article tags">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-2 py-1 rounded bg-light-tag-bg dark:bg-dark-tag-bg text-light-tag-text dark:text-dark-tag-text"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-sm px-2 py-1 rounded bg-light-tag-bg dark:bg-dark-tag-bg text-light-tag-text dark:text-dark-tag-text">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/posts"
            className="inline-block px-6 py-3 bg-light-accent dark:bg-dark-accent text-white rounded-lg hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent focus:ring-offset-2"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
} 