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
    src: "https://html.tailus.io/blocks/customers/column.svg",
    alt: "Column Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/github.svg",
    alt: "GitHub Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/nike.svg",
    alt: "Nike Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
    alt: "Lemon Squeezy Logo",
    height: 20,
  },
  {
    src: "https://html.tailus.io/blocks/customers/laravel.svg",
    alt: "Laravel Logo",
    height: 16,
  },
  {
    src: "https://html.tailus.io/blocks/customers/lilly.svg",
    alt: "Lilly Logo",
    height: 28,
  },
  {
    src: "https://html.tailus.io/blocks/customers/openai.svg",
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
          
          <div className="w-full py-20 px-4 md:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  Serviciile noastre profesionale de transport
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
                  Din 1994, Trans Prima oferă soluții flexibile și sigure pentru transport intern și internațional – fie în regim LTL (grupaj) sau FTL (camion complet), cu garanție de asigurare și logistică dedicată
                </p>
              </div>
              <GlowingEffectDemo />
            </div>
          </div>
        
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
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
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
            title: "2014",
            content: (
              <div>
                <h3 className="text-neutral-900 dark:text-neutral-100 text-lg md:text-xl font-bold mb-4">
                  Dezvoltare continuă a cifrei de afaceri
                </h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                  Evoluția economică este constant ascendentă: cifra de afaceri a crescut de la aproximativ 18 milioane RON în 2014
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                    alt="olympics image"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                    src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
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
                   Investiție majoră în logistică și spații operaționale
                 </h3>
                 <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
                   În cadrul aniversării a 25 de ani (circa 2019), Trans Prima a inaugurat o platformă logistică modernă lângă Alba Iulia – triplicând capacitatea de depozitare și deservind peste 200 de clienți activi.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
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
                   Flotă proprie și logistică internă solidă
                 </h3>
                 <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
                   De-a lungul timpului, compania a consolidat o flotă proprie și a dezvoltat capacități interne de depozitare și manipulare, ajungând în 2024 la o echipă de aproximativ 70 de angajați.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
                     alt="olympics image"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                   />
                   <Image
                     src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
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
           <StatsSection />        
         <div className="w-full py-20 px-4 md:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
            </div>
            <CustomersSection customers={customers} />
            <Footer7 />
          </div>
        </div>
      </div>
    </section>
    <CookieConsent />
    </>
  );
}
