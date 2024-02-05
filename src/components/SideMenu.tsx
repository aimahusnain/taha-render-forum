import SideLinks from "./SideLinks";

const SideBar = () => {
  return (
    <div className="flex-none w-1/4 bg-white border border-zinc-400 fixed h-screen overflow-auto pt-20 bottom-0 px-8">
      <div className="p-4 flex flex-col gap-2 font-semibold text-lg">
       <SideLinks />
      </div>
    </div>
  );
};

export default SideBar;
