'use client';

import { LottieAnimation } from '@/components/animations';
import { FIND_ONE_FILE_QUERY } from '@/services/graphql';
import { Animation } from '@/types';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

export default function List() {
  const { id } = useParams();
  const { loading, data } = useQuery<{ findOne: Animation }>(
    FIND_ONE_FILE_QUERY(id)
  );

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1 className='mb-3 mt-3'>Animation Detail</h1>
        <div className='h-screen w-full'>
          {!loading && data && (
            <div className='grid grid-cols-3 gap-4'>
              <div>
                <LottieAnimation
                  animationData={JSON.parse(data.findOne.file)}
                />
              </div>
              <div>
                <ul className='font-medium rounded-lg border-gray-200 text-sm'>
                  <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
                    {data?.findOne.name}
                  </li>
                  <li className='w-full border-b border-gray-200 px-4 py-2'>{`${data ? Math.ceil(data?.findOne.size / 1024) : 0} KB`}</li>
                  <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
                    {data?.findOne.createdAt}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
