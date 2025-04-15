"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { RiShareLine } from "react-icons/ri"
import { LuLinkedin } from "react-icons/lu"
import { useLanguage } from '../../public/contexts/LanguageContext'
import axios from 'axios'
import PrivatePolicy from '@/Extra/PrivatePolicy'
import TermsService from '@/Extra/TermsService'
import Imprint from '@/Extra/Imprint'

const Footer = () => {

    const { t } = useLanguage()

    // all hooks
    const [email, setEmail] = useState("")
    const [submiting, setSubmiting] = useState(false)
    const [showTerms, setShowTerms] = useState(false)
    const [showPolicy, setShowPolicy] = useState(false)
    const [showImprint, setShowImprint] = useState(false)
    const [msg, setMsg] = useState("")

    // for submiting email
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmiting(true)

        // posting data to backend server to store in MongoDB database
        try {
            const response = await axios.post("https://testserver1-stww.onrender.com/api/v1/emailSubscribers", { email })
            if (response.data.success) {
                setMsg(response.data.success)
            }

        } catch (error) {
            if (error.data.errMsg) {
                setMsg(error.data.errMsg)
            }
        }


        setTimeout(() => {
            setMsg("")
        }, 3000);

        // after completing store the email in database
        setEmail("") // email input will be empty
        setSubmiting(false) //submitting will be false
    }

    return (
        <>
            {/* ================== Footer Part Start ================== */}
            <footer className='py-20 border-t-1 border-[#999999] relative'>
                <div className="container">
                    <ul className='flex flex-wrap lg:flex-nowrap justify-between pb-10 gap-10 lg:gap-4'>
                        <li className='w-[348px] flex flex-col gap-4 tracking-widest'>

                            {/* footer logo */}
                            <h2 className='flex items-center gap-2 font-bold text-2xl tracking-widest'>
                                <RiShareLine className='text-4xl' />Codaro
                            </h2>
                            <p>{t.footer?.footerInfo}</p>

                            {/* social media */}
                            <a href="#" className='mt-4 text-2xl hover:translate-y-[-4px] transition-transform duration-200 w-fit'>
                                <LuLinkedin />
                            </a>
                        </li>

                        {/* footer sercvices */}
                        <li className='w-[250px] flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>{t.footer?.footerSer}</h3>
                            <Link href="#work" className='hover:text-[#888888] duration-200' >{t.footer?.footerWeb}</Link>
                            <Link href="#work" className='hover:text-[#888888] duration-200' >{t.footer?.footerApp}</Link>
                            <Link href="#work" className='hover:text-[#888888] duration-200' >{t.footer?.footerUi}</Link>
                            <Link href="#work" className='hover:text-[#888888] duration-200' >{t.footer?.footerDigital}</Link>
                        </li>

                        <li className='flex flex-col gap-4 tracking-widest'>
                            <h3 className='font-bold text-xl'>{t.footer?.footerSubscribe}</h3>
                            <p>{t.footer?.footerSubInfo}</p>

                            {/* email subscibe form */}
                            <form onSubmit={handleSubmit} className='flex items-center gap-4'>
                                <div className='relative'>
                                    <label className='absolute top-[-24px] right-0 text-[#888888]'>{msg}</label>
                                    <input
                                        required
                                        name='email'
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t.footer?.footerEmailPlcae}
                                        className='sm:w-[350px] pl-2 py-1 outline-none ring-2 ring-[#888888] rounded-sm'
                                    />
                                </div>

                                <button className={`w-[140px] h-[40px] px-6 py-2 border-2 border-[#888888] hover:bg-[#e4e4e4] hover:border-[#e4e4e4] duration-200 rounded-lg cursor-pointer flex justify-center items-center ${submiting && "pointer-events-none"}`}>
                                    {
                                        submiting
                                            ? <span className='w-[20px] h-[20px] border-t-2 border-[#000] animate-spin rounded-full top-0'></span>
                                            : t.footer?.footerBtn
                                    }
                                </button>

                            </form>
                        </li>
                    </ul>

                    {/* all rights reserved part */}
                    <ul className='flex flex-col lg:flex-row gap-6 lg:gap-0 items-center justify-between pt-10 border-t tracking-widest text-lg'>
                        <li>
                            {t.footer?.footerRights}
                        </li>

                        <li className='flex gap-6'>
                            <button onClick={() => setShowPolicy(!showPolicy)} className='hover:translate-y-[-2px] hover:text-[#888888] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02] cursor-pointer'>{t.footer?.footerPolicy}</button>
                            <button onClick={() => setShowTerms(!showTerms)} className='hover:translate-y-[-2px] hover:text-[#888888] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02] cursor-pointer'>{t.footer?.footerTerms}</button>
                            <button onClick={() => setShowImprint(!showImprint)} className='hover:translate-y-[-2px] hover:text-[#888888] duration-200 hover:will-change-transform will-change-transform hover:scale-[1.02] cursor-pointer'>{t.footer?.footerImprint}</button>
                        </li>
                    </ul>
                </div>

            </footer>

            {/* Terms & Service */}
            {
                showTerms && (
                    <div className={`w-full top-0 fixed inset-0 z-50 overflow-y-auto`}>
                        <TermsService show={showTerms} close={() => setShowTerms(false)} />
                    </div>
                )
            }

            {/* private policy */}
            {
                showPolicy && (
                    <div className={`w-full top-0 fixed inset-0 z-50 overflow-y-auto`}>
                        <PrivatePolicy show={showPolicy} close={() => setShowPolicy(false)} />
                    </div>
                )
            }

            {/* private policy */}
            {
                showImprint && (
                    <div className={`w-full top-0 fixed inset-0 z-50 overflow-y-auto`}>
                        <Imprint show={showImprint} close={() => setShowImprint(false)} />
                    </div>
                )
            }
            {/* ================== Footer Part End ================== */}
        </>
    )
}

export default Footer