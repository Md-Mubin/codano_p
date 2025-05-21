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
                <div onClick={close} className='w-full inset-0 bg-[#000000cc] xl:flex justify-center items-center z-50 tracking-widest py-10 px-5'>
                    <ul onClick={(e) => e.stopPropagation()} className='xl:w-[1400px] pt-10 lg:p-10 bg-[#fff] rounded-xl relative z-[100] text-lg tracking-widest p-5'>

                        <header className='mt-5'>
                            <h1 className='text-4xl'>{blogCard1?.blogHead}</h1>
                            <time className='text-[16px] sm:text-lg lg:text-xl'>{blogCard1?.headerTime}</time>
                        </header>

                        <img className='mt-10 ' src={blogCard1?.img} alt='imaage' />

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

                        <h3 className='text-xl my-5 font-semibold'>{blogCard1?.aiTitle}</h3>
                        <p className='mt-5'>{blogCard1?.aiIntro}</p>

                        <p className='mt-5'><strong>{blogCard1?.aiAppsTitle}</strong></p>
                        <ul>
                            <li>{blogCard1?.ai1}</li>
                            <li>{blogCard1?.ai2}</li>
                            <li>{blogCard1?.ai3}</li>
                            <li>{blogCard1?.ai4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard1?.balanceTitle}</h2>
                        <p className='mt-5'>{blogCard1?.balanceIntro}</p>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard1?.accessibilityTitle}</h3>
                        <p className='mt-5'>{blogCard1?.accessibilityIntro}</p>

                        <ul>
                            <li>{blogCard1?.access1}</li>
                            <li>{blogCard1?.access2}</li>
                            <li>{blogCard1?.access3}</li>
                            <li>{blogCard1?.access4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard1?.performanceTitle}</h3>
                        <p className='mt-5'>{blogCard1?.performanceIntro}</p>

                        <ul>
                            <li>{blogCard1?.perf1}</li>
                            <li>{blogCard1?.perf2}</li>
                            <li>{blogCard1?.perf3}</li>
                            <li>{blogCard1?.perf4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard1?.mobileTitle}</h3>
                        <p className='mt-5'>{blogCard1?.mobileIntro}</p>

                        <ul>
                            <li>{blogCard1?.impl1}</li>
                            <li>{blogCard1?.impl2}</li>
                            <li>{blogCard1?.impl3}</li>
                            <li>{blogCard1?.impl4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard1?.futureTitle}</h2>
                        <p className='mt-5'>{blogCard1?.futureIntro}</p>

                        <ul>
                            <li><strong>{blogCard1?.future1H}</strong>{blogCard1?.future1}</li>
                            <li><strong>{blogCard1?.future2H}</strong>{blogCard1?.future2}</li>
                            <li><strong>{blogCard1?.future3H}</strong>{blogCard1?.future3}</li>
                            <li><strong>{blogCard1?.future4H}</strong>{blogCard1?.future4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard1?.conclusionTitle}</h2>
                        <p className='mt-5'>{blogCard1?.conclusion}</p>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard1?.callToActionTitle}</h3>
                        <p className='mt-5'>{blogCard1?.callToAction}</p>

                        <p>{blogCard1?.closingNote}</p>

                        <button onClick={close} className='absolute top-1 lg:top-10 right-2 lg:right-10 text-4xl hover:text-[#598bc7] cursor-pointer'>
                            <MdOutlineCancel />
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog1