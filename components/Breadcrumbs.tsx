import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Breadcrumbs() {
  const router = useRouter();
  const paths = router.asPath.split('/').filter(Boolean).map(path => decodeURIComponent(path));

  if (paths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        <li>
          <Link 
            href="/" 
            className="text-light-accent dark:text-dark-accent hover:underline focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent rounded"
          >
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isLast = index === paths.length - 1;
          const label = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2 text-light-accent dark:text-dark-accent" aria-hidden="true">/</span>
              {isLast ? (
                <span className="text-light-heading dark:text-dark-heading" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link 
                  href={href}
                  className="text-light-accent dark:text-dark-accent hover:underline focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent rounded"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
} 