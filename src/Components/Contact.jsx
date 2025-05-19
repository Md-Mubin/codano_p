"use client"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React, { useState } from 'react'
import { FiMapPin, FiMail } from "react-icons/fi"
import { useLanguage } from '../../public/contexts/LanguageContext'
import { inquires } from '@/Services/api'

const Contact = () => {

    const { t } = useLanguage()

    const questionCard = t.contact?.questionArea?.allQuestionCard || []

    // hooks 
    const [submiting, setSubmiting] = useState(false)
    const [msg, setMsg] = useState("")
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        budget: "",
        description: ""
    })

    // handle submit inquries datas
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmiting(true)

        const delay = (ms) => new Promise((res) => setTimeout(res, ms))

        try {
            const response = await inquires.inquiresData(form.name, form.email, form.phone, form.companyName, form.budget, form.description)
            await delay(500)
            setSubmiting(false)

            if (response?.success) {
                setMsg(response.success)
            }
        } catch (error) {
            await delay(500)
            setSubmiting(false)
            if (error.response.data.errMsg) {
                setMsg(error.response.data.errMsg)
            }
        }
    }
    setTimeout(() => setMsg(""), 3000);

    return (
        <>
            {/* ================== Contact Section Start ================== */}
            <section id='contact' className='py-20'>
                <div className="container">

                    <CommonHead commonHead={t.contact?.head} />
                    <CommonHeadInfo commonHeadInfo={t.contact?.headInfo} />

                    <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between mt-24 tracking-widest gap-10">
                        <form onSubmit={handleSubmit} className="w-full lg:w-[730px] p-6 shadow-lg rounded-lg relative">
                            {
                                msg && <span className='absolute top-5 right-10 font-medium text-lg text-[#000] tracking-widest'>{msg}</span>
                            }
                            <ul>

                                {/* name */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.name}</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder={t.contact?.form.namePlaceholder}
                                        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* email */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.email}</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder={t.contact?.form.emailPlaceholder}
                                        onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* number */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.phone}</label>
                                    <input
                                        type="number"
                                        placeholder={t.contact?.form.phonePlaceholder}
                                        onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* company name */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.company}</label>
                                    <input
                                        type="text"
                                        placeholder={t.contact?.form.companyPlaceholder}
                                        onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>

                                {/* budget selection */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.budget}</label>
                                    <select
                                        onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none">
                                        <option>{t.contact?.form.budgetPlaceholder}</option>
                                        <option value="under-500">{t.contact?.form.budget1}</option>
                                        <option value="500-1000">{t.contact?.form.budget2}</option>
                                        <option value="1000-5000">{t.contact?.form.budget3}</option>
                                    </select>
                                </li>

                                {/* massage area */}
                                <li>
                                    <label className="block text-sm font-medium mt-2">{t.contact?.form.projectDes}</label>
                                    <textarea
                                        required
                                        placeholder={t.contact?.form.projectDesPlaceholder}
                                        rows="4"
                                        onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    ></textarea>
                                </li>
                            </ul>

                            <button className={`bg-gray-100 text-[#000] w-full h-[60px] py-4 mt-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer flex justify-center items-center ${submiting && "pointer-events-none"}`}>
                                {
                                    submiting
                                        ? <span className='w-[20px] h-[20px] border-t-2 border-r-2 border-r-transparent border-[#000] animate-spin rounded-full top-0'></span>
                                        : t.contact?.form?.sendBtn
                                }
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


// try {
//     const response = await inquires.inquiresData(...)

//     if (response.success) {
//         // show success
//     }
// } catch (error) {
//     if (error.response && error.response.data?.errors) {
//         const fieldErrors = error.response.data.errors;
//         fieldErrors.forEach(err => {
//             console.error(`${err.field}: ${err.message}`);
//             // Optionally update form error state here
//         });
//     } else {
//         console.error("Something went wrong");
//     }
// }
