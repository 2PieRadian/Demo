export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center gap-[18px] pt-[20px]">
      <img
        className="rounded-full w-[77px]"
        src="../../../public/images/pfp.jpg"
        alt="Profile Photo"
      />

      <div className="flex flex-col items-center justify-center">
        <p>User Name</p>
        <p className="text-gray-500 font-light">Role: Reviewer</p>
      </div>
    </div>
  );
}
