import Link from "next/link";
import img from "@/public/img.png";
import phone1 from "@/public/phone1.png";
import phone2 from "@/public/phone2.png";

export function ProjectsSection () {
    
    return (

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
        
    );
}