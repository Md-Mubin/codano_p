"use client"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React from 'react'
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"
import { useLanguage } from '../../public/contexts/LanguageContext'

const Contact = () => {

    const { t } = useLanguage()

    const questionCard = t.contact?.questionArea?.allQuestionCard || []

    return (
        <>
            {/* ================== Contact Section Start ================== */}
            <section id='contact' className='py-20'>
                <div className="container">

                    <CommonHead commonHead={t.contact?.head} />
                    <CommonHeadInfo commonHeadInfo={t.contact?.headInfo} />

                    <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between mt-24 tracking-widest gap-10">
                        <form className="w-full lg:w-[730px] p-6 shadow-lg rounded-lg">
                            <ul>

                                {/* name */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.name}*</label>
                                    <input
                                        type="text"
                                        placeholder={t.contact?.form.namePlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* email */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.email}*</label>
                                    <input
                                        type="email"
                                        placeholder={t.contact?.form.emailPlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* number */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.phone}</label>
                                    <input
                                        type="number"
                                        placeholder={t.contact?.form.phonePlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* company name */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.company}</label>
                                    <input
                                        type="text"
                                        placeholder={t.contact?.form.companyPlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* budget selection */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.budget}</label>
                                    <select className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none">
                                        <option>{t.contact?.form.budgetPlaceholder}</option>
                                        <option value="under-500">{t.contact?.form.budget1}</option>
                                        <option value="500-1000">{t.contact?.form.budget2}</option>
                                        <option value="1000-5000">{t.contact?.form.budget3}</option>
                                    </select>
                                </li>

                                {/* massage area */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.projectDes}*</label>
                                    <textarea
                                        placeholder={t.contact?.form.projectDesPlaceholder}
                                        rows="4"
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    ></textarea>
                                </li>
                            </ul>

                            <button className="bg-gray-100 text-[#000] w-full py-4 mt-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer">
                                {t.contact?.form.sendBtn}
                            </button>
                        </form>

                        {/* Contact Information */}
                        <ul className="mb-16 mt-10 lg:mt-0 lg:w-[728px]">
                            <li>
                                <h2 className="text-2xl font-bold mb-6">{t.contact?.questionArea?.contactHead}</h2>
                                <ul className="space-y-2 text-gray-600">
                                    <li className='flex items-center gap-4 text-2xl'>
                                        <FiMapPin />
                                        <p className='flex flex-col font-bold text-xl'>{t.contact?.questionArea?.address}
                                            <span className='font-medium text-lg'>Bussardplatz 11, 85757 Karlsfeld</span>
                                        </p>
                                    </li>

                                    <li className='flex items-center gap-4 text-2xl mt-4'>
                                        <FiMail />
                                        <p className='flex flex-col font-bold text-xl'>{t.contact?.form.email}
                                            <span className='font-medium text-lg'>{t.contact?.questionArea?.contactEmailInfo}</span>
                                        </p>
                                    </li>
                                </ul>
                            </li>

                            {/* questions with answers */}
                            <li className='mt-10 '>
                                <h2 className="text-2xl font-bold mb-6">{t.contact?.questionArea?.askQuestionHead}</h2>
                                <ul className="space-y-4">
                                    {
                                        questionCard.map((items, index) => (
                                            <li key={index} className='border border-[#999999] rounded-xl p-6'>

                                                {/* questions */}
                                                <h3 className="font-bold text-xl mb-2">{items.question}</h3>

                                                {/* answers */}
                                                <p className="text-gray-600 text-lg">
                                                    {items.answer}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* ================== Contact Section End ================== */}
        </>
    )
}

export default Contact