import { useState } from "react";
import dummy_data from "../../../../dummy_data/data";
import Line from "../../Line";

export default function ViewQNA() {
  const [data, setData] = useState(dummy_data);

  return (
    <div className="w-full h-full flex flex-col gap-[20px] border border-gray-300 p-[30px] rounded-[8px]">
      <h1 className="text-[20px]">View Q&A</h1>

      <Line />

      <input
        type="text"
        className="bg-[rgba(230,230,230,1)] w-full outline-none border-none text-[16px] font-light placeholder:text-gray-800 text-gray-800 py-[9px] px-[15px] rounded-[5px]"
        placeholder="Search"
        autoComplete="off"
      />
    </div>
  );
}
