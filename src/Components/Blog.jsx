"use client"
import CommonHead from '@/Commons/CommonHead'
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'

const Blog = () => {

    const {t} = useLanguage()

    const blogCards = t.blog?.blogCards || []

    return (
        <>
            {/* ================== Blog Section Start ================== */}
            <section className='py-20 tracking-widest'>
                <div className="container">

                    <CommonHead commonHead={t.blog?.head} />

                    <div className='flex flex-col lg:flex-row justify-between gap-10 mt-24'>
                        {
                            blogCards.map((items) => (
                                <ul
                                    key={items.id}
                                    className='shadow-lg hover:shadow-xl pb-10 rounded-2xl overflow-hidden'>

                                    <li className='w-full h-[250px] bg-blue-100'>
                                        <img src="#" alt="" />
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