'use client';

import { AnimationList, AnimationSearch, AnimationSort } from '@/components/animations';
import { FIND_ALL_FILES_QUERY } from '@/services/graphql';
import { useQuery } from '@apollo/client';
import { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { getAllAnimations, saveAnimation } from '@/services/indexdb';
import { Animation } from '@/types';

export default function List() {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const [animations, setAnimations] = useState<Animation[]>([]);
  const { loading, data, error } = useQuery(FIND_ALL_FILES_QUERY(search, sort));

  const loadOfflineAnimations = async() => {
    const offlineAnimations = await getAllAnimations();
    if (offlineAnimations.length > 0) {
      setAnimations(offlineAnimations);
    }
  }

  useEffect(() => {
    if (data) {
      setAnimations(data.findAll);
      data.findAll.forEach(saveAnimation);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      loadOfflineAnimations();
    }
  }, [error]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchInput = form.elements.namedItem('search') as HTMLInputElement;
    setSearch(searchInput.value);
  };

  const handleSortChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1 className='mb-3 mt-3'>Animation List</h1>
        <div className='h-screen w-full'>
          {!loading && animations && (
            <>
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div>
                  <AnimationSearch onSubmit={onSubmit} />
                </div>
                <div>
                  <AnimationSort value={sort} onChange={handleSortChange} />
                </div>
              </div>

              <AnimationList data={animations} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
