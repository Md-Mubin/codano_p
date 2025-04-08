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

                    <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between mt-24 tracking-widest">
                        <form className="w-full lg:w-[730px] p-6 shadow-lg rounded-lg">
                            <ul>
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.name}*</label>
                                    <input
                                        type="text"
                                        placeholder={t.contact?.form.namePlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.email}*</label>
                                    <input
                                        type="email"
                                        placeholder={t.contact?.form.emailPlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.phone}</label>
                                    <input
                                        type="number"
                                        placeholder={t.contact?.form.phonePlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.company}</label>
                                    <input
                                        type="text"
                                        placeholder={t.contact?.form.companyPlaceholder}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                            </ul>

                            <div>
                                <label className="block text-sm font-medium mt-2">{t.contact?.form.budget}</label>
                                <select className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none">
                                    <option>{t.contact?.form.budgetPlaceholder}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mt-2">{t.contact?.form.projectDes}*</label>
                                <textarea
                                    placeholder={t.contact?.form.projectDesPlaceholder}
                                    rows="4"
                                    className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                ></textarea>
                            </div>

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
                                            <span className='font-medium text-lg'>{t.contact?.questionArea?.addressInfo}</span>
                                        </p>
                                    </li>

                                    <li className='flex items-center gap-4 text-2xl mt-4'>
                                        <FiPhone />
                                        <p className='flex flex-col font-bold text-xl'>{t.contact?.form.phone}
                                            <span className='font-medium text-lg'>+49 30 1234567</span>
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

                            <li className='mt-10 '>
                                <h2 className="text-2xl font-bold mb-6">{t.contact?.questionArea?.askQuestionHead}</h2>
                                <ul className="space-y-4">
                                    {
                                        questionCard.map((items, index) => (
                                            <li key={index} className='border border-[#999999] rounded-xl p-6'>
                                                <h3 className="font-bold text-xl mb-2">{items.question}</h3>
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