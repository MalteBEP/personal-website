import {CvBox} from "@/components/CvBox";


export function AboutSection() {

    return (
        <div className="flex flex-row max-w-5xl w-full mt-28 items-start">
            <div className="flex flex-col mr-10 sticky top-28">
                <p className="text-4xl font-bold italic text-mauve-600 ">
                    My <br /> Curriculum <br />
                </p>
                <p className="text-4xl font-bold italic text-mauve-400 ">
                    Vitae
                </p>
            </div>
            <div className="flex flex-col w-full">
                <CvBox title={'Automotive Painter | OJ Autolak'}
                       year={'2020 - 2024'}
                       description={'Completed a 4-year apprenticeship that built strong problem-solving skills, attention to detail, and a focus on quality.'}
                       opacity={'bg-mauve-600/95'}>
                </CvBox>

                <CvBox title={'Engineering Foundation Course | University of Southern Denmark'}
                       year={'2024 - 2025'}
                       description={'Completed an intensive 1-year foundation course focused on mathematics, natural sciences and technical communication to prepare for higher engineering studies.'}
                       opacity={'bg-mauve-600/90'}>
                </CvBox>

                <CvBox title={'BEng in Software Technology | University of Southern Denmark'}
                       year={'2025 - Present'}
                       description={'Building engineering skills in software design and system development through lectures and hands-on project work.'}
                       opacity={'bg-mauve-600/85'}>
                </CvBox>

                <CvBox title={'Studentworker | OJ Autolak'}
                       year={'2025 - Present'}
                       description={'Working as a qualified journeyman automotive painter in a student position. Taking part in both preparatory work and painting in the booth, working both independently and as part of a team.'}
                       opacity={'bg-mauve-600/80'}>
                </CvBox>

                <CvBox title={'Future'}
                       year={'2026 - Present'}
                       description={'Currently seeking a student worker position to gain practical experience and contribute to team projects.'}
                       opacity={'bg-mauve-600/75'}>
                </CvBox>
            </div>
        </div>
    );
    
}

