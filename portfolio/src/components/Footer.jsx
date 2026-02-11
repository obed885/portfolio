import { ArrowUp, Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = ()=>{
    return(
        <footer className="py-12 px-4  relative border-primary backdrop-blur-sm bg-primary/10  mt-12 pt-8 flex justify-center items-center">
            <div className="text-sm text-muted-foreground ">
                <div className="pt-1 mb-4">
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/obed-ngilibuma">
                                    <Linkedin size={20}/>
                                </a>

                                <a href="#">
                                    <Twitter size={20}/>
                                </a>

                                <a href="#">
                                    <Instagram size={20} />
                                </a>
                            </div>

                        </div>

                <hr className="mb-4 w-lg" />
                <p className="text-primary/70">&copy; {new Date().getFullYear()} Obed Ngilibuma. All rights reserved</p>
            </div>

        </footer>
    );
}