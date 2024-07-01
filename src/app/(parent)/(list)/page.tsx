'use client';

import { AnimationList, AnimationSearch, AnimationSort } from '@/components/animations';
import { FIND_ALL_FILES_QUERY } from '@/services/graphql';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { getAllAnimations, saveAnimation } from '@/services/indexdb';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../lib/store';
import { setAnimations } from '../../../../lib/features/animations/animationSlice';

export default function List() {
  const dispatch = useDispatch<AppDispatch>();
  const { sort, search, animations } = useSelector((state: RootState) => state.animationReducer);
  const { loading, data, error, refetch } = useQuery(FIND_ALL_FILES_QUERY(search, sort));

  const loadOfflineAnimations = async() => {
    const offlineAnimations = await getAllAnimations();
    if (offlineAnimations.length > 0) {
      dispatch(setAnimations(offlineAnimations));
    }
  }

  useEffect(() => {
    if (data) {
      dispatch(setAnimations(data.findAll));
      data.findAll.forEach(saveAnimation);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      loadOfflineAnimations();
    }
  }, [error]);

  useEffect(() => {
    if (animations.length > 0) {
      refetch();
    }
  }, []);

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1 className='mb-3 mt-3'>Animation List</h1>
        <div className='h-screen w-full'>
          {!loading && (
            <>
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div>
                  <AnimationSearch />
                </div>
                <div>
                  <AnimationSort />
                </div>
              </div>

              <AnimationList />
            </>
          )}
        </div>
      </div>
    </>
  );
}
