'use client'
export default function Header() {
    
    const handleScroll = (id:string)=> {
        if (id == "#home"){
            window.location.href = id;
            window.scrollTo(0,0);
        }
        else{
            window.location.href = id;
        }
    }
    
    return (
        <header className="sticky top-0 text-black p-8 z-20 backdrop-blur-xs shadow-md ">
            <div className="flex justify-center space-x-6 text-md">
                <button onClick={() => handleScroll("#home")} className="px-4 py-2 text-shadow-gray-800 font-medium transition-all hover:text-gray-400">Home</button>
                <button onClick={() => handleScroll("#about")} className="px-4 py-2 text-shadow-gray-800 font-medium transition-all hover:text-gray-400">About</button>
                <button onClick={() => handleScroll("#projects")} className="px-4 py-2 text-shadow-gray-800 font-medium transition-all hover:text-gray-400">Projects</button>
                <button onClick={() => handleScroll("#contact")} className="px-4 py-2 text-shadow-gray-800 font-medium transition-all hover:text-gray-400">Contact</button>
            </div>
        </header>
    );
}