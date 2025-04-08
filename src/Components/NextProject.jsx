import React from 'react'

const NextProject = () => {
    return (
        <>
            {/* ================== Next-Project Section Start ================== */}
            <section className='py-20'>
                <div className="container">
                    <ul className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0'>
                        <li className='lg:w-[600px]'>
                            <h2 className='text-3xl font-bold text-[#000] tracking-widest'>Ready for your next project?</h2>
                            <p className='text-lg font-medium text-[#555555] mt-4 tracking-widest'>Let's create something great together. Contact us today for a no-obligation conversation.</p>
                        </li>

                        <li className='flex gap-6'>
                            <button className='px-8 py-2 border-2 border-[#999999] text-[#999999] hover:border-[#222222] hover:text-[#000] duration-200 rounded-lg cursor-pointer tracking-widest'>Get in Touch</button>
                            <button className='px-8 py-2 border-2 border-[#999999] text-[#999999] hover:border-[#222222] hover:text-[#000] duration-200 rounded-lg cursor-pointer tracking-widest'>Portfolio</button>
                        </li>
                    </ul>
                </div>
            </section>
            {/* ================== Next-Project Section End ================== */}
        </>
    )
}

export default NextProject