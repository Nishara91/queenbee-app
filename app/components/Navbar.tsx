"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-50 text-gray-900 py-4 px-6 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Brand / Logo (Digital Marketing කෑල්ල එකතු කළා) */}
                <Link href="#home" className="flex flex-col justify-center">
                    <span className="text-2xl font-extrabold tracking-tight leading-none">
                        Queen<span className="text-yellow-500">Bee</span>
                    </span>
                    <span className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mt-1">
                        Digital Marketing
                    </span>
                </Link>

                {/* Desktop Menu Links */}
                <div className="hidden md:flex items-center space-x-8 font-semibold text-sm">
                    <Link href="#home" className="hover:text-yellow-500 transition-colors">Home</Link>
                    <Link href="#services" className="hover:text-yellow-500 transition-colors">Services</Link>
                    <Link href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</Link>
                    <Link href="#contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
                </div>

                {/* Desktop Right Side (WhatsApp + Button) */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* WhatsApp Link in Header */}
                    <a href="https://wa.me/94766620226" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold text-gray-700 hover:text-green-600 transition-colors group">
                        <svg className="w-5 h-5 mr-2 text-green-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        +94 76 662 0226
                    </a>
                    
                    <Link href="#contact" className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-500 hover:text-gray-900 transition-all shadow-md">
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
                        <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Services</Link>
                        <Link href="#portfolio" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Portfolio</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-500">Contact</Link>
                        
                        <div className="pt-2 flex flex-col space-y-3 items-center">
                            <a href="https://wa.me/94766620226" className="text-green-600 flex items-center justify-center bg-green-50 w-full py-2 rounded-lg">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}