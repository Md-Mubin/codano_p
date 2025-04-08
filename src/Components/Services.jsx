import React from 'react'
import { IoCodeOutline } from "react-icons/io5"
import { CiMobile2 } from "react-icons/ci"
import { LuPenTool } from "react-icons/lu"
import { FiUsers } from "react-icons/fi"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'

const Services = () => {

    const services = [
        {
            icon: <IoCodeOutline/>,
            title: "Web Development",
            description:
                "Custom websites and web applications using cutting-edge technologies like React, Next.js, and Node.js. We develop responsive, fast, and user-friendly solutions that support your business goals and delight your customers.",
            features: [
                "Responsive Design",
                "SEO Optimization",
                "Content Management",
                "E-Commerce Integration",
                "Performance Optimization"
            ]
        },
        {
            icon: <CiMobile2/>,
            title: "App Development",
            description:
                "Native and hybrid apps for iOS and Android with seamless user experience. From concept to App Store publication, we guide you through the entire process and ensure your app meets the highest standards.",
            features: [
                "iOS & Android",
                "Hybrid Solutions",
                "Backend Integration",
                "Push Notifications",
                "Offline Functionality"
            ]
        },
        {
            icon: <LuPenTool/>,
            title: "UI/UX Design",
            description:
                "User-friendly and aesthetically pleasing designs that strengthen your brand. We create intuitive interfaces that delight your customers and motivate them to take action, based on comprehensive user research and proven design principles.",
            features: [
                "User Research",
                "Wireframing",
                "Prototyping",
                "Usability Testing",
                "Design Systems"
            ]
        },
        {
            icon: <FiUsers/>,
            title: "Digital Marketing",
            description:
                "SEO, content marketing, and social media strategies for increased visibility. We help you reach your target audience and strengthen your online presence, with data-driven campaigns and continuous optimization for maximum results.",
            features: [
                "Search Engine Optimization",
                "Content Strategy",
                "Social Media",
                "Email Marketing",
                "Analytics & Reporting"
            ]
        }
    ]

    return (
        <>
            <section id='services' className="py-20">
                <div className="container">
                    <CommonHead commonHead={"Our Services"}/>
                    <CommonHeadInfo commonHeadInfo={"We offer a comprehensive range of digital services to help your business grow and thrive in the digital world. Our expert team works closely with you to develop tailored solutions that meet your specific requirements."}/>
                    <div className="flex flex-wrap justify-between gap-6 mt-10">
                        {services.map((service, index) => (
                            <ul
                                key={index}
                                className="w-[348px] p-6 rounded-2xl border-t-4 border-[#000] shadow-lg hover:shadow-xl duration-200 cursor-pointer">

                                <li className="text-2xl bg-[#e6f0ff] p-3 w-fit rounded-full flex items-center justify-center">
                                    {service.icon}
                                </li>

                                <li className="mt-6">
                                    <h3 className="text-2xl font-bold text-[#000] duration-200 tracking-widest">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#000] font-semibold text-sm duration-200 text-start tracking-widest mt-4 mb-10">
                                        {service.description}
                                    </p>
                                    <ul className="text-sm space-y-1">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="text-gray-600 font-semibold tracking-widest">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services