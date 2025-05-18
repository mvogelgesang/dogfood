export default function SiteOverview() {
  return (
    <section className="py-16 bg-light-card dark:bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light-heading dark:text-dark-heading">
            Dogfood.ing
          </h1>
          <p className="text-xl mb-8 text-light-text dark:text-dark-text">
            Exploring how companies use their own products and technology to improve their offerings
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-light-heading dark:text-dark-heading">
                What is Dogfooding?
              </h2>
              <p className="text-light-text dark:text-dark-text">
                &quot;Eating your own dog food&quot; is a business practice where companies use their own products
                internally. This approach helps identify issues, gather feedback, and demonstrate confidence
                in their offerings.
              </p>
            </div>
            
            <div className="bg-light-background dark:bg-dark-background p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-light-heading dark:text-dark-heading">
                Why It Matters
              </h2>
              <p className="text-light-text dark:text-dark-text">
                Companies that practice dogfooding often create better products, build stronger customer
                relationships, and demonstrate their commitment to quality and continuous improvement.
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