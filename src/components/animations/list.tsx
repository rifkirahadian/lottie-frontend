import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';

export const AnimationList = () => {
  const data = useSelector(
    (state: RootState) => state.animationReducer.animations
  );

  return (
    <div className='relative overflow-x-auto'>
      <table className='table-default'>
        <thead>
          <tr>
            <th scope='col' className='px-6 py-4'>
              No
            </th>
            <th scope='col' className='px-6 py-4'>
              Filename
            </th>
            <th scope='col' className='px-6 py-4'>
              Size
            </th>
            <th scope='col' className='px-6 py-4'>
              Created At
            </th>
            <th scope='col' className='px-6 py-4'>
              #
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td className='whitespace-nowrap px-6 py-4'> {key + 1} </td>
                <td className='whitespace-nowrap px-6 py-4'> {item.name} </td>
                <td className='whitespace-nowrap px-6 py-4'>
                  {' '}
                  {Math.ceil(item.size / 1024)} KB{' '}
                </td>
                <td className='whitespace-nowrap px-6 py-4'>
                  {' '}
                  {item.createdAt}{' '}
                </td>
                <td className='whitespace-nowrap px-6 py-4'>
                  <Link
                    href={`/preview/${item.id}`}
                    className='btn btn-primary'
                  >
                    <FaEye size={10} />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
