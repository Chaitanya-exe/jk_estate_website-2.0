import Navbar from "@/components/Navbar";                                                  
import Hero from "@/components/sections/Hero";                                             
import Stats from "@/components/sections/Stats";                                           
import Properties from "@/components/sections/Properties";                                 
import Services from "@/components/sections/Services";                                     
import Footer from "@/components/Footer";                                                  
                                                                                          
export default function Home() {                                                           
  return (                                                                                 
    <div className="min-h-screen bg-white">                                                
      <Navbar />                                                                           
      <main>                                                                               
        <Hero />                                                                           
        <Stats />                                                                          
        <Properties />                                                                     
        <Services />                                                                       
      </main>                                                                              
      <Footer />                                                                           
    </div>                                                                                 
  );                                                                                       
}