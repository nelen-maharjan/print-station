'use client';

import { HandHeart, Home, Info, Menu, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
    return (
        <div className="relative z-30">
            <div className="bg-white px-12 py-3 shadow-md flex justify-between fixed top-0 right-0 left-0">
                <div className="text-red-800 md:text-lg text-base cursor-pointer"><span className="text-blue-800">Print Station</span> Nepal</div>
                <div className="hidden md:flex space-x-12 cursor-pointer list-none text-gray-700 text-base">
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/services'><li>Services</li></Link>
                    <Link href='/about-us'><li>About Us</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </div>
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger><Menu size={25} /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <Link href='/'><DropdownMenuItem><Home size={15} /> Home</DropdownMenuItem></Link>
                            <Link href='/services'><DropdownMenuItem><HandHeart size={15} /> Services</DropdownMenuItem></Link>
                            <Link href='/about-us'><DropdownMenuItem><Info size={15} />About Us</DropdownMenuItem></Link>
                            <Link href='/contact'><DropdownMenuItem><MessageCircle size={15} />Contact</DropdownMenuItem></Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
