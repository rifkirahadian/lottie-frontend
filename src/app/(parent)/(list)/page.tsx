'use client';

import { AnimationList, AnimationSearch, AnimationSort } from '@/components/animations';
import { FIND_ALL_FILES_QUERY } from '@/services/graphql';
import { useQuery } from '@apollo/client';
import { ChangeEventHandler, FormEvent, useState } from 'react';

export default function List() {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('');
  const { loading, data } = useQuery(FIND_ALL_FILES_QUERY(search, sort));
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
          {!loading && data && (
            <>
              <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div>
                  <AnimationSearch onSubmit={onSubmit} />
                </div>
                <div>
                  <AnimationSort value={sort} onChange={handleSortChange} />
                </div>
              </div>
              
              <AnimationList data={data.findAll} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
