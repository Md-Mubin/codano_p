import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const TermsService = ({show, close}) => {
    return (
        <>
            <div className={show ? "block" : "hidden"}>
                <div onClick={close} className='w-full inset-0 bg-[#000000cc] xl:flex justify-center items-center z-50 tracking-widest py-10'>
                    <ul onClick={(e) => e.stopPropagation()} className='xl:w-[1200px] pt-10 p-10 bg-[#fff] rounded-xl relative z-[100] text-lg '>
                        <li className='font-bold text-2xl'>
                            Allgemeine Geschäftsbedingungen (AGB)
                        </li>

                        <li className='text-xl mt-5'>
                            Stand: 14. April 2025
                        </li>

                        <li className='mt-5'>
                            Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der Website https://codaro.com und die darüber angebotenen Leistungen des Projekts Codaro, betrieben von Talentia (nachfolgend „wir“, „uns“).
                        </li>

                        <li className='mt-5'>
                            1. <span className='font-bold'>Geltungsbereich</span> <br />
                            Diese AGB gelten für alle Nutzer der Website sowie für alle Verträge, die zwischen Talentia und den Nutzern über die Website abgeschlossen werden.
                        </li>

                        <li className='mt-5'>
                            Mit der Nutzung der Website erklären Sie sich mit diesen AGB einverstanden.
                        </li>

                        <li className='mt-8'>
                            2. <span className='font-bold'>Nutzungsrechte</span> <br />
                            Alle Inhalte auf der Website - einschließlich Texte, Designs, Logos, Quellcode, Grafiken - sind urheberrechtlich geschützt und dürfen ohne unsere ausdrückliche Zustimmung nicht vervielfältigt, verbreitet oder öffentlich zugänglich gemacht werden.
                        </li>

                        <li className='mt-8'>
                            3. <span className='font-bold'>Haftung</span> <br />
                            Wir übernehmen keine Haftung für die ständige Verfügbarkeit oder die Fehlerfreiheit der angebotenen Leistungen.
                        </li>

                        <li className='mt-5'>
                            Für Schäden, die durch einfache Fahrlässigkeit verursacht wurden, haften wir nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) und nur in Höhe des vertragstypischen, vorhersehbaren Schadens.
                        </li>

                        <li className='mt-8'>
                            4. <span className='font-bold'>Verlinkungen</span> <br />
                            Unsere Website kann Links zu externen Webseiten Dritter enthalten. Für deren Inhalte übernehmen wir keine Verantwortung.
                        </li>

                        <li className='mt-8'>
                            5. <span className='font-bold'>Datenschutz</span> <br />
                            Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung
                        </li>

                        <li className='mt-8'>
                            6. <span className='font-bold'>Änderungen der AGB</span> <br />
                            Wir behalten uns vor, diese AGB jederzeit mit Wirkung für die Zukunft zu ändern. Die jeweils aktuelle Version ist auf der Website abrufbar. Bei wesentlichen Änderungen werden registrierte Nutzer per E-Mail informiert.
                        </li>

                        <li className='mt-8'>
                            7. <span className='font-bold'>Anwendbares Recht / Gerichtsstand</span> <br />
                            Es gilt das Recht der Bundesrepublik Deutschland.
                            Gerichtsstand ist, sofern gesetzlich zulässig, unser Geschäftssitz.
                        </li>

                        <li className='mt-8'>
                            8. <span className='font-bold'>Kontakt</span> <br />
                            Talentia <br />
                            Bussardplatz 11 <br />
                            +49 176 87850503 <br />
                            vladik.go@icloud.com <br />
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

export default TermsService