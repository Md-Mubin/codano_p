import React from 'react'

const NextProject = () => {
    return (
        <>
            <section className='py-20'>
                <div className="container">
                    <ul className='flex justify-between items-center'>
                        <li className='w-[600px]'>
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
        </>
    )
}

export default NextProject