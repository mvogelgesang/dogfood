import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllPosts, Post } from '../../lib/posts';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

interface PostsPageProps {
  posts: Post[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <Layout
      title="All Articles - Dogfood.ing"
      description="Browse all articles about how companies use their own products and technology"
    >
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-light-heading dark:text-dark-heading">
              All Articles
            </h1>
            <p className="text-lg text-light-text dark:text-dark-text">
              {posts.length} article{posts.length !== 1 ? 's' : ''} exploring how companies use their own products
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-light-card dark:bg-dark-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link
                  href={`/posts/${post.slug}`}
                  className="block p-6 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent rounded-lg"
                >
                  <h2 className="text-xl font-semibold mb-2 text-light-heading dark:text-dark-heading">
                    {post.title}
                  </h2>
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
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/tags/${tag}`}
                          className="text-sm px-2 py-1 rounded bg-light-tag-bg dark:bg-dark-tag-bg text-light-tag-text dark:text-dark-tag-text hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = `/tags/${tag}`;
                          }}
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}; 