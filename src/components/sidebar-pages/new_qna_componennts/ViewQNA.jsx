import { useState } from "react";
import Line from "../../Line";
import SearchBar from "./view_qna_components/SearchBar";
import SelectTopic from "./view_qna_components/SelectTopic";
import DraftOnly from "./view_qna_components/DraftOnly";
import Questions from "./view_qna_components/Questions";
import data from "../../../../dummy_data/data";
import Pagination from "./view_qna_components/pagination/Pagination";

export default function ViewQNA() {
  const [questions, setQuestions] = useState(data);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [draftOnly, setDraftOnly] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 5;
  const totalQuestions = filteredQuestions.length;
  const start = (currentPage - 1) * PAGE_SIZE;

  function filterByTopicName(topic_name) {
    const filteredByTopicName = questions.filter(
      (q) => q.topic_name === topic_name || topic_name === "All"
    );

    setFilteredQuestions(filteredByTopicName);
    setCurrentTopic(topic_name);
    setCurrentPage(1);
  }

  function draftOnlyFilter() {
    if (draftOnly === false) {
      // Turn on the filter
      setFilteredQuestions(
        questions.filter(
          (q) =>
            q.status === "Draft" &&
            (q.topic_name === currentTopic || currentTopic === "All")
        )
      );
    } else {
      // Turn off the filter
      if (currentTopic === "All") {
        setFilteredQuestions(questions);
      } else {
        setFilteredQuestions(
          questions.filter((q) => q.topic_name === currentTopic)
        );
      }
    }

    setCurrentPage(1);
    setDraftOnly((prev) => !prev);
  }

  return (
    <div className="w-full h-full flex flex-col gap-[20px] border border-gray-300 p-[30px] rounded-[10px]">
      <h1 className="text-[20px]">View Q&A</h1>

      <Line />

      <div className="flex items-center gap-[7px] w-full">
        <SearchBar />
        <SelectTopic filterByTopicName={filterByTopicName} />
        <DraftOnly draftOnlyFilter={draftOnlyFilter} draftOnly={draftOnly} />
      </div>

      <Line />

      <Questions
        filteredQuestions={filteredQuestions}
        PAGE_SIZE={PAGE_SIZE}
        start={start}
      />

      <Pagination
        totalQuestions={totalQuestions}
        PAGE_SIZE={PAGE_SIZE}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
