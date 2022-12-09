import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className="hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
      <input
        type="text"
        placeholder="search..."
        className="focus:ounline-none h-full w-6 flex-shrink flex-grow rounded-l-md p-2"
      />
      <div className="p-3">
        <FiSearch className="text-white" />
      </div>
    </div>
  );
}
