import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import SideLinks from "./SideLinks";

const MobileSideMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SideLinks />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideMenu;