import { Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, whatsappLink } from "../data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#6E0F18]/10 bg-[#FFF8EE]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <a href="#home" className="shrink-0">
          <img src="/images/logo.png" alt="Bhanwar Papad Udyog logo" className="h-14 w-auto sm:h-16" />
        </a>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-stone-700 transition-colors hover:text-[#6E0F18]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden bg-[#6E0F18] hover:bg-[#560B13] md:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-4 w-4" /> Get Enquiry
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-[#FFF8EE]">
              <SheetHeader>
                <SheetTitle className="font-serif text-[#6E0F18]">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-5 px-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <a href={link.href} className="text-lg font-medium text-stone-800">
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <Button asChild className="mt-2 bg-[#6E0F18] hover:bg-[#560B13]">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="h-4 w-4" /> Get Enquiry
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}