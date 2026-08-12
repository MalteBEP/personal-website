

type CvBoxObject = {
    
    title: string,
    year: string,
    description: string,
    opacity: string
}

export function CvBox({ title, year, description, opacity }: CvBoxObject) {
    
    return (

        <div className={`${opacity} border-2 border-mauve-400 mb-4 p-5 rounded-xl`}>
            <div className="flex flex-col mb-2">
                <p className="font-bold text-mauve-300">{year}</p>
                <p className="font-bold text-white">{title}</p>
            </div>
            <p className="text-mauve-100/80 leading-relaxed">{description}</p>
        </div>
        
    )
}