'use client';

import { AnimationList } from '@/components/animations';
import { FIND_ALL_FILES_QUERY } from '@/services/graphql';
import { useQuery } from '@apollo/client';

export default function List() {
  const { loading, data } = useQuery(FIND_ALL_FILES_QUERY);

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1 className='mb-3 mt-3'>Animation List</h1>
        <div className='h-screen w-full'>
          {!loading && data && <AnimationList data={data.findAll} />}
        </div>
      </div>
    </>
  );
}
