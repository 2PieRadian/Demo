import { NavLink } from "react-router-dom";
import DashBoardIcon from "../../icons/sidebar-icons/DashBoardIcon";
import SidebarNotificationIcon from "../../icons/sidebar-icons/SidebarNotificationIcon";
import PageIcon from "../../icons/sidebar-icons/PageIcon";
import Line from "../Line";

function MyLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-start gap-[20px] ml-[-3px] ${
          isActive
            ? "bg-gray-100 text-black dark:text-white"
            : "text-gray-500 dark:text-gray-400"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function SidebarButtons() {
  return (
    <>
      <Line />

      <p className="text-[14px]">Management</p>
      <MyLink to="dashboard">
        <DashBoardIcon size={28} />
        <p className="">Dashboard</p>
      </MyLink>

      <MyLink to="notification">
        <SidebarNotificationIcon size={28} />
        <p>Notification</p>
      </MyLink>

      <Line />

      <p className="text-[14px]">Review Answers</p>
      <MyLink to="new_qna">
        <PageIcon size={28} />
        <p>New Q&A</p>
      </MyLink>

      <MyLink to="reviewed_qna">
        <PageIcon size={28} />
        <p>Reviewed Q&A</p>
      </MyLink>
    </>
  );
}
