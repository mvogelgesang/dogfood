import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getAllTags, TagCount } from '../../lib/posts';
import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';

interface TagsPageProps {
  tags: TagCount[];
}

export default function TagsPage({ tags }: TagsPageProps) {
  // Sort tags alphabetically by their display names
  const sortedTags = [...tags].sort((a, b) => a.tag.localeCompare(b.tag));

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
              {sortedTags.map(({ tag, count }) => (
                <div key={tag} role="listitem">
                  <Link
                    href={`/tags/${tag}`}
                    className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
                    aria-label={`View ${count} article${count === 1 ? "" : "s"} tagged with ${tag}`}
                  >
                    <span className="text-xl font-semibold">{tag}</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">
                      ({count})
                    </span>
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