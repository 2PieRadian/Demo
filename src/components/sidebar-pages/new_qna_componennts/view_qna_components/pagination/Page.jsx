export default function Page({ page, onClick, currentPage }) {
  return (
    <button
      className={`flex items-center justify-center w-[35px] h-[37px] transition rounded-[10px] cursor-pointer ${
        currentPage === page
          ? "bg-black text-white"
          : "bg-white text-black hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      {page}
    </button>
  );
}
