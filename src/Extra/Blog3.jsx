"use client"
import React from 'react'
import { useLanguage } from '../../public/contexts/LanguageContext'
import { MdOutlineCancel } from 'react-icons/md'

const Blog3 = ({ show, close }) => {

    const { t } = useLanguage()
    const blogCard3 = t?.blog?.blogCard3 || []
    return (
        <>
            <div className={show ? "block" : "hidden"}>
                <div onClick={close} className='w-full inset-0 bg-[#000000cc] xl:flex justify-center items-center z-50 tracking-widest py-10 px-5'>
                    <ul onClick={(e) => e.stopPropagation()} className='xl:w-[1400px] pt-10 lg:p-10 bg-[#fff] rounded-xl relative z-[100] text-lg tracking-widest p-5'>

                            <header className='mt-5'>
                                <h1 className='text-4xl'>{blogCard3?.blogHead}</h1>
                                <time className='text-[16px] sm:text-lg lg:text-xl'>{blogCard3?.date}</time>
                            </header>

                            <img loading='lazy' className='mt-10' src={blogCard3?.img} alt="AI concept with 3D AI letters on blue circuit board background" />

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard3?.introduction}</h2>
                            <p className='mt-5'>{blogCard3?.introInfo}</p>

                            <p className='mt-5'>{blogCard3?.explore}</p>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard3?.aiWeb}</h2>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.design}</h3>
                            <p className='mt-5'>{blogCard3?.designNote}</p>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.aiImgGenerate}</h4>
                            <ul>
                                <li>{blogCard3?.aiImgGenerate1}</li>
                                <li>{blogCard3?.aiImgGenerate2}</li>
                                <li>{blogCard3?.aiImgGenerate3}</li>
                            </ul>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.autoPrototype}</h4>
                            <ul>
                                <li>{blogCard3?.autoPrototype1}</li>
                                <li>{blogCard3?.autoPrototype2}</li>
                                <li>{blogCard3?.autoPrototype3}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.designProcessNote}</p>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.autoCode}</h3>
                            <p className='mt-5'>{blogCard3?.autoCodeNote}</p>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.aiCodeAssist}</h4>
                            <ul>
                                <li>{blogCard3?.aiCodeAssist1}</li>
                                <li>{blogCard3?.aiCodeAssist2}</li>
                                <li>{blogCard3?.aiCodeAssist3}</li>
                            </ul>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.lowCode}</h4>
                            <ul>
                                <li>{blogCard3?.lowCode1}</li>
                                <li>{blogCard3?.lowCode2}</li>
                                <li>{blogCard3?.lowCode3}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.stanfordStudy}</p>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.personalization}</h3>
                            <p className='mt-5'>{blogCard3?.personalizationNote}</p>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.dynamicContent}</h4>
                            <ul>
                                <li>{blogCard3?.dynamicContent1}</li>
                                <li>{blogCard3?.dynamicContent2}</li>
                                <li>{blogCard3?.dynamicContent3}</li>
                            </ul>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.behaviorPrediction}</h4>
                            <ul>
                                <li>{blogCard3?.behaviorPrediction1}</li>
                                <li>{blogCard3?.behaviorPrediction2}</li>
                                <li>{blogCard3?.behaviorPrediction3}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.personalizationNote2}</p>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.testingQA}</h3>
                            <p className='mt-5'>{blogCard3?.testingQANote}</p>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.autoTesting}</h4>
                            <ul>
                                <li>{blogCard3?.autoTesting1}</li>
                                <li>{blogCard3?.autoTesting2}</li>
                                <li>{blogCard3?.autoTesting3}</li>
                            </ul>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.bugDetection}</h4>
                            <ul>
                                <li>{blogCard3?.bugDetection1}</li>
                                <li>{blogCard3?.bugDetection2}</li>
                                <li>{blogCard3?.bugDetection3}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.deloitteReport}</p>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard3?.keyTech}</h2>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.nlp}</h4>
                            <p className='mt-5'>{blogCard3?.nlpNote}</p>

                            <p className='mt-5'><strong>{blogCard3?.nlpApplications}</strong></p>
                            <ul>
                                <li>{blogCard3?.nlp1}</li>
                                <li>{blogCard3?.nlp2}</li>
                                <li>{blogCard3?.nlp3}</li>
                                <li>{blogCard3?.nlp4}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.nlpNote2}</p>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.computerVision}</h4>
                            <p className='mt-5'>{blogCard3?.computerVisionNote}</p>

                            <p className='mt-5'><strong>{blogCard3?.computerVisionApplications}</strong></p>
                            <ul>
                                <li>{blogCard3?.computerVision1}</li>
                                <li>{blogCard3?.computerVision2}</li>
                                <li>{blogCard3?.computerVision3}</li>
                                <li>{blogCard3?.computerVision4}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.computerVisionNote2}</p>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.mlPredictive}</h4>
                            <p className='mt-5'>{blogCard3?.mlPredictiveNote}</p>

                            <p className='mt-5'><strong>{blogCard3?.mlPredictiveApplications}</strong></p>
                            <ul>
                                <li>{blogCard3?.mlPredictive1}</li>
                                <li>{blogCard3?.mlPredictive2}</li>
                                <li>{blogCard3?.mlPredictive3}</li>
                                <li>{blogCard3?.mlPredictive4}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.mlPredictiveNote2}</p>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard3?.practicalApplications}</h2>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.aiChatbots}</h3>
                            <p className='mt-5'>{blogCard3?.aiChatbotsNote}</p>

                            <ul>
                                <li>{blogCard3?.aiChatbots1}</li>
                                <li>{blogCard3?.aiChatbots2}</li>
                                <li>{blogCard3?.aiChatbots3}</li>
                                <li>{blogCard3?.aiChatbots4}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.aiChatbotsNote2}</p>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.contentGen}</h3>
                            <p className='mt-5'>{blogCard3?.contentGenNote}</p>

                            <ul>
                                <li>{blogCard3?.contentGen1}</li>
                                <li>{blogCard3?.contentGen2}</li>
                                <li>{blogCard3?.contentGen3}</li>
                                <li>{blogCard3?.contentGen4}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.contentGenNote2}</p>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.smartForms}</h3>
                            <p className='mt-5'>{blogCard3?.smartFormsNote}</p>

                            <ul>
                                <li>{blogCard3?.smartForms1}</li>
                                <li>{blogCard3?.smartForms2}</li>
                                <li>{blogCard3?.smartForms3}</li>
                                <li>{blogCard3?.smartForms4}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.smartFormsNote2}</p>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.performanceOpt}</h3>
                            <p className='mt-5'>{blogCard3?.performanceOptNote}</p>

                            <ul>
                                <li>{blogCard3?.performanceOpt1}</li>
                                <li>{blogCard3?.performanceOpt2}</li>
                                <li>{blogCard3?.performanceOpt3}</li>
                                <li>{blogCard3?.performanceOpt4}</li>
                            </ul>

                            <p className='mt-5'>{blogCard3?.performanceOptNote2}.</p>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard3?.implementingAI}</h2>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.gettingStarted}</h3>
                            <p className='mt-5'>{blogCard3?.gettingStartedNote}</p>

                            <ol>
                                <li>{blogCard3?.gettingStarted1}</li>
                                <li>{blogCard3?.gettingStarted2}</li>
                                <li>{blogCard3?.gettingStarted3}</li>
                                <li>{blogCard3?.gettingStarted4}</li>
                            </ol>

                            <h3 className='text-xl my-5 font-semibold'>{blogCard3?.challenges}</h3>
                            <p className='mt-5'>{blogCard3?.challengesNote}</p>

                            <h4 className='text-xl my-5 font-semibold'>{blogCard3?.technicalChallenges}</h4>
                            <ul>
                                <li>{blogCard3?.technicalChallenges1}</li>
                                <li>{blogCard3?.technicalChallenges2}</li>
                                <li>{blogCard3?.technicalChallenges3}</li>
                                <li>{blogCard3?.technicalChallenges4}</li>
                            </ul>

                            <h2 className='text-2xl mt-10 mb-5 font-semibold'>{blogCard3?.conclusion}</h2>
                            <p>{blogCard3?.conclusion1}</p>
                            <p>{blogCard3?.conclusion2}</p>
                            <p>{blogCard3?.closingNote}</p>

                        <button onClick={close} className='absolute top-1 lg:top-10 right-2 lg:right-10 text-4xl hover:text-[#598bc7] cursor-pointer'>
                            <MdOutlineCancel />
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Blog3