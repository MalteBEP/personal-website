import {JSX} from "react";

type SkillBoxObject = {
    title: string;
    description: string;
};

export function SkillBox({title, description }: SkillBoxObject) {

    return (
        <div className="bg-white text-mauve-800 rounded-md border-mauve-600 border-2 border m-1 px-5 py-2 hover:bg-mauve-600 hover:text-white duration-200 group relative hover:z-50">
            <p>{title}</p>
            <div className="left-1/2 transform -translate-x-1/2 mt-1  hidden group-hover:block bg-mauve-700/70 backdrop-blur-xs border border-mauve-600 p-4 rounded-xl w-96 shadow-x4 absolute top-full">
                <p>{description}</p>
            </div>
        </div>
    );
}