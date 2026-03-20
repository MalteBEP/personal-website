import img from '../public/img.png'

export default function Home() {
  return (
      <div>
          
          <section id="home" className="min-h-screen">
              <div className="flex flex-row items-center justify-center min-h-screen w-full">
                  <div className="flex flex-col justify-center space-x-4">
                      <h1 className="text-lg text-white px-4">Hello, I'm </h1>
                      <p className="text-2xl text-indigo-400 px-4">Malte Pedersen</p>
                  </div>
                  <div className="px-10">
                      <img src={ img.src } className="w-62 h-85 rounded-b-full"/>
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
