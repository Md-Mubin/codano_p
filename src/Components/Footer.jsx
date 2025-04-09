"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { RiShareLine } from "react-icons/ri"
import { LuFacebook, LuLinkedin, LuInstagram, LuTwitter } from "react-icons/lu"
import { useLanguage } from '../../public/contexts/LanguageContext'
import axios from 'axios'

const Footer = () => {

    const {t} = useLanguage()

    const [email, setEmail] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await axios.post("https://testserver1-stww.onrender.com/api/v1/emailSubscribers",{email})
        setEmail("")
    }

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
                            <p>{t.footer?.footerInfo}</p>
                            <span className='mt-4 flex gap-8 items-center text-2xl'>
                                <LuFacebook />
                                <LuInstagram />
                                <LuTwitter />
                                <LuLinkedin />
                            </span>
                        </li>

                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>{t.footer?.footerCom}</h3>
                            <Link href="#">{t.footer?.footerAbt}</Link>
                            <Link href="#">{t.footer?.footerTeam}</Link>
                            <Link href="#">{t.footer?.footerCareers}</Link>
                            <Link href="#">{t.footer?.footerContact}</Link>
                        </li>

                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>{t.footer?.footerSer}</h3>
                            <Link href="#">{t.footer?.footerWeb}</Link>
                            <Link href="#">{t.footer?.footerApp}</Link>
                            <Link href="#">{t.footer?.footerUi}</Link>
                            <Link href="#">{t.footer?.footerDigital}</Link>
                        </li>

                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>{t.footer?.footerSubscribe}</h3>
                            <p>{t.footer?.footerSubInfo}</p>

                            {/* email subscibe form */}
                            <form onSubmit={handleSubmit} className='flex items-center gap-4'>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className='w-[250px] pl-2 py-1 outline-none ring-2 ring-[#888888] rounded-sm' placeholder={t.footer?.footerEmailPlcae} />
                                <button className='px-6 py-2 hover:bg-blue-100 duration-200 rounded-xl cursor-pointer'>{t.footer?.footerBtn}</button>
                            </form>
                        </li>
                    </ul>

                    <ul className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between pt-10 border-t tracking-widest text-lg'>
                        <li>
                           {t.footer?.footerRights}
                        </li>

                        <li className='flex gap-6'>
                            <a href="#" className='hover:translate-y-[-2px] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02]'>{t.footer?.footerPolicy}</a>
                            <a href="#" className='hover:translate-y-[-2px] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02]'>{t.footer?.footerTerms}</a>
                            <a href="#" className='hover:translate-y-[-2px] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02]'>{t.footer?.footerImprint}</a>
                        </li>
                    </ul>
                </div>
            </footer>
            {/* ================== Footer Part End ================== */}
        </>
    )
}

export default Footer