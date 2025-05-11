import { IoIosSearch } from "react-icons/io";
import { useForm } from "react-hook-form";

interface SearchPayload {
  query: string;
}
export default function SearchBar({
  onSearch,
  // initialValue
}: {
  onSearch: (query: string) => void;
  // initialValue?: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchPayload>({
    // defaultValues:{
    //   query: initialValue
    // }
  });

  function onSubmit(data: SearchPayload) {
    onSearch(data.query);
  }
  return (
    <form className="max-w-lg mx-auto mr-0" onSubmit={handleSubmit(onSubmit)}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="w-4 h-4 text-white" />
        </div>
        <input
          type="text"
          id="default-search"
          className={`block w-full p-3 ps-10 text-sm text-accent border rounded-lg bg-transparent
            focus:outline-none focus:ring-1 ${
              errors.query
                ? "focus:ring-red-500 focus:border-red-500"
                : "focus:ring-white focus:border-white"
            }`}
          {...register("query", {
            required: {
              value: true,
              message: "search input is required",
            },
          })}
          placeholder="Search Movie Title..."
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-[5px] bg-secondary hover:bg-secondary/50 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
}
