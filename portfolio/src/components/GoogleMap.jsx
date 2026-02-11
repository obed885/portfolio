
export const GoogleMap = ()=>{
    return(
        <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">Me on <span className="text-primary">Map</span> </h2>
             <p className="text-center container text-muted-foreground mb-12 max-w-2xl mx-auto">
                Find my location on the map.
                See where I’m based and working from.
                Discover my availability across regions.
                Distance doesn’t limit collaboration.
                Let’s connect wherever you are.
            </p>

            <div style={{width:80 + "%"}} className="mx-auto 
        container items-center justify-center py-6 px-6 relative bg-secondary/30 border-primary backdrop-blur-sm bg-primary/10 shadow-xs">

           
            
                <iframe width="100%" height="300"   frameborder="0" scrolling="no" 
                marginheight="0" marginwidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=3%20Kimpese%20street,%20quarter%206,%20Ndjili,%20Kinshasa,%20RDC+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/de/evolkerung-auf-einer-karte-berechnen/">
                My position
                </a>
                </iframe>
            
        </div>

        </section>
        
    );
}