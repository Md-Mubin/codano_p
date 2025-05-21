"use client"
import CommonHead from '@/Commons/CommonHead'
import React, { useState } from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'
import Blog1 from '@/Extra/Blog1'
import Blog2 from '@/Extra/Blog2'
import Blog3 from '@/Extra/Blog3'

const Blog = () => {

    const { t } = useLanguage()

    const blogCards = t?.blog || []
    const [showBlog1, setShowBlog1] = useState(false)
    const [showBlog2, setShowBlog2] = useState(false)
    const [showBlog3, setShowBlog3] = useState(false)

    return (
        <>
            {/* ================== Blog Section Start ================== */}
            <section className='py-20 tracking-widest'>
                <div className="container">

                    <CommonHead commonHead={t.blog?.head} />

                    <div className='flex flex-col xl:flex-row justify-between gap-10 mt-24'>

                        {/* blog 1 */}
                        <ul className='shadow-lg hover:shadow-xl pb-10 rounded-2xl overflow-hidden'>

                            <li>
                                <img
                                    className='w-full h-[300px]'
                                    loading='lazy'
                                    src={blogCards?.blogCard1?.img}
                                    alt="blog1 images"
                                />
                            </li>

                            <li className='p-6'>
                                {blogCards?.blogCard1?.date}
                            </li>

                            <li className='mt-2 pl-6 font-bold text-lg tracking-widest'>
                                {blogCards?.blogCard1?.blogHead}
                            </li>

                            <li className='mt-4 px-6 font-medium text-[16px] tracking-widest'>
                                {blogCards?.blogCard1?.blogDescription}
                            </li>

                            <li className='mt-4 ml-6'>
                                <button onClick={() => setShowBlog1(!showBlog1)} className='px-6 py-1 rounded-full bg-blue-100 hover:bg-blue-200 duration-200 cursor-pointer'>Read More</button>
                            </li>
                        </ul>

                        {/* blog 2 */}
                        <ul className='shadow-lg hover:shadow-xl pb-10 rounded-2xl overflow-hidden'>

                            <li>
                                <img
                                    className='w-full h-[300px]'
                                    loading='lazy'
                                    src={t?.blog?.blogCard2?.img}
                                    alt="blog1 images"
                                />
                            </li>

                            <li className='p-6'>
                                {t?.blog?.blogCard2?.date}
                            </li>

                            <li className='mt-2 pl-6 font-bold text-lg tracking-widest'>
                                {t?.blog?.blogCard2?.blogHead}
                            </li>

                            <li className='mt-4 px-6 font-medium text-[16px] tracking-widest'>
                                {t?.blog?.blogCard2?.blogDescription}
                            </li>

                            <li className='mt-4 ml-6'>
                                <button onClick={() => setShowBlog2(!showBlog2)} className='px-6 py-1 rounded-full bg-blue-100 hover:bg-blue-200 duration-200 cursor-pointer'>Read More</button>
                            </li>
                        </ul>

                        {/* blog 3 */}
                        <ul className='shadow-lg hover:shadow-xl pb-10 rounded-2xl overflow-hidden'>

                            <li>
                                <img
                                    className='w-full h-[300px]'
                                    loading='lazy'
                                    src={t?.blog?.blogCard3?.img}
                                    alt="blog1 images"
                                />
                            </li>

                            <li className='p-6'>
                                {t?.blog?.blogCard3?.date}
                            </li>

                            <li className='mt-2 pl-6 font-bold text-lg tracking-widest'>
                                {t?.blog?.blogCard3?.blogHead}
                            </li>

                            <li className='mt-4 px-6 font-medium text-[16px] tracking-widest'>
                                {t?.blog?.blogCard3?.blogDescription}
                            </li>

                            <li className='mt-4 ml-6'>
                                <button onClick={() => setShowBlog3(!showBlog3)} className='px-6 py-1 rounded-full bg-blue-100 hover:bg-blue-200 duration-200 cursor-pointer'>Read More</button>
                            </li>
                        </ul>


                    </div>
                </div>
            </section>
            {/* ================== Blog Section End ================== */}

            {/* Blog 1 full Card */}
            {
                showBlog1 && (
                    <div className={`w-full top-0 fixed inset-0 z-[200] overflow-y-auto`}>
                        <Blog1 show={showBlog1} close={()=>setShowBlog1(false)}/>
                    </div>
                )
            }

            {/* Blog 2 full Card */}
            {
                showBlog2 && (
                    <div className={`w-full top-0 fixed inset-0 z-[200] overflow-y-auto`}>
                        <Blog2 show={showBlog2} close={()=>setShowBlog2(false)}/>
                    </div>
                )
            }

            {/* Blog 3 full Card */}
            {
                showBlog3 && (
                    <div className={`w-full top-0 fixed inset-0 z-[200] overflow-y-auto`}>
                        <Blog3 show={showBlog3} close={()=>setShowBlog3(false)}/>
                    </div>
                )
            }
        </>
    )
}

export default Blog