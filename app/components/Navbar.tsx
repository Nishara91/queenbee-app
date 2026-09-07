"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-50 text-gray-900 py-4 px-6 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Brand / Logo (Digital Marketing එක්ක) */}
                <Link href="#home" className="flex flex-col justify-center">
                    <span className="text-2xl font-extrabold tracking-tight leading-none">
                        Queen<span className="text-yellow-500">Bee</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mt-1">
                        Digital Marketing
                    </span>
                </Link>

                {/* Desktop Menu Links (පරතරය වැඩි කරලා, නම් වෙනස් කළා) */}
                <div className="hidden md:flex items-center space-x-10 font-bold text-sm tracking-wide text-gray-700">
                    <Link href="#home" className="hover:text-yellow-500 transition-colors">Home</Link>
                    <Link href="#services" className="hover:text-yellow-500 transition-colors">What We Do</Link>
                    <Link href="#portfolio" className="hover:text-yellow-500 transition-colors">Our Work</Link>
                    <Link href="#contact" className="hover:text-yellow-500 transition-colors">Contact Us</Link>
                </div>

                {/* Desktop Right Side (Get a Quote බට්න් එක) */}
                <div className="hidden md:flex items-center">
                    <Link href="#contact" className="bg-gray-900 text-white px-7 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-500 hover:text-gray-900 transition-all shadow-md">
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button className="md:hidden text-gray-900 p-2" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden pt-4 pb-4 border-t mt-4 border-gray-200">
                    <div className="flex flex-col space-y-4 text-sm font-bold text-gray-800 text-center">
                        <Link href="#home" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Home</Link>
                        <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">What We Do</Link>
                        <Link href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Our Work</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Contact Us</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}