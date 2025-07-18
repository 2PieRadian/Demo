import { Info } from "lucide-react";
import HoverInfo from "./HoverInfo";
import { useState } from "react";

export default function Question({ question }) {
  const [openToolTip, setOpenToolTip] = useState(false);

  function handleHover() {
    setOpenToolTip(true);
  }

  function handleHoverGone() {
    setOpenToolTip(false);
  }

  return (
    <div className="flex justify-between items-start">
      {/* Left */}
      <div className="flex gap-[10px]">
        {/* Question Number */}
        <div>{question.id}.</div>

        {/* Question Text */}
        <div className="flex-1">{question.content}</div>

        {/* Topic Name */}
        <div className="flex items-center dark:bg-gray-700 dark:text-gray-400 justify-center font-light bg-[rgba(230,230,230,1)] text-[12px] h-[24px] p-[5px] rounded-[5px]">
          {question.topic_name}
        </div>

        {/* No of Answers Submitted */}
        <div className="flex dark:bg-gray-700 w-[60px] dark:text-gray-400 items-center relative justify-center gap-[5px] font-light bg-[rgba(230,230,230,1)] text-[14px] h-[24px] p-[5px] rounded-[5px]">
          <div>{question.answers_submitted_by_user}/3</div>
          <Info
            size={15}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverGone}
          />

          {openToolTip && <HoverInfo />}
        </div>

        {/* Status */}
        <button className="flex justify-center dark:text-black cursor-pointer items-center bg-[rgba(230,230,230,1)] text-[15px] w-[155px] h-[35px] rounded-[5px] ml-[20px]">
          {question.status}
        </button>
      </div>
    </div>
  );
}
