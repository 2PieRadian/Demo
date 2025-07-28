import StarRating from "../../../components/StarRating";

function RatingWithFactor({ factor }) {
  return (
    <div className="flex items-center gap-[20px]">
      <StarRating maxRating={5} size={30} defaultRating={0} />
      <p className="text-[17px] font-light">{factor}</p>
    </div>
  );
}

export default function ProvideRating() {
  const factors = [
    "Relevance",
    "Accuracy",
    "Clarity and Structure",
    "Depth and Understanding",
    "Presentation and Language",
  ];

  return (
    <div className="bg-[#fff] p-[30px] rounded-[10px]">
      {/* Header */}
      <div className="flex items-center justify-between text-[18px]">
        <h1>Provide the Ratings</h1>
        <div className="text-[23px] flex items-center gap-[5px]">
          <StarRating maxRating={1} defaultRating={1} fixed={true} size={35} />
          3.5
        </div>
      </div>

      {/* Star Rating Components */}
      <div className="flex flex-col gap-[10px] mt-[25px]">
        {factors.map((factor) => (
          <RatingWithFactor factor={factor} />
        ))}
      </div>
    </div>
  );
}
