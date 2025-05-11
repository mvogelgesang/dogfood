import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllTags, TagCount } from '../../lib/posts';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

interface TagsPageProps {
  tags: TagCount[];
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

          <nav aria-label="Tag navigation">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" role="list">
              {tags.map(({ tag, count }) => (
                <div key={tag} role="listitem">
                  <Link
                    href={`/tags/${tag}`}
                    className="bg-light-tag-bg dark:bg-dark-tag-bg text-light-tag-text dark:text-dark-tag-text px-4 py-3 rounded-lg hover:bg-light-accent/20 dark:hover:bg-dark-accent/20 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent text-center flex flex-col items-center justify-center"
                    aria-label={`View ${count} article${count !== 1 ? 's' : ''} tagged with ${tag}`}
                  >
                    <span className="font-medium">{tag}</span>
                    <span className="text-sm opacity-75">{count} article{count !== 1 ? 's' : ''}</span>
                  </Link>
                </div>
              ))}
            </div>
          </nav>
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