import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/button";
import { PlasticButton } from "@/components/ui/plastic-button"; 

function Hero() { 
  const [titleNumber, setTitleNumber] = useState(0); 
  const titles = useMemo( 
    () => ["grijă", "încredere", "viteză", "precizie", "siguranță"], 
    [] 
  ); 

  useEffect(() => { 
    const timeoutId = setTimeout(() => { 
      if (titleNumber === titles.length - 1) { 
        setTitleNumber(0); 
      } else { 
        setTitleNumber(titleNumber + 1); 
      } 
    }, 2000); 
    return () => clearTimeout(timeoutId); 
  }, [titleNumber, titles]); 

  return ( 
    <div className="w-full h-full flex items-center justify-center"> 
      <div className="container mx-auto"> 
        <div className="flex gap-10 py-20 lg:py-40 items-center justify-center flex-col max-w-4xl mx-auto"> 
          <div> 
          </div> 
          <div className="flex gap-6 flex-col"> 
            <h1 className="text-6xl md:text-8xl max-w-3xl tracking-tighter text-center font-regular"> 
              <span className="text-spektr-cyan-50">Transportăm marfa ta cu</span> 
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1"> 
                &nbsp; 
                {titles.map((title, index) => ( 
                  <motion.span 
                    key={index} 
                    className="absolute font-bold bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent" 
                    initial={{ opacity: 0, y: "-100" }} 
                    transition={{ type: "spring", stiffness: 50 }} 
                    animate={ 
                      titleNumber === index 
                        ? { 
                            y: 0, 
                            opacity: 1, 
                          } 
                        : { 
                            y: titleNumber > index ? -150 : 150, 
                            opacity: 0, 
                          } 
                    } 
                  > 
                    {title} 
                  </motion.span> 
                ))} 
              </span> 
            </h1> 

            <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-gray-400 max-w-3xl text-center"> 
Oferim servicii de transport internațional rapide, sigure și adaptate nevoilor tale. Oriunde ai nevoie, Trans Prima livrează cu profesionalism.
            </p> 
          </div> 
          <div className="flex flex-row gap-5">
            <div onClick={() => window.location.href = '/contact'} className="cursor-pointer">
              <PlasticButton text="Cere o ofertă personalizată" icon={<PhoneCall className="w-5 h-5" />} />
            </div> 
            <Button size="lg" className="gap-4 text-lg px-6 py-6 hover:scale-105 transition-transform duration-200" onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}> 
               Află mai multe despre servicii <MoveRight className="w-5 h-5" /> 
            </Button> 
          </div> 
          <div className="flex justify-center mt-8">
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} 
            > 
              <ChevronDown className="w-12 h-12 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" /> 
            </motion.div> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
} 

export { Hero };