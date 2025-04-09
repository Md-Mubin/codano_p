"use client"
import CommonHead from '@/Commons/CommonHead'
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'

const Blog = () => {

    const { t } = useLanguage()

    const blogCards = t.blog?.blogCards || []

    const blogImg = [
        {
            image: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            image: "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]

    return (
        <>
            {/* ================== Blog Section Start ================== */}
            <section className='py-20 tracking-widest'>
                <div className="container">

                    <CommonHead commonHead={t.blog?.head} />

                    <div className='flex flex-col lg:flex-row justify-between gap-10 mt-24'>
                        {
                            blogCards.map((items, index) => (
                                <ul
                                    key={items.id}
                                    className='shadow-lg hover:shadow-xl pb-10 rounded-2xl overflow-hidden'>

                                    <li>
                                        {
                                            blogImg[index] && (
                                                <img
                                                    className='w-full h-[300px]'
                                                    loading='lazy'
                                                    src={blogImg[index].image}
                                                    alt={`Project ${index + 1}`}
                                                />
                                            )
                                        }
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
                                        <button className='px-6 py-1 rounded-full bg-blue-100 hover:bg-blue-200 duration-200 cursor-pointer'>Read More</button>
                                    </li>
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* ================== Blog Section End ================== */}
        </>
    )
}

export default Blog