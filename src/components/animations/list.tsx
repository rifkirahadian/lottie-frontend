import { Animation } from "@/types";

export const AnimationList = ({ data }: { data: Animation[] }) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className="table-default">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-4">No</th>
            <th scope="col" className="px-6 py-4">Filename</th>
            <th scope="col" className="px-6 py-4">Size</th>
            <th scope="col" className="px-6 py-4">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return (
              <tr key={key}>
                <td className="whitespace-nowrap px-6 py-4"> {key+1} </td>
                <td className="whitespace-nowrap px-6 py-4"> {item.name} </td>
                <td className="whitespace-nowrap px-6 py-4"> {Math.ceil(item.size / 1024)} KB </td>
                <td className="whitespace-nowrap px-6 py-4"> {item.createdAt} </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};
