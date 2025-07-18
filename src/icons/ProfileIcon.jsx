import { LayoutDashboard, LogOut } from "lucide-react";
import { useState } from "react";

function ProfileHoverCard() {
  return (
    <div className="absolute top-[50px] dark:bg-gray-900 dark:text-white text-gray-700 right-[0] rounded-[7px] shadow-[0px_0px_30px_0px_#9e9e9e] flex flex-col bg-white w-[300px]">
      <div className="flex items-center gap-[20px] rounded-[7px] p-[20px] hover:bg-gray-100">
        <LayoutDashboard size={25} />
        <p className="text-[16px]">Dashboard</p>
      </div>

      <div className="flex items-center gap-[20px] rounded-[7px] p-[20px] hover:bg-gray-100">
        <LogOut size={25} />
        <p className="text-[16px]">Logout</p>
      </div>
    </div>
  );
}

export default function ProfileIcon({ size }) {
  const [openProfileCard, setOpenProfileCard] = useState(false);

  function handleProfileClick() {
    setOpenProfileCard((prev) => !prev);
  }

  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={handleProfileClick}
      className="relative"
    >
      <img
        style={{ width: size * 2, borderRadius: "100%" }}
        src="../../public/images/pfp.jpg"
        alt="Hey"
      />

      {openProfileCard && <ProfileHoverCard />}
    </div>
  );
}
