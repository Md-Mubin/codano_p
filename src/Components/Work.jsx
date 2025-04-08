"use client"
import CommonHead from '@/Commons/CommonHead'
import CommonHeadInfo from '@/Commons/CommonHeadInfo'
import React, { useState } from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'

const Work = () => {

    // use state hooks
    const [selectedCategory, setSelectedCategory] = useState("All")

    const {t} = useLanguage()

    // all the info as api to render the component fast
    const projects = t.work?.allProjects || []

    // all the filteration
    const categories = ["All", "Web", "App", "Design"]
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory)


    return (
        <>
            {/* ================== Work Section Start ================== */}
            <section id='work' className='py-20'>
                <div className="container">
                    <CommonHead commonHead={t.work?.head} />
                    <CommonHeadInfo commonHeadInfo={t.work?.headInfo} />

                    <div className='mt-10'>
                        <div className="flex flex-wrap justify-center gap-6 mb-10">
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
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
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
            {/* ================== Work Section End ================== */}
        </>
    )
}

export default Work