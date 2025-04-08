"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiShareLine } from "react-icons/ri"

const Navbar = () => {

    // all hooks 
    const [scrolling, setScrolling] = useState(false) // for scrolling nav effect

    // useEffect for handleing the scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        handleScroll()

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`p-6 sticky top-0 backdrop-blur-sm ${scrolling ? "shadow-sm" : "shadow-none"}`}>
                <div className="container">
                    <ul className="flex items-center justify-between">
                        <li className="text-xl font-bold flex items-center gap-2 tracking-widest">
                            <RiShareLine className='text-3xl'/>Codaro
                        </li>
                        <li className="flex gap-10 font-medium">
                            <Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">Home</Link>
                            <Link href="#services" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">Services</Link>
                            <Link href="#process" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">Process</Link>
                            <Link href="#work" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">Portfolio</Link>
                            <Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">Testimonials</Link>
                            <Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">About</Link>
                            <Link href="#contact" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">Contact</Link>
                        </li>
                        <li className="flex border rounded-full border-[rgba(231,206,152,0.8)] overflow-hidden">
                            <button className='px-3 hover:bg-[#f5f1e4] border-[#000] cursor-pointer'>DE</button>
                            <button className='px-3 hover:bg-[#f5f1e4] border-[#000] cursor-pointer'>EN</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar