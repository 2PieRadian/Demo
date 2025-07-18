function Tag({ color, text }) {
  return <div className={`${color}`}>{text}</div>;
}

export default function Question({ question }) {
  let color;

  if (question.approved === "In Progress") {
    color = "bg-red-100 text-red-500";
  } else if (question.approved === "Accepted") {
    color = "bg-green-100 text-green-500";
  } else {
    color = "bg-yellow-100 text-yellow-500";
  }

  return (
    <div className="flex justify-between items-start">
      {/* Left */}
      <div className="flex gap-[10px]">
        {/* Question Number */}
        <div>{question.id}.</div>

        {/* Question Text */}
        <div className="flex-1">{question.content}</div>

        {/* Status*/}
        <div
          className={`flex items-center w-[100px] font-medium dark:bg-gray-700 dark:text-gray-400 justify-center ${color} text-[12px] h-[24px] p-[5px] rounded-[5px]`}
        >
          {question.approved}
        </div>

        {/* Status */}
        <button className="flex justify-center dark:text-black cursor-pointer items-center bg-[rgba(230,230,230,1)] text-[15px] w-[155px] h-[35px] rounded-[5px] ml-[20px]">
          {question.status}
        </button>
      </div>
    </div>
  );
}
