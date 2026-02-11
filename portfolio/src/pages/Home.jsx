import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "../components/AbouMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import {GoogleMap} from "@/components/GoogleMap"
import { ScrollUp } from "../components/ScrollUp";



export const Home = ()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* theme toggle */}
        <ThemeToggle />

        {/* background effets */}
        <StarBackground />

        {/* navbar */}
        <Navbar />

        {/* Main content */}
        <main>
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <GoogleMap />
            <ScrollUp />
        </main>


        {/* footer */}
        <Footer />
    </div>;
    
}