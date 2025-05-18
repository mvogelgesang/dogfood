import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { getAllTags, getPostsByTag, Post } from '../../lib/posts';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

interface TagPageProps {
  tag: string;
  posts: Post[];
}

export default function TagPage({ tag, posts }: TagPageProps) {
  return (
    <Layout
      title={`Articles tagged with "${tag}"`}
      description={`Browse all articles tagged with "${tag}"`}
    >
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-light-heading dark:text-dark-heading">
              Articles tagged with &quot;{tag}&quot;
            </h1>
            <p className="text-lg text-light-text dark:text-dark-text">
              {posts.length} article{posts.length !== 1 ? 's' : ''} found
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
                      month: 'long',
                    })}
                  </time>
                  <p className="text-light-text dark:text-dark-text mb-4">
                    {post.excerpt}
                  </p>
                  {post.tags?.length > 0 ? (
                    <div className="flex flex-wrap gap-2" role="list" aria-label="Article tags">
                      {post.tags.map((postTag) => (
                        <Link
                          key={postTag}
                          href={`/tags/${postTag}`}
                          className={`text-sm px-2 py-1 rounded ${
                            postTag === tag
                              ? 'bg-light-accent dark:bg-dark-accent text-white'
                              : 'bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent'
                          } hover:bg-light-accent/30 dark:hover:bg-dark-accent/30 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent`}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.location.href = `/tags/${postTag}`;
                          }}
                        >
                          {postTag}
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

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  return {
    paths: tags.map(({ tag }) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string;
  const posts = getPostsByTag(tag);
  
  if (!posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tag,
      posts,
    },
  };
}; 