"use client"
import React from 'react'
import { IoCodeOutline } from "react-icons/io5"
import { CiMobile2 } from "react-icons/ci"
import { LuPenTool } from "react-icons/lu"
import { FiUsers } from "react-icons/fi"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import { useLanguage } from '../../public/contexts/LanguageContext'

const Services = () => {

    const {t} = useLanguage()

    const icons = {
        web : <IoCodeOutline/>,
        app : <CiMobile2/>,
        ui : <LuPenTool/>,
        marketing : <FiUsers/>
    }

    const services = t.service || {
        head: "Our Services",
        headInfo: "We offer comprehensive digital services...",
        cards: []
    }

    return (
        <>
            {/* ================== Service Section Start ================== */}
            <section id='services' className="py-20">
                <div className="container">
                    <CommonHead commonHead={t.service?.head} />
                    <CommonHeadInfo commonHeadInfo={t.service?.headInfo} />
                    <div className="flex flex-wrap justify-between gap-2 mt-10">
                        {services.cards?.map((service, index) => (
                            <ul
                                key={index}
                                className="w-full lg:w-[360px] p-6 rounded-2xl border-t-4 border-[#000] shadow-lg hover:shadow-xl duration-200 cursor-pointer">

                                <li className="text-2xl bg-[#e6f0ff] p-3 w-fit rounded-full flex items-center justify-center">
                                    {icons[service.type]}
                                </li>

                                <li className="mt-6">
                                    <h3 className="text-2xl font-bold text-[#000] duration-200 tracking-widest">
                                        {service.cardTitle}
                                    </h3>
                                    <p className="text-[#000] font-medium text-sm duration-200 text-start tracking-widest mt-4 mb-10">
                                        {service.cardInfo}
                                    </p>
                                    <ul className="text-sm space-y-1">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="text-gray-600 font-semibold tracking-widest">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>
            {/* ================== Service Section End ================== */}
        </>
    )
}

export default Services