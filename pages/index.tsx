import { GetStaticProps } from 'next';
import { getAllPosts, Post } from '../lib/posts';
import Layout from '../components/Layout';
import SiteOverview from '../components/SiteOverview';
import FeaturedArticles from '../components/FeaturedArticles';

interface HomePageProps {
  featuredPosts: Post[];
}

export default function HomePage({ featuredPosts }: HomePageProps) {
  return (
    <Layout
      title="Dogfood.ing - Exploring How Companies Use Their Own Products"
      description="Discover how companies practice dogfooding to improve their products and services. Learn about real-world examples and best practices."
    >
      <SiteOverview />
      <FeaturedArticles posts={featuredPosts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();
  // Get the 6 most recent posts for the homepage
  const featuredPosts = allPosts.slice(0, 6);

  return {
    props: {
      featuredPosts,
    },
  };
}; 