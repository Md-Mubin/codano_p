"use client"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'

const Process = () => {

    const { t } = useLanguage()
    const processSteps = t.process || []


    return (
        <>
            {/* ================== Process Section Start ================== */}
            <section id='process' className='py-20 tracking-widest'>
                <div className="container">
                    <CommonHead commonHead={t.process?.head} />
                    <CommonHeadInfo commonHeadInfo={t.process?.headInfo} />

                    <div className="flex flex-wrap justify-center gap-16 mt-24">
                        {processSteps.steps?.map((step, index) => (
                            <ul
                                key={index}
                                className={`flex items-center justify-between gap-10 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                <li className="flex items-center justify-center w-20 h-20 rounded-full bg-[#e8f0fb] text-2xl font-bold text-[#1a1a1a]">
                                    {"0"+(index + 1)}
                                </li>
                                <li className="max-w-xl">
                                    <h3 className="text-xl font-bold mb-2">{step.stepHead}</h3>
                                    <p className="text-gray-700 leading-relaxed">{step.stepInfo}</p>
                                </li>
                                <li>
                                    <img className='w-[600px] h-[200px]' src="#" alt="" />
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>
            {/* ================== Process Section End ================== */}
        </>
    )
}

export default Process