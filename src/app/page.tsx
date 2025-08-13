'use client';

import { FloatingPathsBackground } from "./components/floating-paths";
import { Hero } from "./components/animated-hero";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { CustomersSection } from "./components/customers-section";
import { Footer7 } from "./components/footer";
import StatsSection from "@/app/components/stats-default";
import CookieConsent from "./components/cookie-consent";
import { GlowingEffectDemo } from "./components/glowing-effect-demo";

const customers = [
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Nvidia Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Column Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "GitHub Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Nike Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Lemon Squeezy Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Laravel Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Lilly Logo",
    height: 28,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "OpenAI Logo",
    height: 24,
  },
]




export default function Page() {
  return (
    <>
      <section id="features" className="relative z-20">
        <div className="min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
          <FloatingPathsBackground position={1} className="h-screen">
            <div className="h-full relative">
              <Hero />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent"></div>
            </div>
          </FloatingPathsBackground>
          
          <section id="servici" className="w-full py-20 px-4 md:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  Serviciile noastre profesionale de transport
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
                  Din 1994, Trans Prima oferă soluții flexibile și sigure pentru transport intern și internațional, fie în regim LTL (grupaj) sau FTL (camion complet), cu garanție de asigurare și logistică dedicată
                </p>
              </div>
              <GlowingEffectDemo />
            </div>
          </section>
              <StatsSection />        
         <div className="w-full pt-8 pb-4 px-4 md:px-8 lg:px-10 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold lg:text-5xl text-white mb-4">Partenerii noștri</h2>
            </div>
            <CustomersSection customers={customers} />
        <Timeline data={[
          {
            title: "1994",
            content: (
              <div>
                <h3 className="text-neutral-900 dark:text-neutral-100 text-lg md:text-xl font-bold mb-4">
                  Înființarea Trans Prima SRL
                </h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                  Compania a fost înființată pe 21 aprilie 1994 în Sântimbru, județul Alba, cu obiect de activitate în transporturile rutiere de mărfuri.
                </p>
              </div>
            ),
          },
          {
            title: "2010",
            content: (
              <div>
                <h3 className="text-neutral-900 dark:text-neutral-100 text-lg md:text-xl font-bold mb-4">
                  Extinderea operațiunilor internaționale
                </h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                  După peste un deceniu de activitate în România, compania a început să opereze curse regulate către piețele europene, consolidându-și reputația de partener de transport de încredere.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="https://transprima.ro/wp-content/uploads/2020/02/A_MG_4708-Pano.jpg"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="https://transprima.ro/wp-content/uploads/2020/02/slide-tp-2-1200x540.jpg"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </div>
              </div>
            ),
          },
          {
             title: "2019",
             content: (
               <div>
                 <h3 className="text-neutral-900 dark:text-neutral-100 text-lg md:text-xl font-bold mb-4">
                   Platformă logistică modernă
                 </h3>
                 <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                   Cu ocazia aniversării a 25 de ani, Trans Prima a inaugurat o bază logistică de ultimă generație lângă Alba Iulia, dotată cu echipamente performante și facilități pentru manipularea eficientă a mărfurilor.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                   <Image
                     src="https://transprima.ro/wp-content/uploads/2020/02/MG_0539.jpg"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://transprima.ro/wp-content/uploads/2020/02/MG_4684.jpg"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://transprima.ro/wp-content/uploads/2020/02/MG_4687.jpg"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://transprima.ro/wp-content/uploads/2020/02/A_MG_0561-Pano.jpg"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                 </div>
               </div>
             ),
           },
          {
             title: "2025",
             content: (
               <div>
                 <h3 className="text-neutral-900 dark:text-neutral-100 text-lg md:text-xl font-bold mb-4">
                   Flotă modernă și echipă dedicată
                 </h3>
                 <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
                   Astăzi, Trans Prima operează cu o flotă proprie modernă și o echipă de profesioniști experimentați, asigurând servicii de transport competitive și adaptate cerințelor fiecărui client.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                   <Image
                     src="https://transprima.ro/wp-content/uploads/2020/10/slide-tp-1-1-scaled-1.jpg"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                 </div>
               </div>
             ),
           },
        ]} />
            <Footer7 />
          </div>
        </div>
      </div>
    </section>
    <CookieConsent />
    </>
  );
}
