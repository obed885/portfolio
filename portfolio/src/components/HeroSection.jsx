import { ArrowDown, Github } from "lucide-react";

export const HeroSection = ()=>{
    return (
        <sectionn id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div
                className="container max-w-4xl mx-auto text-center z-10"
            >
                <div className="space-y-6">
                    <h1
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Obed</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-1" > Ngilibuma</span>
                    </h1>
                    <p className="text-lg  text-muted-foreground max-2-2xl mx-auto opacity-0  animate-fade-in-delay-3">
                       I’m a Junior Developer passionate about building clean, user-friendly applications.
                       Always learning, improving, and ready to contribute to real-world projects.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-4">


                        <button onClick={() => window.location.href = '#projects'} className="cosmic-button ">
                            Projects done
                        </button>

                        <button onClick={() => window.location.href = '#skills'} className="cosmic-button bg-transparent text-primary border-primary  border">
                            View my skills
                        </button>
                        
                        
                    </div>



                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">
                    Scroll down
                </span>
                
                <ArrowDown  className="h-5 w-5 text-primary" />
            </div>


        </sectionn>
    );
}