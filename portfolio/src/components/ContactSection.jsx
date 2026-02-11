import { Mail, Phone, Map, MapPin, Linkedin, Facebook, Instagram, TicketCheckIcon, Twitter, Plane, Send } from "lucide-react";
import {cn} from "@/lib/utils"

export const ContactSection = ()=>{

    
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Welcome to my portfolio, where I showcase my projects and skills.
                    Let’s connect to collaborate, share ideas, or explore new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 px-6 rounded-sm py-4 border-primary backdrop-blur-sm bg-primary/10 shadow-xs">
                        <h3 className="text-2xl text-center  font-semibold mb-8 mt-4">Contact</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="text-primary h-6 w-6" />

                                </div>

                                <div>
                                    <h4 className="font-medium text-left">Email Address</h4>
                                    <a href="email:phillipngilibuma@gmail.com" 
                                    className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                        phillipngilibuma@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>


                         <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="text-primary h-6 w-6" />

                                </div>

                                <div>
                                    <h4 className="font-medium text-left">Phone number</h4>
                                    <a href="tel:+243 987 781 265" 
                                    className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                        +243 987 781 265
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="text-primary h-6 w-6" />

                                </div>

                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <a href="#" 
                                    className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                        DRCongo - Kinshasa
                                    </a>
                                </div>
                            </div>
                        </div>

                        

                    </div>

                    <div className="px-6 rounded-sm py-4 border-primary backdrop-blur-sm bg-primary/10 shadow-xs">
                        <h3 className="text-2xl font-semibold mb-8 mt-4">Send Message</h3>

                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                            <div>
                                <input type="hidden" name="access_key" value="4a0b1e4b-63ef-498e-929f-f633ac84d6fb" />
                                
                                <input type="text" id="name" name="name" required 
                                className="w-full px-4 py-2 rounded-md border
                                border-input bg-background focus:outline-hidden
                                focus:ring-1 focus:ring-primary"
                                placeholder="Your name..."
                                
                                />
                            </div>

                            <div>
                                
                                <input type="email" name="email" id="email" required 
                                className="w-full px-4 py-2 rounded-md border
                                border-input bg-background focus:outline-hidden
                                focus:ring-1 focus:ring-primary"
                                placeholder="xxx@gmail.com"
                                
                                
                                />
                            </div>

                        

                            <div>
                                
                                <textarea type="text" name="text" maxLength={500}
                                placeholder="Write down your message here..."
                                className="w-full px-4 py-6 rounded-md border
                                border-input bg-background focus:outline-hidden
                                focus:ring-1 focus:ring-primary" id=""></textarea>
                            </div>

                            

                            


                            <button type="submit"
                            className={cn("cosmic-button w-full flex items-center justify-center border-primary backdrop-blur-sm bg-primary/40 shadow-xs gap-2")}
                            >

                                Send <Send size={16}/>
                                
                            </button>

                        </form>

                    </div>

                </div>

                

        
            </div>



        </section>
    );
}