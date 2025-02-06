import { Home, Settings, FileText, Waves } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Logout } from './Logout';

const Sidebar = () => {
  const sidebarItems = [
    { title: 'Home', route: '/home', icon: <Home size={20} /> },
    { title: 'Services', route: '/services', icon: <FileText size={20} /> },
    { title: 'Settings', route: '/settings', icon: <Settings size={20} /> },
    {title: <Logout/> , route: '/', icon: <Waves size={20} />},
  ];

  return (
    <aside className="w-56 border-r-2 border-gray-300 bg-gradient-to-b from-white to-gray-100 shadow-md">
      <div className="h-12 flex items-center justify-center border-b-2 border-gray-300">
        <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
      </div>
      <ul>
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center h-16 pl-6 cursor-pointer hover:bg-gray-100"
          >
            <Link className="flex items-center space-x-4" href={item.route}>
              {item.icon}
              <span className="text-md font-medium">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
