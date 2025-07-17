import Profile from "./Profile";
import SidebarButtons from "./SidebarButtons";

export default function SideBar() {
  return (
    <div className="w-[265px] h-[calc(100vh-74px-77.5px)] flex flex-col gap-[20px] border border-gray-300 px-[25px] font-light text-gray-500 py-[20px]">
      <Profile />

      <SidebarButtons />
    </div>
  );
}
