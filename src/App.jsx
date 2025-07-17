import { Navigate, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/sidebar/SideBar";
import WelcomeBar from "./components/WelcomeBar";
import ViewQNA from "./components/sidebar-pages/ViewQNA";
import DashBoard from "./components/sidebar-pages/DashBoard";
import ReviewedQNA from "./components/sidebar-pages/ReviewedQNA";
import Notification from "./components/sidebar-pages/Notification";

function App() {
  return (
    <div className="font-public-sans">
      <NavigationBar />
      <WelcomeBar />

      <div className="flex">
        <SideBar />

        <Routes>
          <Route path="/" element={<Navigate to="view_qna" />} />

          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/view_qna" element={<ViewQNA />} />
          <Route path="/reviewed_qna" element={<ReviewedQNA />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
