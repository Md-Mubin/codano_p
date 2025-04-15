import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const Imprint = ({ show, close }) => {
    return (
        <>
            <div className={show ? "block" : "hidden"}>
                <div onClick={close} className='w-full h-screen inset-0 bg-[#000000cc] xl:flex justify-center items-center z-50 tracking-widest py-10'>
                    <ul onClick={(e) => e.stopPropagation()} className='xl:w-[1200px] pt-10 p-10 bg-[#fff] rounded-xl relative z-[100] text-lg '>

                        <li className='font-bold text-3xl'>
                            Impressum
                        </li>
                        <li className='text-lg mt-4 mb-8'>Vladislav Goihman <br /> Talentia <br /> Bussardplatz 11 <br /> 85757 Karlsfeld</li>

                        <li className='font-bold text-3xl'>Kontakt</li>
                        <li className='text-lg mt-4 mb-8'>
                            Telefon: +49 17687850503<br />
                            E-Mail: <a href="mailto:vladik.go@icloud.com">vladik.go@icloud.com</a>
                        </li>

                        <li className='font-bold text-3xl'>EU-Streitschlichtung</li>
                        <li className='text-lg mt-4 mb-8'>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                            <a className='text-[#6297d3]' href="https://ec.europa.eu/consumers/odr/" target="_blank">https://ec.europa.eu/consumers/odr/</a><br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </li>

                        <li className='font-bold text-3xl'>Verbraucherstreitbeilegung/Universalschlichtungsstelle</li>
                        <li className='text-lg mt-4 mb-8'>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </li>

                        <button onClick={close} className='absolute top-1 sm:top-10 right-2 sm:right-10 text-4xl hover:text-[#598bc7] cursor-pointer'>
                            <MdOutlineCancel />
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Imprint