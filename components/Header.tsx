import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-light-accent dark:bg-dark-accent text-white shadow-md" role="banner">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
          <Link 
            href="/" 
            className="text-2xl font-bold hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-accent dark:focus:ring-offset-dark-accent rounded"
            aria-label="Dogfood.ing - Home"
          >
            Dogfood.ing
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-accent dark:focus:ring-offset-dark-accent rounded"
            >
              Home
            </Link>
            <Link 
              href="/tags" 
              className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-accent dark:focus:ring-offset-dark-accent rounded"
            >
              Tags
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
} 