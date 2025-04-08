"use client"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React, { useState } from 'react'

const Work = () => {

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Modern online shopping experience with React and Node.js for a leading fashion retailer. Includes payment processing, product management, and customer accounts. The platform led to a 35% increase in revenue in the first year.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            highlights: [
                "35% revenue increase",
                "42% more mobile users",
                "28% higher conversion rate"
            ],
            category: "Web"
        },
        {
            id: 2,
            title: "Fitness Tracker App",
            description: "Mobile application for tracking fitness goals with personalized workout plans, nutrition diary, and progress analysis. The app has been downloaded over 100,000 times and has a rating of 4.8/5 stars.",
            tags: ["React Native", "Firebase", "Redux", "HealthKit"],
            highlights: [
                "100,000+ downloads",
                "4.8/5 star rating",
                "87% user retention"
            ],
            category: "App"
        },
        {
            id: 3,
            title: "Corporate Branding",
            description: "Complete brand design for a technology company, including logo, color palette, typography, and design guidelines for all communication channels. The rebranding led to significantly improved brand perception and recognition in the market.",
            tags: ["Adobe CC", "Figma", "Brand Strategy", "Motion Design"],
            highlights: [
                "42% higher brand awareness",
                "Design excellence award",
                "Unified brand presence"
            ],
            category: "Design"
        },
        {
            id: 4,
            title: "Real Estate Portal",
            description: "Platform for searching and managing properties with interactive map, detailed filtering options, and virtual property tours. The portal has increased the brokerage rate by 45%.",
            tags: ["Next.js", "TypeScript", "PostgreSQL", "Google Maps API"],
            highlights: [
                "45% higher brokerage rate",
                "65% more leads",
                "Reduced search time by 30%"
            ],
            category: "Web"
        },
        {
            id: 5,
            title: "Travel Guide App",
            description: "Interactive travel guide with offline maps, attractions, restaurant recommendations, and personalized travel routes. The app has been recommended in several travel magazines.",
            tags: ["Flutter", "Firebase", "MapBox", "AI Recommendations"],
            highlights: [
                "250,000+ downloads",
                "Featured in App Store",
                "Average 45 min daily usage"
            ],
            category: "App"
        },
        {
            id: 6,
            title: "Online Banking Dashboard",
            description: "User-friendly dashboard for online banking with real-time transactions, financial analysis, and budget planning. The new interface has improved user satisfaction by 40%.",
            tags: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
            highlights: [
                "40% higher user satisfaction",
                "28% more active users",
                "Reduced support requests by 35%"
            ],
            category: "Web"
        }
    ];

    const categories = ["All", "Web", "App", "Design"]

    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    return (
        <>
            <section id='work' className='py-20'>
                <div className="container">
                    <CommonHead commonHead={"Our Work"} />
                    <CommonHeadInfo commonHeadInfo={"Discover a selection of our most successful projects. Each project is the result of close collaboration with our clients and reflects our passion for excellent design and technical innovation."} />

                    <div className='mt-10'>
                        <div className="flex justify-center gap-6 mb-10">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`text-sm font-medium px-6 py-1 rounded-full cursor-pointer hover:bg-blue-100 duration-200 border-none outline-none tracking-widest ${selectedCategory === category ? 'text-black bg-blue-100' : 'text-gray-400'}`} onClick={() => setSelectedCategory(category)}>
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className='flex flex-wrap justify-center gap-10'>
                            {filteredProjects.map(project => (
                                <ul key={project.id} className="bg-white shadow-lg hover:shadow-xl rounded-xl w-[475px] rounded-sm overflow-hidden">
                                    <li className='w-full h-[250px] bg-blue-100'>
                                        <img src="#" alt="" />
                                    </li>

                                    <li className="mt-4 p-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </li>

                                    <li className='p-4'>
                                        <h3 className="mt-3 font-semibold text-lg">{project.title}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>

                                        <ul className="mt-3 text-sm text-gray-700 space-y-1">
                                            {project.highlights.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span>✓</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Work