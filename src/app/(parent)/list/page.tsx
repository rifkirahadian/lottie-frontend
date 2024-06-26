import { AnimationList } from '@/components/animations';

export default function List() {
  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1>Animation List</h1>
        <div className='h-screen w-full'>
          <AnimationList />
        </div>
      </div>
    </>
  );
}
