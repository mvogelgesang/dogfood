import { GetStaticProps } from 'next';
import { getAllPosts, Post } from '../lib/posts';
import Layout from '../components/Layout';
import SiteOverview from '../components/SiteOverview';
import FeaturedArticles from '../components/FeaturedArticles';
import LatestArticles from '../components/LatestArticles';

interface HomePageProps {
  featuredPosts: Post[];
  latestPosts: Post[];
  categories: {
    name: string;
    slug: string;
    count: number;
  }[];
}

export default function HomePage({ featuredPosts, latestPosts }: HomePageProps) {
  return (
    <Layout
      title="Dogfood.ing - Exploring How Companies Use Their Own Products"
      description="Discover how companies like Meta, Rakuten, and Cloudflare practice dogfooding to improve their products and services. Learn about real-world examples and best practices in product development, quality assurance, and innovation."
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Dogfood.ing',
        description: 'Exploring how companies use their own products and technology',
        url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dogfood.ing',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dogfood.ing'}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      }}
    >
      <SiteOverview />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <LatestArticles posts={latestPosts} />
          <FeaturedArticles posts={featuredPosts} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  
  // Get the 6 most recent posts for the homepage
  const latestPosts = allPosts.slice(0, 6);
  
  // Get featured posts (currently using most recent, but could be based on analytics)
  const featuredPosts = allPosts.slice(6, 12);


  return {
    props: {
      latestPosts,
      featuredPosts,
    },
  };
}; 