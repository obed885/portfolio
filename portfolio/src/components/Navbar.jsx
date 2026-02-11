import {cn} from "@/lib/utils"
import { useEffect, useState } from "react"
import {Code, Menu, X} from "lucide-react"

const navItems = [
    {name : "Home", href:"#hero" },
    {name : "About", href:"#about" },
    {name : "Skills", href:"#skills" },
    {name : "Projects", href:"#projects" },
    {name : "Contact", href:"#contact" }
];

export const Navbar = ()=>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [ismenuOpn, setIsmenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
        "fixed w-full z-30 transition-all duration-300",
        isScrolled ? "py-5": "py-5 bg-background/1 backdrop-blur-sm"
    )}>

        <div className="container  flex items-center justify-between">
            <a className="text-xl container font-bold text-primary flex items-center gap-2" href="#hero">
                <Code /> 
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">JDV</span>Central
                    </span>
            </a>


            {/* deskstop */}
            <div className="hidden container md:flex space-x-8">
                {
                    navItems.map((item, key)=>(
                        <a key={key} href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >{item.name}</a>
                    ))
                }
            </div>

            {/* mobile */}
            <button
                aria-label={ismenuOpn ? "Close Menu" : "Open Menu"}
                className="md:hidden p-2 z-50"
                onClick={()=> setIsmenuOpen((prev)=> !prev)}>{ismenuOpn ? <X size={20} className="top-5 text-white" /> : <Menu className="top-5" size={20} /> }</button>
            <div>
                 <div  
                 className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col ",
                    "transition-all duration-300 md:hidden",
                    ismenuOpn ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"


                 )}>
                   <div s className="text-lg  rounded-b-3xl text-left z-90  flex flex-col  backdrop-blur-3xl bg-primary/75  px-5 py-5">
                     {
                        navItems.map((item, key)=>(
                            <a key={key} href={item.href} 
                            className="text-white hover:text-primary transition-colors duration-300"
                            onClick={()=>setIsmenuOpen(true)}
                            >{item.name}</a>
                        ))
                    }
                   </div>
                </div>

            </div>
           
        </div>
    </nav>
    );
}