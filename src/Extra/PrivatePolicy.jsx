import React from 'react'
import { MdOutlineCancel } from "react-icons/md"

const PrivatePolicy = ({ show, close }) => {

    return (
        <>
            <div className={show ? "block" : "hidden"}>
                <div onClick={close} className='w-full inset-0 bg-[#000000cc] xl:flex justify-center items-center z-50 tracking-widest py-10'>
                    <ul onClick={(e) => e.stopPropagation()} className='xl:w-[1200px] pt-10 p-10 bg-[#fff] rounded-xl relative z-[100] text-lg '>

                        <li className='font-bold text-2xl'>
                            Datenschutzerklärung
                        </li>
                        <li>Stand: 14. April 2025</li>

                        <li className='mt-6'>
                            Wir freuen uns über Ihr Interesse an unserem Projekt Codaro, betrieben von der Talentia (nachfolgend „wir“, „uns“). Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung personenbezogener Daten bei der Nutzung unserer <br />
                            Website <a className='text-[#6297d3]' href="https://codano-p.vercel.app">https://codano-p.vercel.app</a>.
                        </li>

                        <li className='mt-6'>
                            1. <span className='font-bold'>Verantwortlicher</span><br />
                            Talentia <br />
                            Bussardplatz 11 <br />
                            +4917687850503 <br />
                            vladik.go@icloud.com <br />
                        </li>

                        <li className='mt-6'>
                            Verantwortlich für die Datenverarbeitung auf dieser Website ist die Talent GmbH.
                        </li>

                        <li className='mt-6'>
                            2. <span className='font-bold'>Zugriffsdaten (Server-Logfiles)</span>
                            Bei jedem Zugriff auf unsere Website erhebt unser Hosting-Provider automatisch Daten und Informationen in sogenannten Server-Logfiles. Diese Daten beinhalten:
                        </li>

                        <li className='mt-6'>
                            Besuchte Seite <br />
                            Datum und Uhrzeit des Zugriffs <br />
                            Menge der gesendeten Daten in Byte <br />
                            Quelle/Verweis, von welchem Sie auf die Seite gelangten <br />
                            Verwendeter Browser <br />
                            Verwendetes Betriebssystem <br />
                            IP-Adresse (anonymisiert) <br />
                            Diese Daten dienen ausschließlich der technischen Überwachung und der Sicherheit des Angebots und werden nicht mit anderen Datenquellen zusammengeführt.
                        </li>

                        <li className='mt-6'>
                            3. <span className='font-bold'>Cookies</span>
                            Unsere Website verwendet keine Cookies zur Benutzerverfolgung oder für Werbezwecke. Falls zukünftig Dienste wie Google Analytics oder ähnliches eingebunden werden, wird diese Datenschutzerklärung entsprechend angepasst und eine Cookie-Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO eingeholt.
                        </li>

                        <li className='mt-6'>
                            4. <span className='font-bold'>Kontaktaufnahme</span>
                            Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben (z.B. Name, E-Mail-Adresse, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert.
                        </li>

                        <li className='mt-6'>
                            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder -anbahnung)
                        </li>

                        <li className='mt-6'>
                            5. <span className='font-bold'>Drittanbieter & Tools</span><br />
                            Hosting: <br />
                            Unsere Website wird über Vercel Inc. gehostet. <br />
                            Vercel verarbeitet Daten in unserem Auftrag im Rahmen eines Auftragsverarbeitungsvertrags nach Art. 28 DSGVO.
                        </li>

                        <li className='mt-6'>
                            Weitere Dienste: <br />
                            Aktuell verwenden wir keine Analyse- oder Tracking-Tools (z.B. Google Analytics). Falls sich dies ändert, werden wir dies hier transparent aufführen.
                        </li>

                        <li className='mt-6'>
                            6. <span className='font-bold'>Ihre Rechte</span><br />
                            Sie haben das Recht: <br />
                            auf Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO), <br />
                            auf Berichtigung unrichtiger Daten (Art. 16 DSGVO), <br />
                            auf Löschung Ihrer Daten (Art. 17 DSGVO), <br />
                            auf Einschränkung der Verarbeitung (Art. 18 DSGVO), <br />
                            auf Datenübertragbarkeit (Art. 20 DSGVO), <br />
                            auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), <br />
                            eine Beschwerde bei einer Aufsichtsbehörde einzureichen (Art. 77 DSGVO).
                        </li>

                        <li className='mt-6'>
                            7. <span className='font-bold'>Änderungen dieser Datenschutzerklärung</span><br />
                            Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um sie an aktuelle rechtliche Anforderungen oder Änderungen unserer Dienste anzupassen.
                        </li>

                        <li className='mt-6'>
                            Fragen? <br />
                            Bei Fragen zum Datenschutz wenden Sie sich bitte an: <br />
                            <a className='text-[#6297d3]' href="https://vladik.go@icloud.com">
                                vladik.go@icloud.com
                            </a>
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

export default PrivatePolicy