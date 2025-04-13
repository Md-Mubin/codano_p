"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiShareLine } from "react-icons/ri"
import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2"
import { useLanguage } from '../../public/contexts/LanguageContext'

const Navbar = () => {

    // all hooks 
    const [scrolling, setScrolling] = useState(false) // for scrolling nav effect
    const [nav, setNav] = useState(false)
    const { t, language, changeLanguage } = useLanguage()

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
            {/* ================== Navbar Part Start ================== */}
            <nav className={`p-6 sticky top-0 backdrop-blur-sm tracking-widest ${scrolling ? "shadow-sm" : "shadow-none"}`}>
                <div className="container">

                    {/* main navbar (from lg to upper device)*/}
                    <ul className="items-center justify-between hidden lg:flex">

                        {/* nav logo */}
                        <li className="text-xl font-bold flex items-center gap-2 tracking-widest">
                            <RiShareLine className='text-3xl' />Codaro
                        </li>

                        {/* nav items/links */}
                        <li className="flex gap-10 font-medium">
                            <Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.home}</Link>
                            <Link href="#services" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.services}</Link>
                            <Link href="#process" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.process}</Link>
                            <Link href="#work" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.portfolio}</Link>
                            <Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.about}</Link>
                            <Link href="#contact" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.contact}</Link>
                        </li>

                        {/* language changing */}
                        <li className="flex border rounded-md border-[rgba(231,206,152,0.8)] overflow-hidden">
                            <button onClick={() => changeLanguage("de")} className={`px-3 hover:bg-[#fcfaf6] border-[#000] cursor-pointer ${language === "de" ? "bg-[#f5f1e4]" : "bg-none"}`}>DE</button>
                            <button onClick={() => changeLanguage("en")} className={`px-3 hover:bg-[#fcfaf6] border-[#000] cursor-pointer ${language === "en" ? "bg-[#f5f1e4]" : "bg-none"}`}>EN</button>
                        </li>
                    </ul>

                    {/* responsive navbar(xsm to lg device) */}
                    <ul className="flex items-center justify-between lg:hidden relative">
                        <li className="text-xl font-bold flex items-center gap-2 tracking-widest">
                            <RiShareLine className='text-3xl' />Codaro
                        </li>

                        <li className='flex items-start gap-6'>

                            {/* language changing */}
                            <div className="flex border rounded-md border-[rgba(231,206,152,0.8)] overflow-hidden">
                                <button onClick={() => changeLanguage("de")} className={`px-3 hover:bg-[#fcfaf6] border-[#000] cursor-pointer ${language === "de" ? "bg-[#f5f1e4]" : "bg-none"}`}>DE</button>
                                <button onClick={() => changeLanguage("en")} className={`px-3 hover:bg-[#fcfaf6] border-[#000] cursor-pointer ${language === "en" ? "bg-[#f5f1e4]" : "bg-none"}`}>EN</button>
                            </div>

                            {/* res-nav icon bar */}
                            <button onClick={() => setNav(!nav)} className='text-4xl'>
                                {
                                    nav ? <HiBarsArrowUp /> : <HiBarsArrowDown />
                                }
                            </button>
                        </li>

                    </ul>

                    {/* nav items/links */}
                    <div className={`flex-col gap-4 font-medium text-xl backdrop-blur-sm mt-6 text-end duration-200 ${nav ? "flex" : "hidden"}`}>
                        <Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.home}</Link>
                        <Link href="#services" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.services}</Link>
                        <Link href="#process" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.process}</Link>
                        <Link href="#work" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.portfolio}</Link>
                        <Link href="#" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.about}</Link>
                        <Link href="#contact" className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#000] after:left-0 after:bottom-0 hover:after:w-full after:duration-200">{t.navbar?.contact}</Link>
                    </div>
                </div>
            </nav>
            {/* ================== Navbar Part End ================== */}
        </>
    )
}

export default Navbar