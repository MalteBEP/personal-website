'use client';
import img from '../public/img.png'
import phone1 from '../public/phone1.png'
import phone2 from '../public/phone2.png'
import Link from "next/link";
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { showToast } from "nextjs-toast-notify";
import { handleScroll } from "@/components/Header"



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
                      <p className="text-4xl text-mauve-600 px-5 font-bold italic">Hello, I'm </p>
                      <p className="text-4xl text-mauve-400 font-bold italic px-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">Malte Pedersen</p>
                      <p className="text-neutral-600 text-l opacity-60 px-5">Software Technology Student @ SDU</p>
                      <p className="mt-10 text-xl text-mauve-800 px-5">Technologies & skillset</p>
                      <div className="flex flex-row">
                          

                          {/* Next.js ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 ml-4 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>Next.js</p>
                              <div className="left-1/2 transform -translate-x-1/2 mt-1  hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-mauve-600 p-4 rounded-xl w-96 shadow-x4 absolute top-full">
                                  <p>Built a portfolio website to showcase my projects, skills, and professional background. Developed the site from scratch and deployed it via GitHub Pages to create a personal brand home.</p>
                              </div>
                          </div>
                          

                          {/* React Native ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>React Native</p>
                              <div className="left-1/2 transform -translate-x-1/2 mt-1 hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-mauve-600 p-4 rounded-xl w-96 shadow-x4 absolute top-full">
                                  Used the Expo framework to build a mobile Pokémon card collection tracker. Focused on mobile UI design and integrating the C# backend.
                              </div>
                          </div>
                          

                          {/* C# ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>C#</p>
                              <div className="left-1/2 transform -translate-x-1/2 mt-1 hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-mauve-600 p-4 rounded-xl w-99 shadow-x4 absolute top-full">
                                  Primary programming language used for university coursework and personal projects.
                              </div>
                          </div>
                          
                      </div>
                      
                      <div className="flex flex-row">

                          
                          {/* SQL ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 ml-4 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>PostgreSQL</p>
                              <div className="left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-mauve-600 p-4 rounded-xl w-96 shadow-x4 absolute z-1 top-full">
                                  Main database language used for university projects. Learned how to design databases, set up tables, and write queries to retrieve data for applications.
                              </div>
                          </div>


                          {/* Firebase ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>Firebase</p>
                              <div className="left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-mauve-600 p-4 rounded-xl w-96 shadow-x4 absolute z-1 top-full">
                                  Used to handle user authentication for my Pokémon card collection app. Implemented to ensure a smooth login experience.
                              </div>
                          </div>


                          {/* Tailwind CSS ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>Tailwind CSS</p>
                              <div className="left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-mauve-600 p-4 rounded-xl w-99 shadow-x4 absolute z-1 top-full">
                                  Styled my portfolio site with Tailwind CSS to create a clean and organized layout that showcases my website effectively.
                              </div>
                          </div>
                          
                          
                      </div>
                      <div className="flex flex-row">
                          {/* Avalonia UI ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 ml-4 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>Avalonia UI</p>
                              <div className="left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-slate-500 p-4 rounded-xl w-96 shadow-x4 absolute z-1 top-full">
                                  Developed the graphical interface for two university projects using Avalonia UI. This involved collaborating with a team to build software that runs across different platforms.
                              </div>
                          </div>


                          {/* Python ///////////////////////////////////////////////> */}
                          <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
                              <p>Python</p>
                              <div className="left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-slate-500 p-4 rounded-xl w-96 shadow-x4 absolute z-1 top-full">
                                  Used Python to complete an algorithm project focused on performance and time complexity. This was part of a Computer Systems course where I learned to analyze how different algorithms impact speed.
                              </div>
                          </div>
                      </div>
                      <div className="items-center mt-5 ml-5">
                          <button onClick={() => handleScroll("#contact")} className="text-neutral-900 underline transition-all duration-300 opacity-90 hover:opacity-40">
                              View my projects 
                          </button>
                          <a className="text-neutral-900 transition-all mr-2 ml-2 opacity-90">or</a>
                          <button onClick={() => handleScroll("#contact")} className="text-neutral-900 underline transition-all duration-300 hover:opacity-40 opacity-90">
                              contact me
                          </button>                   
                      </div>
                  </div>
                  <div className="">
                      <img src={ img.src } className="size-7/12 rounded-b-full drop-shadow-2xl"/>
                  </div>
              </div>
          </section>




          <section id="about" className="flex flex-col min-h-screen items-center justify-center w-full px-6 py-20">

              <div className="flex flex-row max-w-5xl w-full mt-5">
                  
                  <div className="flex flex-col mr-10">
                      <p className="text-4xl font-bold italic text-mauve-600 ">
                          My <br /> Curriculum <br />
                      </p>
                      <p className="text-4xl font-bold italic text-mauve-400 ">
                          Vitae
                      </p>
                  </div>

                  
                  <div className="flex flex-col w-full">
                      <div className="bg-mauve-600 border-2 border-mauve-400 mb-4 p-5 rounded-xl">
                          <div className="flex flex-col mb-2">
                              <p className="font-bold text-mauve-300">2020 - 2024</p>
                              <p className="font-bold text-white"> Automotive Painter | OJ Autolak</p>
                          </div>
                          <p className="text-sm text-mauve-100/80">
                              Completed a 4-year apprenticeship that built strong problem-solving skills, attention to detail, and a focus on quality.
                          </p>
                      </div>
                      
                      <div className="bg-mauve-600/90 border-2 border-mauve-400 mb-4 p-5 rounded-xl">
                          <div className="flex flex-col mb-2">
                              <p className="font-bold text-mauve-300 text-xs">2024 - 2025</p>
                              <p className="font-bold text-white">Engineering Foundation Course | University of Southern Denmark</p>
                          </div>
                          <p className="text-sm text-mauve-100/80 leading-relaxed">
                              Completed an intensive 1-year foundation course focused on mathematics, natural sciences and technical communication to prepare for higher engineering studies.
                          </p>
                      </div>
                      
                      <div className="bg-mauve-600/85 border-2 border-mauve-400 mb-4 p-5 rounded-xl">
                          <div className="flex flex-col mb-2">
                              <p className="font-bold text-mauve-300 text-xs ">2025 - Present</p>
                              <p className="font-bold text-white">BEng in Software Technology | University of Southern Denmark</p>
                          </div>
                          <p className="text-sm text-mauve-100/80 leading-relaxed">
                              Building engineering skills in software design and system development through lectures and hands-on project work.
                          </p>
                      </div>
                      
                      <div className="bg-mauve-600/80 border-2 border-mauve-400 mb-4 p-5 rounded-xl">
                          <div className="mb-2">
                              <p className="font-bold text-white">Future</p>
                          </div>
                          <p className="text-sm text-mauve-100/80">
                              Currently seeking a student worker position to gain practical experience and contribute to team projects. <br/>   
                          </p>
                      </div>

                  </div>

              </div>

          </section>
          
          
          

          <section id="projects" className="flex flex-col items-center min-h-screen w-full pt-34">
              <div className="flex flex-row">
                  <div className="flex flex-col ml-20 mr-5 max-w-1/2">
                        <p className="text-3xl text-mauve-600 font-bold italic">Pokémon Card Tracker &</p>
                        <p className="text-3xl text-mauve-600 font-bold italic">Collection App</p>
                      
                      <div className="flex flex-row">
                          <div className="flex flex-col bg-green-400/50 rounded-xl border-2 border-mauve-400 p-5 mr-3 mt-10">
                              <p className="text-lg text-mauve-800/80 italic font-bold"> Completed </p>
                              <p className="text-sm text-mauve-800/80 mt-2"> Discover: Search through Pokémon TCG expansions and cards.</p>
                              <p className="text-sm text-mauve-800/80 mt-2"> Track: View live market prices and price history details.</p>
                          </div>

                          <div className="flex flex-col bg-orange-300/50 rounded-xl border-2 border-mauve-400 p-5 mr-3 mt-10">
                              <p className="text-lg text-mauve-800/80 italic font-bold"> To Do </p>
                              <p className="text-sm text-mauve-800/80 mt-2"> Manage: Create custom digital binders to track personal collection values over time.</p>
                          </div>
                      </div>
                          <Link href="https://github.com/MalteBEP/AppProject" 
                                className="text-3xl text-mauve-600 font-bold italic font-bold mt-10 underline">Read more about this project on the GitHub page</Link>
                      
                  </div>
                  
                  <img src={phone1.src} className="w-3/12"/>
                  <img src={phone2.src} className="w-3/12"/>
              </div>
              
          </section>

          
          
          <section id="contact" className="flex flex-col items-center min-h-screen w-full">
              <div className="flex flex-row items-center min-h-screen w-full">
                  <div className="flex flex-col items-center justify-center min-h-screen w-full py-30 ml-56">
                      <p className="text-mauve-600 text-5xl pr-60">Let's Connect</p>
                      <p className="text-neutral-700 text-lg pl-1.5">Feel free to reach out. I'm always open for new projects, ideas, or opportunities.</p>
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
                  
                  <div className="flex flex-col justify-center min-h-screen w-full">
                      <a className="text-5xl text-mauve-600 mb-2 mt-30">Contact</a>
                      <div className="flex flex-row mb-4">
                          <IoIosMail className="text-blue-400 text-4xl mr-2"/>
                          <p onClick={CopyToClipboard} className="text-neutral-700 text-2xl py-0.5 opacity-95 hover:opacity-70 hover:underline">Maltepedersen03@gmail.com</p>
                      </div>

                      <div className="flex flex-row mb-4">
                          <FaLinkedin className="text-mauve-700 text-4xl mr-2"/>
                          <Link href="https://www.linkedin.com/in/malte-pedersen-886a57396/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO5%2F4%2FtFpRBOlLsrBPNylAA%3D%3D" 
                                className="text-neutral-700 text-2xl py-0.5 opacity-95 hover:opacity-70 hover:underline">Malte Pedersen</Link>
                      </div>
                     
                      <div className="flex flex-row">
                          <FaGithub className="text-black text-4xl mr-2"/>
                          <Link href="https://github.com/MalteBEP" className="text-neutral-700 text-2xl py-0.5 opacity-95 hover:opacity-70 hover:underline">MalteBEP</Link>
                      </div>
                  </div>
              </div>
          </section>
      </div>);
}
