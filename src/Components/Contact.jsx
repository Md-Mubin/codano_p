import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React from 'react'
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi"

const Contact = () => {
    return (
        <>
            {/* ================== Contact Section Start ================== */}
            <section id='contact' className='py-20'>
                <div className="container">

                    <CommonHead commonHead={"Contact"} />
                    <CommonHeadInfo commonHeadInfo={"Ready to start your next digital project? Contact us for a no-obligation conversation. We look forward to learning more about your goals and how we can help you achieve them."} />

                    <div className="flex items-start justify-between mt-24 tracking-widest">
                        <form className="w-[730px] p-6 shadow-lg rounded-lg">
                            <ul>
                                <li>
                                    <label className="block text-sm font-medium mt-2">Name*</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                                <li>
                                    <label className="block text-sm font-medium mt-2">Email*</label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <label className="block text-sm font-medium mt-2">Phone</label>
                                    <input
                                        type="number"
                                        placeholder="Your phone number"
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                                <li>
                                    <label className="block text-sm font-medium mt-2">Company</label>
                                    <input
                                        type="text"
                                        placeholder="Your company"
                                        className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                    />
                                </li>
                            </ul>

                            <div>
                                <label className="block text-sm font-medium mt-2">Budget</label>
                                <select className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none">
                                    <option>Please select</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mt-2">Project Description*</label>
                                <textarea
                                    placeholder="Describe your project"
                                    rows="4"
                                    className="w-full p-3 border border-[#999999] rounded-md focus:border-blue-500 outline-none"
                                ></textarea>
                            </div>

                            <button className="bg-gray-100 text-[#000] w-full py-4 mt-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer">
                                Send Inquiry
                            </button>
                        </form>

                        {/* Contact Information */}
                        <ul className="mb-16 w-[728px]">
                            <li>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <ul className="space-y-2 text-gray-600">
                                    <li className='flex items-center gap-4 text-2xl'>
                                        <FiMapPin />
                                        <p className='flex flex-col font-bold text-xl'>Adress
                                            <span className='font-medium text-lg'>123 Sample Street, 10115 Berlin</span>
                                        </p>
                                    </li>

                                    <li className='flex items-center gap-4 text-2xl mt-4'>
                                        <FiPhone />
                                        <p className='flex flex-col font-bold text-xl'>Phone
                                            <span className='font-medium text-lg'>+49 30 1234567</span>
                                        </p>
                                    </li>

                                    <li className='flex items-center gap-4 text-2xl mt-4'>
                                        <FiMail />
                                        <p className='flex flex-col font-bold text-xl'>Email
                                            <span className='font-medium text-lg'>info@codaro.com</span>
                                        </p>
                                    </li>
                                </ul>
                            </li>

                            <li className='mt-10 '>
                                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                                <ul className="space-y-4">
                                    <li className='border border-[#999999] rounded-xl p-6'>
                                        <h3 className="font-bold text-xl mb-2">How long does it take to develop a website?</h3>
                                        <p className="text-gray-600 text-lg">
                                            The development time depends on the complexity of the project. A simple website can be completed in 4-6 weeks, while more complex projects can take 3-6 months.
                                        </p>
                                    </li>

                                    <li className='border border-[#999999] rounded-xl p-6'>
                                        <h3 className="font-bold text-xl mb-2">What information do you need for a quote?</h3>
                                        <p className="text-gray-600 text-lg">
                                            For an accurate quote, we need information about the project scope, desired features, timeline, and budget. The more detailed your request, the more precise our quote can be.
                                        </p>
                                    </li>

                                    <li className='border border-[#999999] rounded-xl p-6'>
                                        <h3 className="font-bold text-xl mb-2">Do you offer maintenance and support after launch?</h3>
                                        <p className="text-gray-600 text-lg">
                                            Yes, we offer various maintenance and support packages to ensure your website or app functions optimally and is always up to date.
                                        </p>
                                    </li>
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