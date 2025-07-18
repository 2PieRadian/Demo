import { Navigate, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/sidebar/SideBar";
import WelcomeBar from "./components/WelcomeBar";
import DashBoard from "./components/sidebar-pages/DashBoard";
import ReviewedQNA from "./components/sidebar-pages/ReviewedQNA";
import Notification from "./components/sidebar-pages/Notification";
import NewQNA from "./components/sidebar-pages/NewQNA";

function App() {
  return (
    <div className="font-public-sans select-none">
      <NavigationBar />
      <WelcomeBar />

      <div className="flex">
        <SideBar />

        <div className="p-[20px] w-full">
          <Routes>
            <Route path="/" element={<Navigate to="new_qna" />} />

            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/new_qna" element={<NewQNA />} />
            <Route path="/reviewed_qna" element={<ReviewedQNA />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
