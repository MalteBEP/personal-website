'use client'
import { handleScroll } from '@/utils/handleScroll'

export default function Header() {
    
    return (
        <header className="sticky top-0 text-black p-8 z-20 backdrop-blur-xs shadow-md ">
            <div className="flex justify-center space-x-6 text-md">
                <button onClick={() => handleScroll("#home")} className="px-4 py-2 text-mauve-600 font-large transition-all hover:text-mauve-400 ">Home</button>
                <button onClick={() => handleScroll("#about")} className="px-4 py-2 text-mauve-600 font-large transition-all hover:text-mauve-400 ">About</button>
                <button onClick={() => handleScroll("#projects")} className="px-4 py-2 text-mauve-600 font-large transition-all hover:text-mauve-400 ">Projects</button>
                <button onClick={() => handleScroll("#contact")} className="px-4 py-2 text-mauve-600 font-large transition-all hover:text-mauve-400 ">Contact</button>
            </div>
        </header>
    );
}