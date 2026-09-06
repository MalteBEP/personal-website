import {SkillBox} from "@/components/SkillBox";
import {handleScroll} from "@/utils/handleScroll";
import img from "@/public/img.png";


export function HeroSection() {
    
    return (
        <div className="flex flex-row items-center">
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
        
    );
    
}
