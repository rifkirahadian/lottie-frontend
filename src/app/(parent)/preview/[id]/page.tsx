'use client';

import { LottieAnimation } from '@/components/animations';
import { FIND_ONE_FILE_QUERY } from '@/services/graphql';
import { Animation } from '@/types';
import { downloadJsonFile } from '@/utils';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getAnimationById, saveAnimation } from '@/services/indexdb';

export default function Preview() {
  const { id } = useParams();
  const [animation, setAnimation] = useState<Animation | null>(null);
  const { loading, data, error } = useQuery<{ findOne: Animation }>(FIND_ONE_FILE_QUERY(id));

  const loadOfflineAnimation = async() => {
    const offlineAnimation = await getAnimationById(id.toString());
    if (offlineAnimation) {
      setAnimation(offlineAnimation);
    }
  }
  
  useEffect(() => {
    if (error) {
      loadOfflineAnimation();
    }
  }, [error]);

  useEffect(() => {
    if (data && !loading) {
      setAnimation(data.findOne);
      saveAnimation(data.findOne); // Save to IndexedDB
    }
  }, [data, loading]);

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1 className='mb-3 mt-3'>Animation Detail</h1>
        <div className='h-screen w-full'>
          {animation && (
            <div className='grid grid-cols-3 gap-4'>
              <div>
                <LottieAnimation
                  animationData={JSON.parse(animation.file)}
                />
              </div>
              <div>
                <ul className='font-medium rounded-lg border-gray-200 text-sm'>
                  <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
                    {animation.name}
                  </li>
                  <li className='w-full border-b border-gray-200 px-4 py-2'>{`${Math.ceil(animation.size / 1024)} KB`}</li>
                  <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
                    {animation.createdAt}
                  </li>
                  <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
                    <button
                      className='btn btn-primary'
                      onClick={() =>
                        downloadJsonFile(animation.file, animation.name)
                      }
                    >
                      Download
                    </button>
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
