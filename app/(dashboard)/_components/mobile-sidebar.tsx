import { Menu } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { Sidebar } from "./sidebar";

const ModileSidebar = () => {
  return ( 
    <Sheet>
      <SheetTrigger className="md:hidden p-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
    
  );
}
 
export default ModileSidebar;