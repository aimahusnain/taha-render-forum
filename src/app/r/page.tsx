import React from "react";
import Communities from "@/src/components/Communites";
import SideBar from "@/src/components/SideMenu";

const r = () => {
  return (
    <div className="flex">
      <div className="flex-none w-1/4 md:block hidden">
        <SideBar />
      </div>
      <div className="mt-7 w-full mx-6 mr-5">
        <Communities />
      </div>
    </div>
  );
};

export default r;
