'use client';
import { Home, Settings, FileText, Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Logout } from './Logout';

const Sidebar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false); 

  const toggleSidebar = () => setDropdownMenu(!dropdownMenu);

  const handleLinkClick = () => {
    setDropdownMenu(false); 
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-56 lg:flex-col lg:fixed lg:left-0 lg:top-0 lg:h-full border-r-2 border-gray-300 bg-gradient-to-b from-white to-gray-100 shadow-md mt-16">
        <div className="h-12 flex items-center justify-center border-b-2 border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <ul>
          <li className="flex items-center h-16 pl-6 cursor-pointer hover:bg-gray-100">
            <Link className="flex items-center space-x-4" href="/dashboard">
              <Home size={20} />
              <span className="text-md font-medium">Home</span>
            </Link>
          </li>

          <li className="flex items-center h-16 pl-6 cursor-pointer hover:bg-gray-100">
            <Link className="flex items-center space-x-4" href="/dashboard/my-services">
              <FileText size={20} />
              <span className="text-md font-medium">Services</span>
            </Link>
          </li>

          <li className="flex items-center h-16 pl-6 cursor-pointer hover:bg-gray-100">
            <Link className="flex items-center space-x-4" href="/dashboard/settings">
              <Settings size={20} />
              <span className="text-md font-medium">Settings</span>
            </Link>
          </li>

          <li className="flex items-center h-16 pl-6 cursor-pointer hover:bg-gray-100">
            <Link className="flex items-center space-x-4" href="/sign-in">
              <span className="text-md font-medium">
                <Logout />
              </span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden flex flex-col fixed top-0 left-0 w-full bg-white shadow-xl z-30">
        <div className="flex justify-between items-center px-6 py-3 bg-blue-500 text-white">
          <h2 className="text-2xl font-semibold">Admin Panel</h2>
          <Menu
            size={24}
            className="cursor-pointer"
            onClick={toggleSidebar} 
          />
        </div>

        {/* Mobile Sidebar Dropdown */}
        {dropdownMenu && (
          <div className="flex flex-col p-4 space-y-4 bg-gray-100">
            <Link href="/dashboard" className="flex items-center space-x-4" onClick={handleLinkClick}>
              <Home size={20} />
              <span className="text-md font-medium">Home</span>
            </Link>
            <Link href="/dashboard/my-services" className="flex items-center space-x-4" onClick={handleLinkClick}>
              <FileText size={20} />
              <span className="text-md font-medium">Services</span>
            </Link>
            <Link href="/dashboard/settings" className="flex items-center space-x-4" onClick={handleLinkClick}>
              <Settings size={20} />
              <span className="text-md font-medium">Settings</span>
            </Link>
            <Link href="/sign-in" className="flex items-center space-x-4" onClick={handleLinkClick}>
              <span className="text-md font-medium">
                <Logout />
              </span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
