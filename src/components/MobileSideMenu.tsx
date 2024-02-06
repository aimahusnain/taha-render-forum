import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import SideLinks from "./SideLinks";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const MobileSideMenu = () => {
  return (
    <div className="sm:hidden visible">
      <Sheet>
        <SheetTrigger className="mx-4 hover:bg-slate-300 rounded-full">
          <HiMiniBars3CenterLeft />
        </SheetTrigger>
        <SheetContent side="left">
          <SideLinks />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideMenu;
