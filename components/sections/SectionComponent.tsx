import {SkillBox} from "@/components/SkillBox";
import {handleScroll} from "@/utils/handleScroll";
import img from "@/public/img.png";

type SectionObject = {
    
    id: string
}

export function SectionComponent({children, id} : {children: React.ReactNode, id: string}) {
    
    return (
        
        <section  id={`${id}`} className="relative flex flex-row items-center justify-center w-full mt-28">
            {children}
        </section> 
        
    );
}