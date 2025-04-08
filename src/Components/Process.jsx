import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React from 'react'

const Process = () => {

    // all the info as api to render the component fast
    const processSteps = [
        {
            number: "01",
            headName: "Discovery & Strategy",
            info: "We begin with a deep understanding of your business goals, target audience, and requirements. Based on this, we develop a tailored strategy for your project."
        },

        {
            number: "02",
            headName: "Concept & Design",
            info: "Based on the strategy, we create wireframes and designs that perfectly represent your brand and provide an optimal user experience. Iterative feedback loops ensure the final result meets your expectations."
        },

        {
            number: "03",
            headName: "Development & Testing",
            info: "Our development team implements the design using cutting-edge technologies. Regular testing and quality assurance ensure error-free functionality across all devices and browsers."
        },

        {
            number: "04",
            headName: "Launch & Optimization",
            info: "After a successful launch, we continue to support you with continuous optimization, maintenance, and support to ensure your digital solution is successful in the long term."
        }
    ]

    return (
        <>
            {/* ================== Process Section Start ================== */}
            <section id='process' className='py-20'>
                <div className="container">
                    <CommonHead commonHead={"Our Process"} />
                    <CommonHeadInfo commonHeadInfo={"Our proven process ensures that every project is executed efficiently, transparently, and with the highest quality. We place great emphasis on communication and collaboration at every stage."} />

                    <div className="flex flex-wrap justify-center gap-16 mt-24">
                        {processSteps.map((step, index) => (
                            <ul
                                key={index}
                                className={`flex flex-col lg:flex-row items-center justify-between gap-10 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                <li className="flex items-center justify-center w-20 h-20 rounded-full bg-[#e8f0fb] text-2xl font-bold text-[#1a1a1a]">
                                    {step.number}
                                </li>
                                <li className="max-w-xl">
                                    <h3 className="text-xl font-bold mb-2">{step.headName}</h3>
                                    <p className="text-gray-700 leading-relaxed">{step.info}</p>
                                </li>
                                <li>
                                    <img className='w-[600px] h-[200px]' src="#" alt="" />
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>
            {/* ================== Process Section End ================== */}
        </>
    )
}

export default Process