import {Briefcase, Code, User} from "lucide-react"

export const AboutMe = ()=>{
    return(
        <section id="about" className="py-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Who <pan className="text-primary"> am I ?</pan>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-primary">Junior Software Developer</h3>

                        <p className="text-muted-foreground text-left">
                            I’m a Junior Developer with 1+ year of hands-on experience in building and improving applications.
                            I enjoy learning new technologies, solving problems, and writing clean, efficient code.
                        </p>

                        <p className="text-muted-foreground text-left">
                            I’m a Junior Developer passionate about software development and problem-solving.
                            I enjoy learning new technologies and improving my skills every day.
                            My goal is to become a better developer and contribute to meaningful projects.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="#contact" className="
                            px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all">
                                Download Cv
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        

                        
                        <div className="px-6 rounded-sm py-4 border-primary backdrop-blur-sm bg-primary/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-primary text-lg">Web Development</h4>
                                    <p className="text-muted-foreground text-x">
                                        build and improve simple, responsive websites while learning best practices and modern web technologies.
                                    </p>

                                </div>

                                
                            </div>

                        </div>


                        <div className="px-6 rounded-sm py-4 border-primary backdrop-blur-sm bg-primary/10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                 <div className="text-left">
                                    <h4 className="font-semibold text-primary text-lg">UIX/Design</h4>
                                    <p className="text-muted-foreground text-x">
                                        design focuses on creating clean, intuitive, and engaging interfaces that offer a smooth user experience.
                                    </p>

                                </div>

                                
                            </div>
                        </div>

                        
                        

                        
                    </div>
                </div>
                
            </div>

        </section>
    );
}