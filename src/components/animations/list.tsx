export const AnimationList = () => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
