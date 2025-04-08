import Link from 'next/link'
import React from 'react'
import { RiShareLine } from "react-icons/ri"
import { LuFacebook, LuLinkedin, LuInstagram, LuTwitter } from "react-icons/lu"

const Footer = () => {
    return (
        <>
            {/* ================== Footer Part Start ================== */}
            <footer className='py-20 border-t-1 border-[#999999]'>
                <div className="container">
                    <ul className='flex flex-wrap lg:flex-nowrap justify-between pb-10 gap-10 lg:gap-4'>
                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>
                            <h2 className='flex items-center gap-2 font-bold text-2xl tracking-widest'>
                                <RiShareLine className='text-4xl' />Codaro
                            </h2>
                            <p>We are an award-winning digital agency creating innovative solutions for modern businesses.</p>
                            <span className='mt-4 flex gap-8 items-center text-2xl'>
                                <LuFacebook />
                                <LuInstagram />
                                <LuTwitter />
                                <LuLinkedin />
                            </span>
                        </li>

                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>Company</h3>
                            <Link href="#">About Us</Link>
                            <Link href="#">Team</Link>
                            <Link href="#">Careers</Link>
                            <Link href="#">Contact</Link>
                        </li>

                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>Services</h3>
                            <Link href="#">Web Development</Link>
                            <Link href="#">App Development</Link>
                            <Link href="#">UI/UX Design</Link>
                            <Link href="#">Digital Marketing</Link>
                        </li>

                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>Subscribe to our newsletter</h3>
                            <p>Get the latest updates and offers</p>
                            <span className='flex items-center gap-4'>
                                <input type="text" className='w-[250px] pl-2 py-1 outline-none ring-2 ring-[#888888] rounded-sm' placeholder='Your Email Address' />
                                <button className='px-6 py-2 hover:bg-blue-100 duration-200 rounded-xl cursor-pointer'>Subscribe</button>
                            </span>
                        </li>
                    </ul>

                    <ul className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between pt-10 border-t tracking-widest text-lg'>
                        <li>
                            © 2024 Codaro. All rights reserved.
                        </li>

                        <li className='flex gap-6'>
                            <a href="#" className='hover:translate-y-[-2px] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02]'>Privacy Policy</a>
                            <a href="#" className='hover:translate-y-[-2px] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02]'>Terms of Service</a>
                            <a href="#" className='hover:translate-y-[-2px] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02]'>Imprint</a>
                        </li>
                    </ul>
                </div>
            </footer>
            {/* ================== Footer Part End ================== */}
        </>
    )
}

export default Footer