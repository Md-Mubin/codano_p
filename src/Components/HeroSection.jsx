"use client"
import React from 'react'
import CountUp from 'react-countup';
import { useLanguage } from '../../public/contexts/LanguageContext';

const HeroSection = () => {

    const { t } = useLanguage()

    return (
        <>
            {/* ================== Hero Section Start ================== */}
            <section className='py-[100px]'>
                <div className="container">
                    <ul className='flex flex-col lg:flex-row items-center justify-between gap-10'>
                        <li>
                            <ul className='lg:w-[720px]'>
                                <li className='w-fit rounded-full px-3 py-1 bg-[#f5f1e4] text-sm font-[#000]'>{t.hero?.littleHead}</li>

                                <li className='py-6'>
                                    <h1 className='text-4xl md:text-6xl font-bold text-[#000] tracking'>{t.hero?.head}</h1>
                                </li>

                                <li className='text-xl font-medium tracking-wide'>
                                    {t.hero?.headInfo}
                                </li>

                                <li className='flex flex-col lg:flex-row items-center gap-12 py-6 border-b border-[#f1e7c6]'>
                                    <button className='px-8 py-1 text-xl text-[#000] hover:bg-[#f5f1e4] border border-[#f1e7c6]'> + {t.hero?.startProjectBtn} </button>
                                    <button className='px-8 py-1 text-xl text-[#000] hover:bg-[#f5f1e4] border border-[#f1e7c6]'> {t.hero?.exploreBtn}</button>
                                </li>

                                <li className='flex flex-col lg:flex-row gap-6 justify-around pt-6 text-center'>
                                    <div className='flex flex-col gap-4'>
                                        <CountUp start={0} end={100} suffix='+' style={{ fontSize: "30px", fontWeight: "700" }} />
                                        <span>{t.hero?.counter1}</span>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <CountUp start={0} end={98} suffix='%' style={{ fontSize: "30px", fontWeight: "700" }} />
                                        <span>{t.hero?.counter2}</span>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <CountUp start={0} end={8} suffix='+' style={{ fontSize: "30px", fontWeight: "700" }} />
                                        <span>{t.hero?.counter3}</span>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <img loading='lazy' src="/img/heroSec_img.svg" alt="web agency" />
                        </li>
                    </ul>
                </div>
            </section>
            {/* ================== Hero Section End ================== */}
        </>
    )
}

export default HeroSection