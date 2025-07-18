import Question from "./Question";

export default function Questions({ filteredQuestions, start, end }) {
  return (
    <div className="flex flex-col gap-[20px]">
      {filteredQuestions.slice(start, end).map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
}
