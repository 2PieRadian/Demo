import { ArrowLeft, ArrowRight } from "lucide-react";
import Page from "./Page";

export default function Pagination({
  totalQuestions,
  PAGE_SIZE,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalQuestions / PAGE_SIZE);

  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handleNextButton() {
    setCurrentPage((prev) => prev + 1);
  }

  function handlePreviousButton() {
    setCurrentPage((prev) => prev - 1);
  }

  function handlePageClick(page) {
    setCurrentPage(page);
  }

  return (
    <div className="flex justify-center items-center gap-[20px]">
      {currentPage > 1 && (
        <button
          className="flex items-center text-gray-400 text-[18px] gap-[5px] cursor-pointer"
          onClick={handlePreviousButton}
        >
          <ArrowLeft size={22} />
          Previous
        </button>
      )}

      <div className="flex items-center gap-[5px]">
        {paginationArray.map((page) => (
          <Page
            key={page}
            page={page}
            onClick={() => handlePageClick(page)}
            currentPage={currentPage}
          />
        ))}
      </div>

      {currentPage < totalPages && (
        <button
          className="flex items-center text-gray-400 text-[18px] gap-[5px] cursor-pointer"
          onClick={handleNextButton}
        >
          Next
          <ArrowRight />
        </button>
      )}
    </div>
  );
}
