export default function DraftOnly({ draftOnlyFilter, draftOnly }) {
  return (
    <div
      className={`outline-none cursor-pointer rounded-[7px] border-none text-[16px] font-medium placeholder:text-black  py-[9px] px-[15px] ${
        draftOnly
          ? "bg-gray-800 text-white"
          : "bg-[rgba(230,230,230,1)] text-black"
      }`}
      onClick={draftOnlyFilter}
    >
      Draft Only
    </div>
  );
}
