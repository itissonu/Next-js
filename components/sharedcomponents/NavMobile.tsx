import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import Image from "next/image"
import Navitems from "./Navitems"


const MobileNav = () => {
    return (
        <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <Image 
              src="/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
           <span className=" font-bold">Bookit.</span>
           
            <Navitems/>
          </SheetContent>
        </Sheet>
      </nav>
    )
}

export default MobileNav