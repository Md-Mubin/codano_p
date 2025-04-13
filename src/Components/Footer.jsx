"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { RiShareLine } from "react-icons/ri"
import { LuLinkedin } from "react-icons/lu"
import { useLanguage } from '../../public/contexts/LanguageContext'
import axios from 'axios'

const Footer = () => {

    const { t } = useLanguage()

    const [email, setEmail] = useState("")
    const [submiting, setSubmiting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmiting(true)
        await axios.post("https://testserver1-stww.onrender.com/api/v1/emailSubscribers", { email })
        setEmail("")
        setSubmiting(false)
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
                            <a href="#" className='mt-4 text-2xl hover:translate-y-[-4px] transition-transform duration-200 w-fit'>
                                <LuLinkedin />
                            </a>
                        </li>

                        <li className='w-[250px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>{t.footer?.footerSer}</h3>
                            <Link href="#">{t.footer?.footerWeb}</Link>
                            <Link href="#">{t.footer?.footerApp}</Link>
                            <Link href="#">{t.footer?.footerUi}</Link>
                            <Link href="#">{t.footer?.footerDigital}</Link>
                        </li>

                        <li className='flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>{t.footer?.footerSubscribe}</h3>
                            <p>{t.footer?.footerSubInfo}</p>

                            {/* email subscibe form */}
                            <form onSubmit={handleSubmit} className='flex items-center gap-4'>
                                <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='sm:w-[350px] pl-2 py-1 outline-none ring-2 ring-[#888888] rounded-sm' placeholder={t.footer?.footerEmailPlcae} />
                                {/* {
                                    submiting
                                        ? <span className='w-[133.13] h-[40px] px-6 py-2 hover:bg-blue-100 duration-200 rounded-xl flex justify-center items-center'><span className='w-[20px] h-[20px] border-t-2 border-[#000] animate-spin rounded-full top-0'></span></span>
                                        : <button className='px-6 py-2 hover:bg-blue-100 duration-200 rounded-xl cursor-pointer'>{t.footer?.footerBtn}</button>
                                } */}
                                <button className='w-[140px] h-[40px] px-6 py-2 border-2 border-[#888888] hover:bg-[#e4e4e4] hover:border-[#e4e4e4] duration-200 rounded-lg cursor-pointer'>
                                {
                                    submiting 
                                    ? <span className='w-[20px] h-[20px] border-t-2 border-[#000] animate-spin rounded-full top-0'></span>
                                    : t.footer?.footerBtn
                                }
                                </button>

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