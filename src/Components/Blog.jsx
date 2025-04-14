"use client"
import CommonHead from '@/Commons/CommonHead'
import React, { useState } from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'
import { MdOutlineCancel } from "react-icons/md"

const Blog = () => {

    const { t } = useLanguage()

    const blogCards = t.blog?.blogCards || []
    const [showCard, setShowCard] = useState(null)
    console.log(blogCards)

    return (
        <>
            {/* ================== Blog Section Start ================== */}
            <section className='py-20 tracking-widest'>
                <div className="container">

                    <CommonHead commonHead={t.blog?.head} />

                    <div className='flex flex-col xl:flex-row justify-between gap-10 mt-24'>
                        {
                            blogCards.map((items) => (
                                <ul
                                    key={items.id}
                                    className='shadow-lg hover:shadow-xl pb-10 rounded-2xl overflow-hidden'>

                                    {/* blog images */}
                                    <li>
                                        <img
                                            className='w-full h-[300px]'
                                            loading='lazy'
                                            src={items.img}
                                            alt="blog images"
                                        />
                                    </li>

                                    <li className='p-6'>
                                        {items.date}
                                    </li>

                                    <li className='mt-2 pl-6 font-bold text-lg tracking-widest'>
                                        {items.blogHead}
                                    </li>

                                    <li className='mt-4 px-6 font-medium text-[16px] tracking-widest'>
                                        {items.blogDescription}
                                    </li>

                                    <li className='mt-4 ml-6'>
                                        <button onClick={() => setShowCard(items)} className='px-6 py-1 rounded-full bg-blue-100 hover:bg-blue-200 duration-200 cursor-pointer'>Read More</button>
                                    </li>
                                </ul>
                            ))
                        }

                        {/* read more card */}
                        {
                            showCard && (
                                <div onClick={() => setShowCard(null)} className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-50">
                                    <ul onClick={(e) => e.stopPropagation()} className='w-[1200px] p-10 bg-[#fff] rounded-xl relative z-[100]'>
                                        <li>
                                            <img className='w-[500px] h-[300px]' src={showCard.img} alt="" />
                                        </li>

                                        <li className='p-6'>
                                            {showCard.date}
                                        </li>

                                        <li className='mt-2 pl-6 font-bold text-lg tracking-widest'>
                                            {showCard.blogHead}
                                        </li>

                                        <li className='mt-4 px-6 font-medium text-[16px] tracking-widest'>
                                            {showCard.fullDescription}
                                        </li>

                                        <li onClick={()=>setShowCard(null)} className='absolute top-10 right-10 text-4xl hover:text-[#598bc7] cursor-pointer'>
                                            <MdOutlineCancel />
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
            {/* ================== Blog Section End ================== */}
        </>
    )
}

export default Blog