"use client"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'

const Process = () => {

    const { t } = useLanguage()
    const processSteps = t.process || []

    const img = [
        {
            image: "/img/stretegy.jpg"
        },
        {
            image: "/img/concept.jpg"
        },
        {
            image: "/img/testing.jpg"
        },
        {
            image: "/img/optimize.jpg"
        }
    ]

    return (
        <>
            {/* ================== Process Section Start ================== */}
            <section id='process' className='py-20 tracking-widest'>
                <div className="container">
                    <CommonHead commonHead={t.process?.head} />
                    <CommonHeadInfo commonHeadInfo={t.process?.headInfo} />

                    <div className="flex flex-wrap justify-center gap-16 mt-24">
                        {
                            processSteps.steps?.map((step, index) => (
                                <ul
                                    key={index}
                                    className={`flex items-center flex-col lg:flex-row lg:justify-between gap-10 ${index % 2 === 0 ? '' : 'flex-col lg:flex-row-reverse'}`}>

                                    <li className="flex items-center justify-center w-20 h-20 rounded-full bg-[#e8f0fb] text-2xl font-bold text-[#1a1a1a]">
                                        {"0" + (index + 1)}
                                    </li>

                                    {/* infos */}
                                    <li className="lg:w-[600px]">
                                        <h3 className="text-xl font-bold mb-2">{step.stepHead}</h3>
                                        <p className="text-gray-700 leading-relaxed">{step.stepInfo}</p>
                                    </li>

                                    {/* images */}
                                    {
                                        img[index] && (
                                            <li key={index}>
                                                <img className='lg:w-[600px]' loading='lazy' src={img[index].image} alt={`Step ${index + 1}`} />
                                            </li>
                                        )
                                    }
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* ================== Process Section End ================== */}
        </>
    )
}

export default Process