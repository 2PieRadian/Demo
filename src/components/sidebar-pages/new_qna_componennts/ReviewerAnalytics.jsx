import Line from "../../Line";
import data from "../../../../dummy_data/data";

export default function ReviewerAnalytics() {
  const totalQuestions = data.length;
  const totalAccepted = data.filter((q) => q.approved === "Accepted").length;
  const totalRejected = data.filter(
    (q) => q.approved === "Not Approved"
  ).length;
  const totalInPending = data.filter(
    (q) => q.approved === "In Progress"
  ).length;

  return (
    <div className="flex flex-col dark:text-white dark:border-gray-500 gap-[20px] w-[280px] p-[30px] border border-gray-300 rounded-[8px]">
      <h1 className="text-[20px]">Reviewer Analytics</h1>
      <Line />

      <h2 className="text-[16px]">Total Reviewed</h2>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total Questions
        </p>
        <p className="text-[20px]">{totalQuestions}</p>
      </div>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total Accepted
        </p>
        <p className="text-[20px]">{totalAccepted}</p>
      </div>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total Rejected
        </p>
        <p className="text-[20px]">{totalRejected}</p>
      </div>

      <Line />

      <h2>All in Review</h2>

      <div>
        <p className="text-[14px] dark:text-gray-300 text-gray-500 font-light">
          Total in Pending
        </p>
        <p className="text-[20px]">{totalInPending}</p>
      </div>
    </div>
  );
}
