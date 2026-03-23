import img from '../public/img.png'

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
                      <div className="mt-5">
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">Next.js</a>
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">React Native</a>
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">C#</a>
                      </div>
                      <div className="items-center mt-6">
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">SQL</a>
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">Firebase</a>
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">Tailwind CSS</a>
                      </div>
                      <div className="items-center mt-6">
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">Avalonia UI</a>
                          <a className="bg-[#09090F] text-white rounded-full border-indigo-400 border m-3 px-5 py-2 hover:bg-indigo-400 hover:text-black duration-300">Python</a>
                      </div>
                      <div className="items-center mt-10 px-3">
                          <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-3 py-3 rounded-md hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-all duration-300">
                              VIEW MY PROJECTS
                          </button>
                          <button className="ml-5 px-9 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-3 py-3 rounded-md  hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] hover:scale-105 transition-all duration-300">
                              CONTACT ME
                          </button>                   
                      </div>
                      
                  </div>
                  <div className="">
                      <img src={ img.src } className="size-9/12 rounded-b-full"/>
                      
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
