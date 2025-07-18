import { useState } from "react";
import { options } from "../../../../constants/constants";
import { ChevronDown } from "lucide-react";

export default function SelectTopic({ filterByTopicName }) {
  const [selectedOption, setSelectedOption] = useState("Select a Topic");
  const [isOpen, setIsOpen] = useState(false);

  function Option({ value }) {
    return (
      <div
        className="px-[15px] py-[5px] hover:bg-gray-100 rounded-[6px]"
        onClick={(e) => handleSelectTopic(e, value)}
      >
        {value}
      </div>
    );
  }

  function handleSelectTopic(e, value) {
    e.stopPropagation();
    setSelectedOption(value);
    filterByTopicName(value);
    setIsOpen(false);
  }

  return (
    <div
      className="relative flex items-center transition-all bg-[rgba(230,230,230,1)] rounded-[5px] pr-[15px] cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <input
        type="text"
        readOnly={true}
        value={selectedOption}
        className="bg-[rgba(230,230,230,1)] w-full outline-none rounded-[5px] border-none text-[16px] font-light placeholder:text-gray-800 text-black py-[9px] px-[15px] cursor-pointer"
      />

      <ChevronDown size={20} />

      {isOpen && (
        <div className="flex flex-col shadow-[0px_0px_3px_1px_rgba(0,_0,_0,_0.1)] text-gray-500 absolute top-[50px] font-light rounded-[6px] z-10 bg-white  p-[5px]">
          {options.map((option) => (
            <Option key={option} value={option} />
          ))}
        </div>
      )}
    </div>
  );
}
