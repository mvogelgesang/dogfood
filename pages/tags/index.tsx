import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllTags } from '../../lib/posts';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

interface TagsPageProps {
  tags: string[];
}

export default function TagsPage({ tags }: TagsPageProps) {
  return (
    <Layout
      title="Browse by Tag"
      description="Browse all articles by their tags"
    >
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-light-heading dark:text-dark-heading">
              Browse by Tag
            </h1>
            <p className="text-lg text-light-text dark:text-dark-text">
              Explore articles by topic
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${tag}`}
                className="bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent px-4 py-3 rounded-lg hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent text-center"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllTags();
  return {
    props: {
      tags,
    },
  };
}; 