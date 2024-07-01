import { ChangeEventHandler } from "react"

export const AnimationSort = ({ value, onChange }: { value: string, onChange: ChangeEventHandler<HTMLSelectElement> }) => {
  return (
    <select id="countries" value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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