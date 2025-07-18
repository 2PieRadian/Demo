import Line from "../../Line";

export default function ReviewerAnalytics() {
  return (
    <div className="flex flex-col dark:text-white dark:border-gray-500 gap-[20px] w-[280px] p-[30px] border border-gray-300 rounded-[8px]">
      <h1 className="text-[20px]">Reviewer Analytics</h1>
      <Line />

      <h2 className="text-[16px]">Total Reviewed</h2>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total Questions
        </p>
        <p className="text-[20px]">60</p>
      </div>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total Accepted
        </p>
        <p className="text-[20px]">40</p>
      </div>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total Rejected
        </p>
        <p className="text-[20px]">20</p>
      </div>

      <Line />

      <h2>All in Review</h2>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total in Pending
        </p>
        <p className="text-[20px]">60</p>
      </div>
    </div>
  );
}
