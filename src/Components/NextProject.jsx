"use client"
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'

const NextProject = () => {

    const {t} = useLanguage()

    return (
        <>
            {/* ================== Next-Project Section Start ================== */}
            <section className='py-20'>
                <div className="container">
                    <ul className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0'>
                        <li className='lg:w-[600px]'>
                            <h2 className='text-3xl font-bold text-[#000] tracking-widest'>{t.nextProject?.head}</h2>
                            <p className='text-lg font-medium text-[#555555] mt-4 tracking-widest'>{t.nextProject?.headInfo}</p>
                        </li>
                        
                        <li className='flex gap-6'>
                            <button className='px-8 py-2 border-2 border-[#999999] text-[#999999] hover:border-[#222222] hover:text-[#000] duration-200 rounded-lg cursor-pointer tracking-widest'>{t.nextProject?.getinTouchBtn}</button>
                            <button className='px-8 py-2 border-2 border-[#999999] text-[#999999] hover:border-[#222222] hover:text-[#000] duration-200 rounded-lg cursor-pointer tracking-widest'>{t.nextProject?.portfolioBtn}</button>
                        </li>
                    </ul>
                </div>
            </section>
            {/* ================== Next-Project Section End ================== */}
        </>
    )
}

export default NextProject