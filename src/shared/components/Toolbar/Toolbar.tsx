'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { appRoutes } from '@/app.routes';

const Toolbar = () => {
  const currentRoute = usePathname();

  return (
    <div className='bg-green-dark-2 text-background flex justify-between px-4 py-4 mb-12'>
      <p className='text-2xl font-bold'>DELOSI</p>
      <div className='flex gap-5'>
        {appRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`hover:underline ${currentRoute === route.href ? 'underline' : ''}`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
