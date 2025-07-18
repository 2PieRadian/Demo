import Line from "../Line";
import DraftOnly from "./new_qna_componennts/view_qna_components/DraftOnly";
import SearchBar from "./new_qna_componennts/view_qna_components/SearchBar";
import SelectTopic from "./new_qna_componennts/view_qna_components/SelectTopic";

export default function ReviewedQNA() {
  return (
    <div className="w-full h-full flex flex-col gap-[20px] border border-gray-300 p-[30px] rounded-[10px]">
      <h1 className="text-[20px]">Reviewed Q&A</h1>

      <Line />

      <div className="flex items-center gap-[7px] w-full">
        <SearchBar />
        <SelectTopic />
        <DraftOnly />
      </div>
    </div>
  );
}
