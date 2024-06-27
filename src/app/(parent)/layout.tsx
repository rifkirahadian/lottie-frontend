'use client';

import { Props } from '@/types';
import { ApolloProvider } from '@apollo/client';
import Link from 'next/link';
import client from '../../../lib/apolloClient';

export default function Layout({ children }: Props) {
  return (
    <div className='bg-white'>
      <div className='sticky top-0 h-20 w-full bg-emerald-800'>
        <div className='container mx-auto h-full px-4'>
          <div className='flex h-full items-center justify-between'>
            <ul className='hidden gap-x-6 text-white md:flex'>
              <li>
                <Link href='/'>
                  <p>List</p>
                </Link>
              </li>
              <li>
                <Link href='/create'>
                  <p>Add</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ApolloProvider client={client}>
        <div>{children}</div>
      </ApolloProvider>
    </div>
  );
}
