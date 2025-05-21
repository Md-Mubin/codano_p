"use client"
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'
import { MdOutlineCancel } from 'react-icons/md'

const Blog2 = ({ show, close }) => {

    const { t } = useLanguage()
    const blogCard2 = t?.blog?.blogCard2 || []
    return (
        <>
            <div className={show ? "block" : "hidden"}>
                <div onClick={close} className='w-full inset-0 bg-[#000000cc] xl:flex justify-center items-center z-50 tracking-widest py-10 px-5'>
                    <ul onClick={(e) => e.stopPropagation()} className='xl:w-[1400px] pt-10 lg:p-10 bg-[#fff] rounded-xl relative z-[100] text-lg tracking-widest p-5'>

                        <header className='mt-5'>
                            <h1 className='text-4xl'>{blogCard2?.blogHead}</h1>
                            <time className='text-[16px] sm:text-lg lg:text-xl'>{blogCard2?.headerTime}</time>
                        </header>

                        <img className='mt-10' src={blogCard2?.img} alt="Website performance dashboard showing metrics and charts" />

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.introduction}</h2>
                        <p className='mt-5'>{blogCard2?.introInfo}</p>

                        <p className='mt-5'>{blogCard2?.performanece}</p>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.impactTitle}</h2>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.experienceTitle}</h3>
                        <p className='mt-5'>{blogCard2?.experienceInfo}</p>

                        <ul>
                            <li>{blogCard2?.exp1}</li>
                            <li>{blogCard2?.exp2}</li>
                            <li>{blogCard2?.exp3}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.conversionTitle}</h3>
                        <p className='mt-5'>{blogCard2?.conversionParagraph1}</p>

                        <ul>
                            <li>{blogCard2?.conversionList1}</li>
                            <li>{blogCard2?.conversionList2}</li>
                            <li>{blogCard2?.conversionList3}</li>
                        </ul>

                        <p className='mt-5'>{blogCard2?.conversionParagraph2}</p>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.seoTitle}</h3>
                        <p className='mt-5'>{blogCard2?.seoParagraph}</p>

                        <ul>
                            <li>{blogCard2?.seoList1}</li>
                            <li>{blogCard2?.seoList2}</li>
                            <li>{blogCard2?.seoList3}</li>
                        </ul>

                        <p className='mt-5'>{blogCard2?.seoBottomParagraph}</p>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.keyMetricsTitle}</h2>
                        <p className='mt-5'>{blogCard2?.keyMetricsIntro}</p>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.coreVitalsTitle}</h3>
                        <p className='mt-5'>{blogCard2?.coreVitalsIntro}</p>

                        <ol>
                            <li>{blogCard2?.coreVitals1}</li>
                            <li>{blogCard2?.coreVitals2}</li>
                            <li>{blogCard2?.coreVitals3}</li>
                        </ol>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.additionalMetricsTitle}</h3>
                        <p className='mt-5'>{blogCard2?.additionalMetricsIntro}</p>

                        <ul>
                            <li>{blogCard2?.additionalMetrics1}</li>
                            <li>{blogCard2?.additionalMetrics2}</li>
                            <li>{blogCard2?.additionalMetrics3}</li>
                            <li>{blogCard2?.additionalMetrics4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.bottlenecksTitle}</h2>
                        <p className='mt-5'>{blogCard2?.bottlenecksIntro}</p>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.unoptimizeImg}</h3>
                        <p className='mt-5'>{blogCard2?.unoptimizeImgNote}</p>
                        <ul>
                            <li>{blogCard2?.imageIssue1}</li>
                            <li>{blogCard2?.imageIssue2}</li>
                            <li>{blogCard2?.imageIssue3}</li>
                            <li>{blogCard2?.imageIssue4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.renderBlock}</h3>
                        <p className='mt-5'>{blogCard2?.renderBlockNote}</p>
                        <ul>
                            <li>{blogCard2?.renderBlocking1}</li>
                            <li>{blogCard2?.renderBlocking2}</li>
                            <li>{blogCard2?.renderBlocking3}</li>
                            <li>{blogCard2?.renderBlocking4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.hostingIssueHead}</h3>
                        <p className='mt-5'>{blogCard2?.hostingIssueNote}</p>
                        <ul>
                            <li>{blogCard2?.hostingIssue1}</li>
                            <li>{blogCard2?.hostingIssue2}</li>
                            <li>{blogCard2?.hostingIssue3}</li>
                            <li>{blogCard2?.hostingIssue4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.optimizationTitle}</h2>
                        <p className='mt-5'>{blogCard2?.optimizationNote}</p>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.imageOptimization}</h3>
                        <ul>
                            <li>{blogCard2?.imageOptimization1}</li>
                            <li>{blogCard2?.imageOptimization2}</li>
                            <li>{blogCard2?.imageOptimization3}</li>
                            <li>{blogCard2?.imageOptimization4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.codeOptimization}</h3>
                        <ul>
                            <li>{blogCard2?.codeOptimization1}</li>
                            <li>{blogCard2?.codeOptimization2}</li>
                            <li>{blogCard2?.codeOptimization3}</li>
                            <li>{blogCard2?.codeOptimization4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.cachingStrategy}</h3>
                        <ul>
                            <li>{blogCard2?.cachingStrategy1}</li>
                            <li>{blogCard2?.cachingStrategy2}</li>
                            <li>{blogCard2?.cachingStrategy3}</li>
                            <li>{blogCard2?.cachingStrategy4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.serverOptimization}</h3>
                        <ul>
                            <li>{blogCard2?.serverOptimization1}</li>
                            <li>{blogCard2?.serverOptimization2}</li>
                            <li>{blogCard2?.serverOptimization3}</li>
                            <li>{blogCard2?.serverOptimization4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.testingTitle}</h2>
                        <ul>
                            <li>{blogCard2?.testingTool1}</li>
                            <li>{blogCard2?.testingTool2}</li>
                            <li>{blogCard2?.testingTool3}</li>
                            <li>{blogCard2?.testingTool4}</li>
                        </ul>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.monitoringSolution}</h3>
                        <p className='mt-5'>{blogCard2?.monitoringSolutionNote}</p>
                        <ul>
                            <li>{blogCard2?.monitoringSolution1}</li>
                            <li>{blogCard2?.monitoringSolution2}</li>
                            <li>{blogCard2?.monitoringSolution3}</li>
                            <li>{blogCard2?.monitoringSolution4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.mobilePerfTitle}</h2>

                        <ul>
                            <li>{blogCard2?.mobilePerf1}</li>
                            <li>{blogCard2?.mobilePerf2}</li>
                            <li>{blogCard2?.mobilePerf3}</li>
                            <li>{blogCard2?.mobilePerf4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.futurePerfTitle}</h2>
                        <p className='mt-5'>{blogCard2?.futurePerfNote}</p>

                        <ul>
                            <li>{blogCard2?.futurePerf1}</li>
                            <li>{blogCard2?.futurePerf2}</li>
                            <li>{blogCard2?.futurePerf3}</li>
                            <li>{blogCard2?.futurePerf4}</li>
                        </ul>

                        <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard2?.conclusionTitle}</h2>
                        <p className='mt-5'>{blogCard2?.conclusion1}</p>
                        <p className='mt-5'>{blogCard2?.conclusion2}</p>

                        <h3 className='text-xl my-5 font-semibold'>{blogCard2?.ctaTitle}</h3>
                        <p className='mt-5'>{blogCard2?.ctaText}</p>

                        <p className='mt-5'>{blogCard2?.closingNote}</p>

                        <button onClick={close} className='absolute top-1 lg:top-10 right-2 lg:right-10 text-4xl hover:text-[#598bc7] cursor-pointer'>
                            <MdOutlineCancel />
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog2