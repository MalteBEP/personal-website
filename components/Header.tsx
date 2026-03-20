import Link from "next/link";


export default function Header() {
    
    return (
        <header className="sticky top-0 text-black p-8 z-20 backdrop-blur-xs shadow-md ">
            <ul className="flex justify-center space-x-6 text-md">
                <li><Link href="#home" className="px-4 py-2 text-neutral-200 font-medium transition-all hover:text-gray-400">home</Link></li>
                <li><Link href="#about" className="px-4 py-2 text-neutral-200 font-medium transition-all hover:text-gray-400">about</Link></li>
                <li><Link href="#projects" className="px-4 py-2 text-neutral-200 font-medium transition-all hover:text-gray-400">projects</Link></li>
                <li><Link href="#contact" className="px-4 py-2 text-neutral-200 font-medium transition-all hover:text-gray-400">contact</Link></li>
            </ul>
        </header>
    );
}