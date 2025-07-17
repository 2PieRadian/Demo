import Profile from "./Profile";
import SidebarNotificationIcon from "../../icons/sidebar-icons/SidebarNotificationIcon";
import DashBoardIcon from "../../icons/sidebar-icons/DashBoardIcon";
import PageIcon from "../../icons/sidebar-icons/PageIcon";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="w-[265px] flex flex-col gap-[20px] px-[25px]">
      <Profile />

      {/* Line */}
      <div className="h-[1px] bg-[#bebebe]"></div>

      <NavLink to="dashboard">
        <DashBoardIcon size={35} />
        <p>Dashboard</p>
      </NavLink>

      <NavLink to="notification">
        <SidebarNotificationIcon size={35} />
        <p>Notification</p>
      </NavLink>

      <NavLink to="view_qna">
        <PageIcon size={35} />
        <p>View Q&A</p>
      </NavLink>

      <NavLink to="reviewed_qna">
        <PageIcon size={35} />
        <p>Reviewed Q&A</p>
      </NavLink>
    </div>
  );
}
