import CommonHead from '@/Commons/CommonHead'
import React from 'react'

const Blog = () => {

    const blogCards = [
        {
            id: 1,
            date: "March 15, 2024",
            blogHead: "The Future of Web Design: Trends for 2024",
            blogDescription: "Discover the latest design trends that will shape the web in the coming year, from 3D elements to micro-interactions. Over the past few years, web design has evolved rapidly...."
        },

        {
            id: 2,
            date: "February 28, 2024",
            blogHead: "Why Performance is Crucial for Your Website",
            blogDescription: "A fast website is not only good for user experience but also for SEO and conversion rates. In today's digital landscape, where users are becoming increasingly impatient and...."
        },

        {
            id: 3,
            date: "February 10, 2024",
            blogHead: "The Role of AI in Modern Web Development",
            blogDescription: "Artificial intelligence is revolutionizing the way we develop websites and applications. In recent years, AI-powered tools and technologies have had an enormous impact on web...."
        }
    ]

    return (
        <>
            {/* ================== Blog Section Start ================== */}
            <section className='py-20'>
                <div className="container">

                    <CommonHead commonHead={"Blog & Insights"} />

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