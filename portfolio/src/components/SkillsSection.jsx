import { useState } from "react";
import {cn} from "@/lib/utils"

const skills = [
    {name : "HTML/CSS", level:85, category : "frontend" }, 
    {name : "PYTHON", level:60, category : "Desktop" }, 
    {name : "JAVA", level:50, category : "Desktop" }, 
    {name : "JAVASCRIPT", level:60, category : "frontend" }, 
    {name : "REACT JS", level:55, category : "frontend" },


    // style
    {name : "Boostrapp", level:60, category : "style" },
    {name : "TailWindCss", level:30, category : "style" },
    {name : "FIGMA", level:40, category : "style" },
    
    // tools
    {name : "GIT & GITHUB", level:70, category : "tools" }, 
    {name : "GITHUB", level:85, category : "tools" }, 
    {name : "DOCKER", level:50, category : "tools" }, 
     

    // Backend
    {name : "PHP", level:50, category : "Backend" }, 
    {name : "MYSQL", level:80, category : "Backend" }, 
    {name : "SQLITE", level:80, category : "Backend" }, 

    // desktop
    {name : "VBNET", level:60, category : "desktop" }, 



    
];

const categories = ["all", "frontend", "Backend", "tools", "style", "desktop"];

export const SkillsSection = ()=> {

    const [activecategory, setActivecategory] = useState("all");
    const filterdSkills = skills.filter((skill)=> activecategory === "all"  || skill.category === activecategory)
    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>


                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category, key)=>(
                            <button key={key}
                            onClick={()=>setActivecategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activecategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"

                            )}>
                                {category}
                            </button>
                        ))
                    }

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterdSkills.map((skill, key) => (
                        <div key={key} className="px-6 rounded-sm py-4 border-primary backdrop-blur-sm bg-primary/10">

                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-sm">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{
                                    width:skill.level + "%"
                                }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level} %</span>
                            </div>
                        </div>
                    ))}
                </div>
                

            </div>

        </section>
    );

}