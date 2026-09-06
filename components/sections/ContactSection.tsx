import {IoIosMail} from "react-icons/io";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Link from "next/link";

export function ContactSection () {
    
    return (

        <div className="flex flex-row items-center w-full">
            <div className="flex flex-col items-center justify-center w-full ms-48 mt-28 mb-28">
                <p className="text-mauve-600 text-4xl me-76.5 font-bold italic">Let's Connect</p>
                <p className="text-neutral-700 pl-1.5">Feel free to reach out. I'm always open for new projects, ideas, or opportunities.</p>

                <div className="items-center w-full bg-mauve-800/80 border-8 border-mauve-400 rounded-xl p-5 border-x-1 border-y-1 shadow-lg mt-5">
                    <p className="text-green-400 font-mono mb-0.5">// Personal Profile</p>
                    <div className="flex flex-row ">
                        <p className="text-blue-400 font-mono mb-0.5 mr-1">var</p>
                        <p className="text-neutral-500 font-mono mb-0.5 mr-1">developer</p>
                        <p className="text-white/90 font-mono mb-0.5 mr-1"> = </p>
                        <p className="text-blue-400 font-mono mb-0.5 mr-1">new</p>
                        <p className="text-purple-400 font-mono mb-0.5 mr-1"> Developer</p>
                    </div>
                    <p className="text-white/90 font-mono mb-0.5">{'{'}</p>
                    <div className="flex flex-row">
                        <p className="text-cyan-400 font-mono mb-0.5 mr-1">Name</p>
                        <p className="text-white/90 font-mono mb-0.5 mr-1">=</p>
                        <p className="text-orange-300 font-mono mb-0.5 mr-1">"Malte Pedersen"</p>
                        <p className="text-white/90 font-mono mb-0.5">,</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-cyan-400 font-mono mb-0.5 mr-1">Location</p>
                        <p className="text-white/90 font-mono mb-0.5 mr-1">=</p>
                        <p className="text-orange-300 font-mono mb-0.5 mr-1">"Odense, Denmark"</p>
                        <p className="text-white/90 font-mono mb-0.5">,</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-cyan-400 font-mono mb-0.5 mr-1">Status</p>
                        <p className="text-white/90 font-mono mb-0.5 mr-1">=</p>
                        <p className="text-orange-300 font-mono mb-0.5 mr-1">"Student @ SDU"</p>
                        <p className="text-white/90 font-mono mb-0.5">,</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-cyan-400 font-mono mb-0.5 mr-1">Focus</p>
                        <p className="text-white/90 font-mono mb-0.5 mr-1">=</p>
                        <p className="text-orange-300 font-mono mb-0.5 mr-1">"Studying..."</p>
                    </div>
                    <p className="text-white/90 font-mono mb-0.5">{'};'}</p>
                </div>
            </div>

            <div className="w-3/12"></div>

            <div className="flex flex-col justify-center w-full">
                <a className="text-xl text-mauve-600 mb-2 mt-30">Contact</a>
                <div className="flex flex-row mb-4">
                    <IoIosMail className="text-blue-400 text-2xl mr-2"/>
                    <a href="mailto:Maltepedersen03@gmail.com" className="text-neutral-700 py-0.5 opacity-95 hover:opacity-70 hover:underline">Maltepedersen03@gmail.com</a>
                </div>

                <div className="flex flex-row mb-4">
                    <FaLinkedin className="text-mauve-700 text-2xl mr-2"/>
                    <Link href="https://www.linkedin.com/in/malte-pedersen-886a57396/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO5%2F4%2FtFpRBOlLsrBPNylAA%3D%3D"
                          className="text-neutral-700 py-0.5 opacity-95 hover:opacity-70 hover:underline">Malte Pedersen</Link>
                </div>

                <div className="flex flex-row">
                    <FaGithub className="text-black text-2xl mr-2"/>
                    <Link href="https://github.com/MalteBEP" className="text-neutral-700 py-0.5 opacity-95 hover:opacity-70 hover:underline">MalteBEP</Link>
                </div>
            </div>
        </div>
        
    );
}