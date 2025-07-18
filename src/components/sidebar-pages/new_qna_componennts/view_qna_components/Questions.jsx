import Question from "./Question";

export default function Questions({ filteredQuestions, PAGE_SIZE, start }) {
  // Done
  let end = Math.min(start + PAGE_SIZE, filteredQuestions.length);

  return (
    <div className="flex flex-col gap-[20px]">
      {filteredQuestions.slice(start, end).map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
}
