import { IoIosSearch } from "react-icons/io";

export default function TopBar() {
  return (
    <form className="max-w-lg mx-auto mr-0">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="w-4 h-4 text-white" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 ps-10 text-sm text-accent border border-accent rounded-lg bg-transparent"
          placeholder="Search Movie Title..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-1.5 bg-secondary hover:bg-secondary/50 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
}
