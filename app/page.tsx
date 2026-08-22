'use client';
import img from '../public/img.png'
import phone1 from '../public/phone1.png'
import phone2 from '../public/phone2.png'
import Link from "next/link";
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { showToast } from "nextjs-toast-notify";
import { handleScroll } from '@/utils/handleScroll'

import { SkillBox } from '@/components/SkillBox'
import { CvBox } from '@/components/CvBox'



export default function Home() {
    
  return (
      <div>
          <section id="home">
              <div className="relative flex flex-row items-center justify-center w-full mt-28">
                  <div className="px-20">
                      <p className="text-4xl text-mauve-600 px-5 font-bold italic">Hello, I'm </p>
                      <p className="text-4xl text-mauve-400 font-bold italic px-5">Malte Pedersen</p>
                      <p className="text-neutral-600 text-l opacity-60 px-5">Software Technology Student @ SDU</p>
                      <p className="mt-10 text-xl text-mauve-800 px-5">Technologies & skillset</p>
                      <div className="flex flex-row ms-4">
                          <SkillBox title={'Next.js'} description={'Built a portfolio website to showcase my projects, skills, and professional background. Developed the site from scratch and deployed it via GitHub Pages to create a personal brand home.'}></SkillBox>
                          <SkillBox title={'React Native'} description={'Used the Expo framework to build a mobile Pokémon card collection tracker. Focused on mobile UI design and integrating the C# backend.'}></SkillBox>
                          <SkillBox title={'C#'} description={'Primary programming language used for university coursework and personal projects.'}></SkillBox>
                      </div>
                      
                      <div className="flex flex-row ms-4">
                          <SkillBox title={'PostgreSQL'} description={'Main database language used for university projects. Learned how to design databases, set up tables, and write queries to retrieve data for applications.'}></SkillBox>
                          <SkillBox title={'Firebase'} description={'Used to handle user authentication for my Pokémon card collection app. Implemented to ensure a smooth login experience.'}></SkillBox>
                          <SkillBox title={'Tailwind CSS'} description={'Styled my portfolio site with Tailwind CSS to create a clean and organized layout that showcases my website effectively.'}></SkillBox>
                      </div>
                      
                      <div className="flex flex-row ms-4">
                          <SkillBox title={'Avalonia UI'} description={'Developed the graphical interface for two university projects using Avalonia UI. This involved collaborating with a team to build software that runs across different platforms.'}></SkillBox>
                          <SkillBox title={'Python'} description={'Used Python to complete an algorithm project focused on performance and time complexity. This was part of a Computer Systems course where I learned to analyze how different algorithms impact speed.'}></SkillBox>
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




          <section id="about" className="flex flex-col items-center justify-center w-full">
              <div className="flex flex-row max-w-5xl w-full mt-28 items-start">
                  
                  <div className="flex flex-col mr-10 sticky top-28">
                      <p className="text-4xl font-bold italic text-mauve-600 ">
                          My <br /> Curriculum <br />
                      </p>
                      <p className="text-4xl font-bold italic text-mauve-400 ">
                          Vitae
                      </p>
                  </div>
                  
                  <div className="flex flex-col w-full">
                      <CvBox title={'Automotive Painter | OJ Autolak'}
                             year={'2020 - 2024'}
                             description={'Completed a 4-year apprenticeship that built strong problem-solving skills, attention to detail, and a focus on quality.'}
                             opacity={'bg-mauve-600/95'}>
                      </CvBox>
                      
                      <CvBox title={'Engineering Foundation Course | University of Southern Denmark'}
                             year={'2024 - 2025'}
                             description={'Completed an intensive 1-year foundation course focused on mathematics, natural sciences and technical communication to prepare for higher engineering studies.'}
                             opacity={'bg-mauve-600/90'}>
                      </CvBox>
                      
                      <CvBox title={'BEng in Software Technology | University of Southern Denmark'}
                             year={'2025 - Present'} 
                             description={'Building engineering skills in software design and system development through lectures and hands-on project work.'} 
                             opacity={'bg-mauve-600/85'}>
                      </CvBox>
                      
                      <CvBox title={'Studentworker | OJ Autolak'}
                             year={'2025 - Present'}
                             description={'Working as a qualified journeyman automotive painter in a student position. Taking part in both preparatory work and painting in the booth, working both independently and as part of a team.'}
                             opacity={'bg-mauve-600/80'}>
                      </CvBox>
                      
                      <CvBox title={'Future'}
                             year={'2026 - Present'}
                             description={'Currently seeking a student worker position to gain practical experience and contribute to team projects.'}
                             opacity={'bg-mauve-600/75'}>
                      </CvBox>
                  </div>
              </div>
          </section>
          
          
          

          <section id="projects" className="flex flex-col">
              <div className="flex flex-row items-center min-h-screen w-full">
                  <div className="flex flex-col ml-20 mr-5 max-w-1/2">
                        <p className="text-4xl text-mauve-600 font-bold italic">Pokémon Card Tracker &</p>
                        <p className="text-4xl text-mauve-600 font-bold italic">Collection App</p>
                      
                      <div className="flex flex-row">
                          <div className="flex flex-col bg-green-400/50 rounded-xl border-2 border-mauve-400 p-5 mr-3 mt-10">
                              <p className=" text-mauve-800/80 italic font-bold"> Completed </p>
                              <p className="text-mauve-800/80 mt-2"> Discover: Search through Pokémon TCG expansions and cards.</p>
                              <p className=" text-mauve-800/80 mt-2"> Track: View live market prices and price history details.</p>
                          </div>

                          <div className="flex flex-col bg-orange-300/50 rounded-xl border-2 border-mauve-400 p-5 mr-3 mt-10">
                              <p className=" text-mauve-800/80 italic font-bold"> To Do </p>
                              <p className="text-mauve-800/80 mt-2"> Manage: Create custom digital binders to track personal collection values over time.</p>
                          </div>
                      </div>
                          <Link href="https://github.com/MalteBEP/AppProject" 
                                className="text-mauve-600 font-bold italic font-bold mt-10 underline">Read more about this project on the GitHub page</Link>
                      
                  </div>
                  
                  <img src={phone1.src} className="w-3/12"/>
                  <img src={phone2.src} className="w-3/12"/>
              </div>
          </section>

          
          
          <section id="contact">
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
          </section>
      </div>);
}
