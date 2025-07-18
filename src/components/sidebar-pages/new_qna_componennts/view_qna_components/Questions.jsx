import Question from "./Question";

export default function Questions({ filteredQuestions }) {
  return (
    <div className="flex flex-col gap-[20px]">
      {filteredQuestions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
}
