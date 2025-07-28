import { useParams } from "react-router-dom";

import TopGradientBar from "./components/TopGradientBar";
import TopNavigationPanel from "./components/TopNavigationPanel";
import Section from "./components/Section";
import questions from "../../../dummy_data/data";

// Context
import QuestionContext from "./QuestionContext";

export default function DraftPage() {
  const { id } = useParams();
  const question = questions.filter((q) => q.id === Number(id));

  return (
    <div>
      <TopGradientBar />

      <QuestionContext.Provider value={question[0]}>
        <TopNavigationPanel />
        <Section />
      </QuestionContext.Provider>
    </div>
  );
}
