"use client"
import React from 'react'
import CountUp from 'react-countup';

const HeroSection = () => {
    return (
        <>
            {/* ================== Hero Section Start ================== */}
            <section className='py-[100px]'>
                <div className="container">
                    <ul className='flex items-center justify-between'>
                        <li>
                            <ul className='w-[720px]'>
                                <li className='w-fit rounded-full px-3 py-1 bg-[#f5f1e4] text-sm font-[#000]'>Award-winning digital agency</li>

                                <li className='py-6'>
                                    <h1 className='text-4xl md:text-6xl font-bold text-[#000] tracking'>We create digital experiences of the future</h1>
                                </li>

                                <li className='text-xl font-medium tracking-wide'>
                                    Your web agency for modern, innovative, and tailored digital solutions that take your business to the next level
                                </li>

                                <li className='flex items-center gap-12 py-6 border-b border-[#f1e7c6]'>
                                    <button className='px-8 py-1 text-xl text-[#000] hover:bg-[#f5f1e4] border border-[#f1e7c6]'> + Start a </button>
                                    <button className='px-8 py-1 text-xl text-[#000] hover:bg-[#f5f1e4] border border-[#f1e7c6]'> Explore Portfolio</button>
                                </li>

                                <li className='flex gap-6 justify-around pt-6 text-center'>
                                    <div className='flex flex-col gap-4'>
                                        <CountUp start={0} end={98} style={{ fontSize: "30px", fontWeight: "700" }} />
                                        <span>Completed Project</span>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <CountUp start={0} end={98} style={{ fontSize: "30px", fontWeight: "700" }} />
                                        <span>Completed Project</span>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <CountUp start={0} end={98} style={{ fontSize: "30px", fontWeight: "700" }} />
                                        <span>Completed Project</span>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className='w-[700px] h-[500px] bg-blue-500'>
                            <img loading='lazy' src="#" alt="" />
                        </li>
                    </ul>
                </div>
            </section>
            {/* ================== Hero Section End ================== */}
        </>
    )
}

export default HeroSection