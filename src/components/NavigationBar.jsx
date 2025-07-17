import YESIcon from "../icons/YESIcon";
import FilterIcon from "../icons/FilterIcon";
import DarkModeIcon from "../icons/DarkModeIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import ProfileIcon from "../icons/ProfileIcon";

export default function NavigationBar() {
  return (
    <div className="flex dark:bg-[#262626] dark:text-white text-black items-center h-[74px] gap-[10px] justify-between py-[20px] px-[25px]">
      <div className="flex items-center ">
        <FilterIcon />
        <YESIcon />
      </div>

      <div className="flex gap-[20px] items-center">
        <DarkModeIcon />
        <NotificationsIcon />
        <ProfileIcon size={21} />
      </div>
    </div>
  );
}
