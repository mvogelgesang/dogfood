import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="bg-light-accent dark:bg-dark-accent text-white mt-12" 
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Dogfood.ing</h2>
            <p className="text-sm">
              Exploring how companies use their own products and technology
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/" 
                    className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-accent dark:focus:ring-offset-dark-accent rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/tags" 
                    className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-accent dark:focus:ring-offset-dark-accent rounded"
                  >
                    Tags
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">About</h2>
            <p className="text-sm">
              A blog dedicated to exploring the practice of dogfooding in technology companies.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Dogfood.ing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 