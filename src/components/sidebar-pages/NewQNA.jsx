import ReviewerAnalytics from "./new_qna_componennts/ReviewerAnalytics";
import ViewQNA from "./new_qna_componennts/ViewQNA";
import data from "../../../dummy_data/data";

export default function NewQNA() {
  const totalQuestions = data.length;
  // const totalAccepted = data.filter(q => q.status  );

  return (
    <div className="flex gap-[20px] justify-between ">
      <ViewQNA />
      <ReviewerAnalytics
      // totalQuestions={totalQuestions}
      // totalAccepted={totalAccepted}
      />
    </div>
  );
}
