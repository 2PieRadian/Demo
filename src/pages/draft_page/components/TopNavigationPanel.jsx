import { useState } from "react";

import SelectTopic from "../../../components/sidebar-pages/new_qna_componennts/view_qna_components/SelectTopic";
import Pagination from "../../../components/pagination/Pagination";

export default function TopNavigationPanel() {
  const [selectedOption, setSelectedOption] = useState("Select a Topic");
  const [currentPage, setCurrentPage] = useState(1);

  const totalQuestions = 10;

  const options = [
    "Response ID 234845",
    "Response ID 384777",
    "Response ID 214578",
  ];

  function filterByTopicName() {}

  return (
    <div className="py-[10px] px-[25px] flex justify-between items-center">
      <div className="flex items-center gap-[10px]">
        <SelectTopic
          options={options}
          filterByTopicName={filterByTopicName}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <SelectTopic
          options={options}
          filterByTopicName={filterByTopicName}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <Pagination
        totalQuestions={totalQuestions}
        PAGE_SIZE={4}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="flex items-center gap-[3px]">
        <button className="bg-red-200 py-[10px] px-[20px] text-red-500 rounded-l-[7px]">
          Reject
        </button>
        <button className="bg-green-200 py-[10px] px-[20px] text-green-600 rounded-r-[7px]">
          Approve
        </button>
        <button className="py-[10px] px-[20px]">Submit Comment</button>
      </div>
    </div>
  );
}
