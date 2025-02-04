'use client';

import {
  FacebookIcon,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <>
      <footer className="bg-[#FBF4F4] px-6">
        <div className="max-w-6xl mx-auto flex sm:flex-col justify-evenly">
          <div className="grid  grid-cols-2 gap-8 pb-4 border-b border-black/40 pt-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <div className="gap-x-4 flex flex-col sm:flex-row justify-center items-center ">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About Us
                </Link>
                <span className="hidden sm:block">|</span>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact
                </Link>
                <span className="hidden sm:block">|</span>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Service
                </Link>
                <span className="hidden sm:block">|</span>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Product
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Follow Us on</h3>
              <div className="gap-4 flex justify-center items-center flex-col sm:flex-row">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <FacebookIcon size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="py-4 text-left sm:text-center justify-center gap-4 flex flex-col sm:flex-row items-center  text-gray-600">
            <p className="flex items-center gap-2">
              <MapPin size={15} />
              <span>Kathmandu, Nepal</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={15} />
              <span>mail@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={15} />
              <span>+977 9812345679</span>
            </p>
          </div>
        </div>
      </footer>
      <p className="text-sm text-center mt-4 bg-white text-gray-600 py-2">
        © {new Date().getFullYear()} Print Station Nepal | All Rights Reserved
      </p>
    </>
  );
}

export default Footer;
