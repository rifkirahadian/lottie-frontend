'use client';

import { AnimationDetail } from '@/components/animations';
import { FIND_ONE_FILE_QUERY } from '@/services/graphql';
import { Animation } from '@/types';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { getAnimationById, saveAnimation } from '@/services/indexdb';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../lib/store';
import { setAnimation } from '../../../../../lib/features/animations/animationSlice';

export default function Preview() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data, error } = useQuery<{ findOne: Animation }>(FIND_ONE_FILE_QUERY(id));

  const loadOfflineAnimation = async() => {
    const offlineAnimation = await getAnimationById(id.toString());
    if (offlineAnimation) {
      dispatch(setAnimation(offlineAnimation));
    }
  }
  
  useEffect(() => {
    if (error) {
      loadOfflineAnimation();
    }
  }, [error]);

  useEffect(() => {
    if (data && !loading) {
      dispatch(setAnimation(data.findOne));
      saveAnimation(data.findOne);
    }
  }, [data, loading]);

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1 className='mb-3 mt-3'>Animation Detail</h1>
        <div className='h-screen w-full'>
          <AnimationDetail />
        </div>
      </div>
    </>
  );
}
