'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white px-12 py-3 shadow-md flex justify-between ">
      <div className="text-red-800 md:text-lg text-base cursor-pointer">
        <span className="text-blue-800">Print Station</span> Nepal
      </div>
      <div className="hidden md:flex space-x-12 cursor-pointer list-none text-gray-700 text-base">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/about-us">
          <li>About Us</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </div>
      <div className="md:hidden">
        <Menu
          size={25}
          onClick={() => setShowMenu(true)}
          className="cursor-pointer"
        />
        {showMenu && <>
          <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </>}
      </div>
    </div>
  );
};

export default Navbar;
