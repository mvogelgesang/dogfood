import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import Layout from '../components/Layout';
import Breadcrumbs from '../components/Breadcrumbs';

interface HomePageProps {
  posts: Array<{
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
  }>;
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-light-heading dark:text-dark-heading">
              Welcome to Dogfood.ing
            </h1>
            <p className="text-lg text-light-text dark:text-dark-text">
              Exploring how companies use their own products and technology
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-light-background dark:bg-dark-background rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
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
                    className="text-sm text-light-text dark:text-dark-text block mb-2"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </time>
                  <p className="text-light-text dark:text-dark-text mb-4">
                    {post.excerpt}
                  </p>
                  {post.tags?.length > 0 ? (
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Article tags">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/tags/${tag}`}
                          className="text-sm bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent px-2 py-1 rounded hover:bg-light-accent/30 dark:hover:bg-dark-accent/30 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
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
                  ) : null}
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