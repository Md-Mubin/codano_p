"use client"
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'
import { MdOutlineCancel } from 'react-icons/md'

const Blog1 = ({ show, close }) => {

    const { t } = useLanguage()
    const blogCard1 = t?.blog?.blogCard1 || []
    return (
        <>
            <div className={show ? "block" : "hidden"}>
                <div onClick={close} className='w-full inset-0 bg-[#000000cc] xl:flex justify-center items-center z-50 tracking-widest py-10'>
                    <ul onClick={(e) => e.stopPropagation()} className='xl:w-[1200px] pt-10 lg:p-10 bg-[#fff] rounded-xl relative z-[100] text-lg '>

                        <article className='tracking-widest p-10'>
                            <header>
                                <h1 className='text-3xl'>{blogCard1?.blogHead}</h1>
                                <time className='text-[16px] sm:text-lg lg:text-xl'>{blogCard1?.headerTime}</time>
                            </header>

                            <img className='mt-10 ' src={blogCard1?.img} />

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard1?.introduction}</h2>
                            <p>{blogCard1?.introInfo}</p>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard1?.keyWeb}</h2>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard1?.immersive}</h3>
                            <p>{blogCard1?.immersInfo}</p>

                            <p className='mt-5'><strong>{blogCard1?.effective}</strong></p>
                            <ul>
                                <li>{blogCard1?.effec1}</li>
                                <li>{blogCard1?.effec2}</li>
                                <li>{blogCard1?.effec3}</li>
                                <li>{blogCard1?.effec4}</li>
                            </ul>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard1?.microInteractionsTitle}</h3>
                            <p>{blogCard1?.microInteractionsInfo}</p>

                            <p className='mt-5'><strong>{blogCard1?.microInteractionsListTitle}</strong></p>
                            <ul>
                                <li>{blogCard1?.micro1}</li>
                                <li>{blogCard1?.micro2}</li>
                                <li>{blogCard1?.micro3}</li>
                                <li>{blogCard1?.micro4}</li>
                            </ul>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard1?.darkModeTitle}</h3>
                            <p className='mt-5'>{blogCard1?.darkModeIntro}</p>

                            <ul>
                                <li>{blogCard1?.dark1}</li>
                                <li>{blogCard1?.dark2}</li>
                                <li>{blogCard1?.dark3}</li>
                                <li>{blogCard1?.dark4}</li>
                            </ul>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard1?.typographyTitle}</h3>
                            <p className='mt-5'>{blogCard1?.typographyIntro}</p>

                            <ul>
                                <li>{blogCard1?.typo1}</li>
                                <li>{blogCard1?.typo2}</li>
                                <li>{blogCard1?.typo3}</li>
                                <li>{blogCard1?.typo4}</li>
                            </ul>

                            <h3 className='text-xl my-5 font-semibold'>5. AI-Driven Personalization</h3>
                            <p className='mt-5'>Artificial intelligence is transforming how websites adapt to individual users:</p>

                            <p className='mt-5'><strong>Key applications include:</strong></p>
                            <ul>
                                <li>• Dynamic content that changes based on user behavior</li>
                                <li>• Predictive navigation that anticipates user needs</li>
                                <li>• Personalized product recommendations</li>
                                <li>• Custom color schemes and layouts tailored to user preferences</li>
                            </ul>

                            <p className='mt-5'>This level of personalization creates unique experiences for each visitor, significantly increasing engagement and conversion rates.</p>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>Balancing Trends with Fundamentals</h2>
                            <p>While these trends offer exciting possibilities, successful web design in 2024 still relies on fundamental principles:</p>

                            <h3 className='text-xl my-5 font-semibold'>Accessibility First</h3>
                            <p className='mt-5'>Inclusive design ensures websites are usable by people of all abilities:</p>

                            <ul>
                                <li>• Proper contrast ratios for text legibility</li>
                                <li>• Keyboard navigation for those who can't use a mouse</li>
                                <li>• Alt text for images to support screen readers</li>
                                <li>• Captions for video content</li>
                            </ul>

                            <p className='mt-5'>The most innovative designs fail if they exclude portions of your audience. Modern web design recognizes accessibility as a necessity, not an afterthought.</p>

                            <h3 className='text-xl my-5 font-semibold'>Performance Optimization</h3>
                            <p className='mt-5'>Even the most visually stunning website will frustrate users if it loads slowly:</p>

                            <ul>
                                <li>• Optimize image sizes and formats (WebP, AVIF)</li>
                                <li>• Implement lazy loading for off-screen content</li>
                                <li>• Minimize JavaScript execution time</li>
                                <li>• Utilize effective caching strategies</li>
                            </ul>

                            <p className='mt-5'>The balance between rich visual experiences and speed remains crucial in 2024.</p>

                            <h3 className='text-xl my-5 font-semibold'>Mobile-First Approach</h3>
                            <p className='mt-5'>With mobile traffic continuing to dominate, designing for smaller screens first ensures:</p>

                            <ul>
                                <li>• Content prioritization based on limited screen space</li>
                                <li>• Touch-friendly interface elements</li>
                                <li>• Appropriate font sizes and spacing for readability</li>
                                <li>• Simplified navigation patterns</li>
                            </ul>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>Implementing These Trends in Your Projects</h2>
                            <p className='mt-5'>For businesses and designers looking to incorporate these trends:</p>

                            <ol>
                                <li><strong>Start small</strong> - Test new design approaches on specific landing pages before implementing site-wide changes</li>
                                <li><strong>Gather feedback</strong> - Use A/B testing to measure how users respond to new design elements</li>
                                <li><strong>Focus on purpose</strong> - Implement trends that enhance your specific goals and user needs</li>
                                <li><strong>Maintain consistency</strong> - Ensure new design elements align with your overall brand identity</li>
                            </ol>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>The Future Beyond 2024</h2>
                            <p className='mt-5'>Looking ahead, several emerging technologies are poised to further transform web design:</p>

                            <ul>
                                <li><strong>WebXR</strong> - Bringing augmented and virtual reality experiences to the browser</li>
                                <li><strong>Voice User Interfaces (VUI)</strong> - Creating more natural ways to interact with websites</li>
                                <li><strong>Gesture-based navigation</strong> - Allowing more intuitive interactions, especially on mobile</li>
                                <li><strong>Sustainability in design</strong> - Optimizing websites to reduce energy consumption and environmental impact</li>
                            </ul>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>Conclusion</h2>
                            <p className='mt-5'>The evolution of web design in 2024 reflects a deeper understanding of how technology can enhance human experiences. The most successful designs will be those that thoughtfully implement new trends while maintaining focus on user needs, accessibility, and performance.</p>

                            <p className='mt-5'>By staying informed about these trends and approaching them with purpose, designers and businesses can create web experiences that not only look impressive but also deliver meaningful results.</p>


                            <h3 className='text-xl my-5 font-semibold'>Ready to Update Your Web Presence?</h3>
                            <p className='mt-5'>If you're looking to implement these design trends and create a website that stands out in 2024, our team of expert designers and developers can help bring your vision to life. <a href="/contact">Contact us today</a> for a consultation.</p>

                            <p>Did you find this article helpful? Share it with your network or leave a comment below with your thoughts on web design trends for 2024.</p>
                        </article>

                        <button onClick={close} className='absolute top-1 sm:top-10 right-2 sm:right-10 text-4xl hover:text-[#598bc7] cursor-pointer'>
                            <MdOutlineCancel />
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog1