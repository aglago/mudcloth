"use client";

import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "About Us", href: "#" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50 bg-linear-to-b from-black/70 to-transparent">
      <div className="lg:w-[calc(100vw-96px)] mx-auto px-8 md:px-12 lg:px-16 py-6 flex items-center justify-between text-white">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" height={100} width={100} alt="Logo" className="-ml-5 lg:-ml-8" />
          <h1 className="hidden lg:block font-bold text-lg md:text-xl tracking-widest uppercase whitespace-nowrap">
            African
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Info (Visible on Extra Large Screens) */}
        <div className="hidden xl:flex items-center gap-6 text-xs">
          <Link href="tel:233509581027" className="flex items-center gap-2">
            <Phone size={14} className="text-primary" /> +233 50 958 1027
          </Link>
          <Link href="mailto:work.smaglago@gmail.com" className="flex items-center gap-2">
            <Mail size={14} className="text-primary" /> work.samuella@gmail.com
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full inset-x-4 bg-background backdrop-blur-md border-t border-white/10 py-8 px-8 flex flex-col gap-8 shadow-2xl animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-semibold hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col gap-5 text-sm">
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Phone size={18} className="text-primary" />
              </div>
              <span>+233 50 958 1027</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/20 p-2 rounded-full">
                <Mail size={18} className="text-primary" />
              </div>
              <span className="break-all">work.samuella@gmail.com</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
