import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
        id:1,
        title:"Portfolio (bachelor 1)",
        description:"Portfolio Jdev - bachelor 2 (completed)",
        image:"/portfolio/src/images/proj1.png",
        tag: ["Html", "Css", "JavaScript", "Bootstrap"],
        demoUrl : "#",
        gitHuburl : "#",
    },

    {
        id:2,
        title:"Sonas (bachelor 1)",
        description:"Services online through secure digital platform (Completed)",
        image:"/portfolio/src/images/proj2.png",
        tag: ["Html/Css", "JavaScript", "Bootstrap"],
        demoUrl : "#",
        gitHuburl : "#",
    }, 

    {
        id:3,
        title:"Church website(bachelor 1)",
        description:"My first website built for a client (sold)",
        image:"/portfolio/src/images/proj3.png",
        tag: ["Html/Css", "JavaScript", "Bootstrap"],
        demoUrl : "#",
        gitHuburl : "#",
    },

    {
        id:4,
        title:"DeepTranslate (bachelor 1)",
        description:"A translate Deskstop Application  (completed)",
        image:"/portfolio/src/images/proj4.png",
        tag: ["Python", "CustomerTkinter", "Cmd"],
        demoUrl : "#",
        gitHuburl : "#",
    },

    

    {
        id:5,
        title:"Desktop IDE (bachelor 2)",
        description:"Small IDE for Python, JavaScript, Java, Html5, Css3 (Completed)",
        image:"/portfolio/src/images/proj6.png",
        tag: ["Python", "Tkinter", "Cmd"],
        demoUrl : "#",
        gitHuburl : "#",
    }
]

export const ProjectsSection = ()=> {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    build practical projects that turn ideas into clean, 
                    functional solutions while sharpening my real-world development skills.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key)=>(
                        <div key={key} className="group  border-primary backdrop-blur-sm bg-primary/10 shadow-xs rounded-lg overflow-hidden shadow-xs card-hover">
                            {/* <div className="h-43 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full 
                                transition-transform duration-500 group-hover:scale-110" />
                            </div> */}

                            

                            <div className="p-4">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {
                                        project.tag.map((tag)=>(
                                            <span className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/20
                                            text-secondary-foreground
                                            ">{tag}</span>
                                        ))
                                    }

                                </div>

                            

                            <h3 className="text-x font-semibold mb-1 capitalize">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2  space-x-3">
                                    <a href={project.demoUrl} 
                                    target="_blank"
                                    
                                    className="text-foreground/80 hover:text-primary items-center transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>

                                    
                                </div>

                            </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" 
                    target="_blank"
                    className="cosmic-button border-primary backdrop-blur-sm bg-primary/50 shadow-xs w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>


            </div>

        </section>
    );
}