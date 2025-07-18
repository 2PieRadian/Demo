export default function Question({ question }) {
  return (
    <div className="flex justify-between items-start">
      {/* Left */}
      <div className="flex gap-[10px]">
        {/* Question Number */}
        <div>{question.id}.</div>

        {/* Question Text */}
        <div className="flex-1">{question.content}</div>

        {/* Topic Name */}
        <div className="flex items-center justify-center font-light bg-[rgba(230,230,230,1)] text-[12px] h-[24px] p-[5px] rounded-[5px]">
          {question.topic_name}
        </div>

        {/* No of Answers Submitted */}
        <div className="flex items-center justify-center font-light bg-[rgba(230,230,230,1)] text-[12px] h-[24px] p-[5px] rounded-[5px]">
          {question.answers_submitted_by_user}/3
        </div>

        {/* Status */}
        <button className="flex justify-center items-center bg-[rgba(230,230,230,1)] text-[15px] w-[155px] h-[35px] rounded-[5px] ml-[20px]">
          {question.status}
        </button>
      </div>
    </div>
  );
}
