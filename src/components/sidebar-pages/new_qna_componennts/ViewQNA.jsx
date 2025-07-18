import { useEffect, useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");

  const PAGE_SIZE = 6;
  const totalQuestions = filteredQuestions.length;
  const start = (currentPage - 1) * PAGE_SIZE;
  let end = Math.min(start + PAGE_SIZE, filteredQuestions.length);

  function fuzzySearch(substr, str) {
    const words = substr.toLowerCase().split(" ");
    str = str.toLowerCase();

    for (const word of words) {
      if (!str.includes(word)) return false;
    }

    return true;
  }

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredQuestions(questions);
      return;
    }

    setCurrentTopic("All");
    setFilteredQuestions(
      questions.filter((q) => fuzzySearch(searchQuery, q.content))
    );

    setCurrentPage(1);
  }, [searchQuery]);

  function filterBySearch(e) {
    setSearchQuery(e.target.value);
  }

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
    <div className="w-full dark:text-gray-300 dark:border-gray-700 h-full flex flex-col gap-[20px] border border-gray-300 p-[30px] rounded-[10px]">
      <h1 className="text-[20px]">View Q&A</h1>

      <Line />

      <div className="flex items-center gap-[7px] w-full">
        <SearchBar filterBySearch={filterBySearch} searchQuery={searchQuery} />
        <SelectTopic
          filterByTopicName={filterByTopicName}
          currentTopic={currentTopic}
        />
        <DraftOnly draftOnlyFilter={draftOnlyFilter} draftOnly={draftOnly} />
      </div>

      <Line />

      <Questions
        filteredQuestions={filteredQuestions}
        PAGE_SIZE={PAGE_SIZE}
        start={start}
        end={end}
      />

      <Pagination
        totalQuestions={totalQuestions}
        PAGE_SIZE={PAGE_SIZE}
        start={start}
        end={end}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
