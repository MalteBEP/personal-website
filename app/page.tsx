'use client';
import img from '../public/img.png'
import Link from "next/link";
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { showToast } from "nextjs-toast-notify";


export default function Home() {
    
    const CopyToClipboard = async () => {
        
        try 
        {
            await navigator.clipboard.writeText("Maltepedersen03@gmail.com").then(() => {
                showToast.success("Copied to clipboard", {
                    duration: 3000,
                    progress: true,
                    position: "bottom-center",
                    transition: "slideInUp",
                    icon: '',
                    sound: false,
                    
                })
            });
        }
        catch (error)
        {
            console.log(error);
        }
        
    }
    
  return (
      <div>
          
          <section id="home" className="min-h-screen">
              <div className="absolute top-0.5 flex flex-row items-center justify-center min-h-screen w-full">
                  <div className="px-20">
                      <h1 className="text-4xl text-white px-5">Hello, I'm </h1>
                      <h1 className="text-4xl text-indigo-400 px-5">Malte Pedersen</h1>
                      <h6 className="text-indigo-100 text-l opacity-60 px-5">Software Technology Student @ SDU</h6>

                      <h1 className="mt-10 text-xl text-white px-5">Tech Stack </h1>
                      <div className="flex flex-row">
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Next.js</p>
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">React Native</p>
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">C#</p>
                      </div>
                      <div className="flex flex-row">
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">SQL</p>
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Firebase</p>
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Tailwind CSS</p>
                      </div>
                      <div className="flex flex-row">
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Avalonia UI</p>
                          <p className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Python</p>
                      </div>
                      <div className="items-center mt-5 ml-5">
                          <Link href="#projects" className="text-white underline transition-all duration-300 opacity-90 hover:opacity-70">
                              View my projects 
                          </Link>
                          <a className="text-white transition-all mr-2 ml-2 opacity-90">or</a>
                          <Link href="#contact" className="text-white underline transition-all duration-300 hover:opacity-70 opacity-90">
                              contact me
                          </Link>                   
                      </div>
                      
                  </div>
                  <div className="">
                      <img src={ img.src } className="size-7/12 rounded-b-full"/>
                      
                  </div>
                  
                  
              </div>
              
          </section>

          <section id="about" className="flex flex-col items-center min-h-screen w-full">
              <p className="text-5xl text-white py-25">This is the About page</p>
          </section>

          <section id="projects" className="flex flex-col items-center min-h-screen w-full">
              <p className="text-5xl text-white py-25">This is the projects</p>
          </section>

          <section id="contact" className="flex flex-col items-center min-h-screen w-full">
              <div className="flex flex-row items-center min-h-screen w-full">
                  <div className="flex flex-col items-center min-h-screen w-full py-30 ml-56">
                      <p className="text-white text-5xl pr-60">Let's Connect</p>
                      <p className="text-white text-lg pl-1.5">Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.</p>
                      <div className="items-center w-full bg-white/5 rounded-xl p-5 border-x-1 border-y-1 border-white/15 shadow-lg mt-5">
                          <p className="text-green-400 font-mono mb-0.5 ">// Personal Profile</p>
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
                              <p className="text-orange-300 font-mono mb-0.5 mr-1">"Learning and improving"</p>
                          </div>
                          <p className="text-white/90 font-mono mb-0.5">{'};'}</p>
                          <p className="text-green-400 font-mono mt-4 mb-0.5">// Final Thought</p>
                          <div className="flex flex-row">
                              <p className="text-purple-400 font-mono mb-0.5">Console</p>
                              <p className="text-white/90 font-mono mb-0.5">.</p>
                              <p className="text-emerald-400 font-mono mb-0.5">WriteLine</p>
                              <p className="text-white/90 font-mono mb-0.5">(</p>
                              <p className="text-orange-300 font-mono mb-0.5">"Ready to connect! -{'>'}"</p>
                              <p className="text-white/90 font-mono mb-0.5">);</p>
                          </div>
                          
                      </div>
                  </div>
                  
                  <div className="w-3/12"></div>
                  
                  <div className="flex flex-col justify-center min-h-screen w-full">
                      <a className="text-5xl text-indigo-400 mb-2">Contact</a>
                      <div className="flex flex-row mb-4">
                          <IoIosMail className="text-white text-4xl mr-2"/>
                          <p onClick={CopyToClipboard} className="text-indigo-100 text-2xl py-0.5 opacity-95 hover:opacity-70 hover:underline">Maltepedersen03@gmail.com</p>
                      </div>

                      <div className="flex flex-row mb-4">
                          <FaLinkedin className="text-white text-4xl mr-2"/>
                          <Link href="https://www.linkedin.com/in/malte-pedersen-886a57396/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO5%2F4%2FtFpRBOlLsrBPNylAA%3D%3D" className="text-indigo-100 text-2xl py-0.5 opacity-95 hover:opacity-70 hover:underline">Malte Pedersen</Link>
                      </div>
                     
                      <div className="flex flex-row">
                          <FaGithub className="text-white text-4xl mr-2"/>
                          <Link href="https://github.com/MalteBEP" className="text-indigo-100 text-2xl py-0.5 opacity-95 hover:opacity-70 hover:underline">MalteBEP</Link>
                      </div>
                  </div>
              </div>
          </section>
      </div>);
}
