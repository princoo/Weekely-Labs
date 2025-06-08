import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { PaginatorProps } from "../../types/paginator";

const Pagination = ({ next, onPrevious, onNext, page }: PaginatorProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 my-4 mt-20">
      {Number(page) > 1 && (
        <button
          className="w-8 h-8 flex items-center justify-center cursor-pointer group "
          aria-label="Previous page"
          onClick={onPrevious}
          disabled={Number(page) === 1}
        >
          <FaChevronLeft
            size={30}
            className="text-black/60 dark:text-white group-hover:text-secondary"
          />
        </button>
      )}
      <p>{page}</p>
      {next && (
        <button
          className="w-8 h-8 flex items-center justify-center group cursor-pointer"
          aria-label="Next page"
          onClick={onNext}
          disabled={!next}
        >
          <FaChevronRight
            size={30}
            className="text-black/60 dark:text-white group-hover:text-secondary"
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
