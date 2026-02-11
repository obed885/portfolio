import {Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export const ThemeToggle = ()=>{

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme");

        if(storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(true)
        }
    }, [])

    const toggletheme = ()=>{
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");


            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button 
            onClick={toggletheme} 
            className={cn("fixed max-sm:right-20 top-5 right-5 z-35 p-2 rounded-full transition-colors duration-300", 
            "focus:outline-hidden")}>
                
                {isDarkMode ? <Sun size={20} className="h-5 w-5 text-yellow-300"/> 
                : 
                <Moon size={20} className="h-5 w-5 text-yellow-300" />}
        </button>
    );
}