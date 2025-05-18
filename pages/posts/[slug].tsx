import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { getAllPosts, getPostBySlug, Post } from '../../lib/posts';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import { remark } from 'remark';
import html from 'remark-html';

interface PostPageProps {
  post: Post;
  content: string;
}

export default function PostPage({ post, content }: PostPageProps) {
  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      type="article"
      publishedTime={post.date}
      modifiedTime={post.date}
      tags={post.tags}
    >
      <article className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-light-heading dark:text-dark-heading">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-light-text dark:text-dark-text">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}
              </time>
              {post.tags?.length > 0 ? (
                <div className="flex flex-wrap gap-2" role="list" aria-label="Article tags">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent px-2 py-1 rounded hover:bg-light-accent/30 dark:hover:bg-dark-accent/30 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
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
            </div>
          </header>

          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);
  if (!post) {
    return {
      notFound: true,
    };
  }

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(post.content);
  const content = processedContent.toString();

  return {
    props: {
      post,
      content,
    },
  };
}; 