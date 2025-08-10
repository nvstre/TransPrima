'use client';

import React from "react";
import { FloatingPathsBackground } from "./components/floating-paths";
import { Hero } from "./components/animated-hero";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { CustomersSection } from "./components/customers-section";
import { Footer7 } from "./components/footer";
import StatsSection from "@/app/components/stats-default";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/app/components/glowing-effect";
import { cn } from "@/lib/utils";
import CookieConsent from "./components/cookie-consent";

// Data
const customers = [
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia Logo", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column Logo", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub Logo", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike Logo", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy Logo", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel Logo", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly Logo", height: 28 },
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI Logo", height: 24 },
];

// ✅ Default export page
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

          <Timeline
            data={[
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
                    <ImageGrid />
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
                    <ImageGrid />
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
                      În cadrul aniversării a 25 de ani, Trans Prima a inaugurat o platformă logistică modernă lângă Alba Iulia – triplicând capacitatea de depozitare și deservind peste 200 de clienți activi.
                    </p>
                    <ImageGrid />
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
                    <ImageGrid />
                  </div>
                ),
              },
            ]}
          />

          <StatsSection />

          <div className="w-full py-20 px-4 md:px-8 lg:px-10">
            <div className="max-w-7xl mx-auto">
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

// 🔹 Helper: Services Glow
function GlowingEffectDemo() {
  return (
    <div className="animate-in fade-in duration-1000">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-6 w-6" />}
          title="Transport cu temperatură controlată"
          description="Livrăm mărfuri care necesită condiții de temperatură precise, garantând integritatea produselor pe toată durata transportului."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-6 w-6" />}
          title="Transport ADR / thermo-ADR"
          description="Manipulăm și transportăm mărfuri periculoase în condiții de siguranță, conform standardelor ADR."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-6 w-6" />}
          title="Transport cu prelate (normale și mega)"
          description="Dispunem de logistică proprie și trei motostivuitoare pentru operațiuni rapide și eficiente."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-6 w-6" />}
          title="Depozitare și manipulare proprie"
          description="Dispunem de logistică proprie și trei motostivuitoare pentru operațiuni rapide și eficiente."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-6 w-6" />}
          title="Asigurare extinsă a transportului"
          description="Fiecare transport este asigurat până la 1.500.000 €."
        />
      </ul>
    </div>
  );
}

// 🔹 Helper: Grid Item
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

function GridItem({ area, icon, title, description }: GridItemProps) {
  return (
    <li className={cn("min-h-[16rem] list-none", area)}>
      <div className="relative h-full rounded-xl border border-neutral-200 dark:border-neutral-800 p-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer group">
        <GlowingEffect spread={40} glow proximity={64} inactiveZone={0.01} borderWidth={2} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg bg-white dark:bg-neutral-900 p-6 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700">
              {icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

// 🔹 Helper: Reusable image grid for Timeline entries
function ImageGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[...Array(4)].map((_, i) => (
        <Image
          key={i}
          src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21"
          alt="olympics image"
          width={500}
          height={500}
          className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow"
        />
      ))}
    </div>
  );
}
