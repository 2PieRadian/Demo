import Profile from "./Profile";
import SidebarButtons from "./SidebarButtons";

export default function SideBar() {
  return (
    <div className="w-[265px] dark:bg-[#1d1d1d] dark:text-white h-[calc(100vh-74px-77.5px)] flex flex-col gap-[20px] border dark:border-gray-700 border-gray-300 px-[25px] font-light text-gray-500 py-[20px]">
      <Profile />

      <SidebarButtons />
    </div>
  );
}
