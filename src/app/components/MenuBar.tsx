"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const MenuBar = () => {
  return (
    <Sheet>
      {/* Mobile Menu Button */}
      <SheetTrigger asChild>
        <button className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </SheetTrigger>

      {/* Mobile Menu Content */}
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-black text-xl font-bold text-center">
            Menu
          </SheetTitle>
        </SheetHeader>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col justify-center items-center space-y-6 text-lg text-black mt-6">
          <li>
            <Link href={"#"} className="hover:text-red-500 transition">
              About Me
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-red-500 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-red-500 transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <Button className="bg-black text-lg text-white hover:text-black hover:bg-red-400 active:bg-red-400 active:opacity-50 transition-all duration-200">
                Contact Us
              </Button>
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MenuBar;
