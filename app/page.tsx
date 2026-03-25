import img from '../public/img.png'
import Link from "next/link";

export default function Home() {
  return (
      <div>
          
          <section id="home" className="min-h-screen">
              <div className="absolute top-0.5 flex flex-row items-center justify-center min-h-screen w-full">
                  <div className="px-20">
                      <h1 className="text-4xl text-white px-5">Hello, I'm </h1>
                      <h1 className="text-4xl text-indigo-400 px-5">Malte Pedersen</h1>
                      <h6 className="text-indigo-100 text-l opacity-60 px-5">Software Technology Student @ SDU</h6>

                      <h1 className="mt-10 text-xl text-white px-5">Tech Stack </h1>
                      <div className="justify-items-center mt-5 ml-2">
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Next.js</a>
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">React Native</a>
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">C#</a>
                      </div>
                      <div className="justify-items-center mt-6 ml-2">
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">SQL</a>
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Firebase</a>
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Tailwind CSS</a>
                      </div>
                      <div className="justify-items-center mt-6 ml-2">
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Avalonia UI</a>
                          <a className="bg-[#0C0C14] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-200">Python</a>
                      </div>
                      <div className="items-center mt-10 ml-5">
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
              <p className="text-5xl text-white py-25">This is the contact page</p>
          </section>
      </div>);
}
