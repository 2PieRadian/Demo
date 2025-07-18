import { Navigate, Route, Routes } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/sidebar/SideBar";
import WelcomeBar from "./components/WelcomeBar";
import DashBoard from "./components/sidebar-pages/DashBoard";
import ReviewedQNA from "./components/sidebar-pages/ReviewedQNA";
import Notification from "./components/sidebar-pages/Notification";
import NewQNA from "./components/sidebar-pages/NewQNA";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="font-public-sans select-none">
      <NavigationBar />
      <WelcomeBar />

      <div className="flex">
        {isSidebarOpen && <SideBar />}

        <div className="p-[20px] w-full dark:bg-[#1d1d1d]">
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
