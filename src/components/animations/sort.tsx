import { ChangeEventHandler } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../lib/store";
import { setSort } from "../../../lib/features/animations/animationSlice";

export const AnimationSort = () => {
  const sort = useSelector((state: RootState) => state.animationReducer.sort);
  const dispatch = useDispatch<AppDispatch>();
  const handleSortChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <select id="countries" value={sort} onChange={handleSortChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <option>Sort</option>
      <option value="name-asc">Name Ascending</option>
      <option value="name-desc">Name Descending</option>
      <option value="size-asc">Size Ascending</option>
      <option value="size-desc">Size Descending</option>
      <option value="createdAt-asc">Created At Ascending</option>
      <option value="createdAt-desc">Created At Descending</option>
    </select>
  )
}