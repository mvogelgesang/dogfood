export default function SiteOverview() {
  return (
    <section className="py-16 bg-light-card dark:bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-heading dark:text-dark-heading">
            Dogfood.ing
          </h1>
          <p className="text-xl mb-8 text-light-text dark:text-dark-text">
          At Dogfood.ing, we go inside the companies that live by a simple but powerful mantra: &quot;Eat your own dog food.&quot; We uncover how innovative brands like Strava, WHOOP, and WhatsApp use their own technology every day to drive innovation, accelerate product development, and build the future. This is where theory meets practice.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-light-heading dark:text-dark-heading">
              The &apos;Dogfooding&apos; Advantage: Why It Matters
              </h2>
              <p className="text-light-text dark:text-dark-text">
              Companies that commit to dogfooding don&apos;t just talk about quality; they live it. This internal-first approach gives them a distinct competitive edge:
                <ul>
                  <li>Smarter Product Development: By using their own products, teams discover bugs, usability issues, and opportunities for improvement long before customers do.</li>
                  <li>Authentic Innovation: Features are developed to solve real-world problems that employees experience firsthand, ensuring they are relevant and impactful.</li>
                  <li>Unshakeable Customer Confidence: Actively using your own product is the ultimate demonstration of belief in its quality and reliability, building stronger trust with your users.</li>
                </ul>
              </p>
            </div>
            
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-light-heading dark:text-dark-heading">
              Explore Our In-Depth Analyses
              </h2>
              <p className="text-light-text dark:text-dark-text">
              Dive into our real-world case studies to see how this practice transforms industries:
                <ol>
                  <li>Fitness & Wearable Tech: Discover how the data-driven cultures at WHOOP and Wahoo Fitness refine health monitoring from within.</li>  
                  <li>Virtual Worlds & Gaming: See how employees at Zwift shape their virtual cycling platform by being its most passionate users.</li>
                  <li>Software & Messaging Apps: Learn how daily internal use builds more reliable and secure global platforms at companies like WhatsApp.</li>
                </ol>
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-light-heading dark:text-dark-heading">
              Key Topics We Explore
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Product Development', 'Quality Assurance', 'Customer Experience', 'Innovation'].map((topic) => (
                <div
                  key={topic}
                  className="bg-light-tag-bg dark:bg-dark-tag-bg p-4 rounded-lg text-light-tag-text dark:text-dark-tag-text"
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 