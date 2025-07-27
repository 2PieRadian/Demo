import { useParams } from "react-router-dom";

import TopGradientBar from "./components/TopGradientBar";
import TopNavigationPanel from "./components/TopNavigationPanel";

export default function DraftPage() {
  const { id } = useParams();

  return (
    <div className="">
      <TopGradientBar />
      <TopNavigationPanel />
    </div>
  );
}
