'use client';

import { Tabs } from "@/components/ui/tabs";
import { Footer7 } from "../components/footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Globe, Truck, Warehouse, Package } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const tabs = [
    {
      title: "Transport Intern & International",
      value: "product",
      content: (
        <div 
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white"
          style={{
            background: `linear-gradient(to bottom, rgb(30, 30, 30), rgb(20, 20, 20))`,
            boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.3), 0 1.5px 0 0 rgba(255,255,255,0.1) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.2) inset`,
          }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Transport de Marfă Complet</h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Transport Intern</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Livrări rapide în toată România</li>
                  <li>• Urmărire în timp real</li>
                  <li>• Asigurare completă a mărfii</li>
                  <li>• Echipă profesională</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Transport International</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Acoperire în toată Europa</li>
                  <li>• Documentație vamală</li>
                  <li>• Respectarea termenelor</li>
                  <li>• Preturi competitive</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      ),
    },
    {
      title: "Less Than Truckload (LTL)",
      value: "services",
      content: (
        <div 
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white"
          style={{
            background: `linear-gradient(to bottom, rgb(30, 30, 30), rgb(20, 20, 20))`,
            boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.3), 0 1.5px 0 0 rgba(255,255,255,0.1) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.2) inset`,
          }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Transport Parțial (LTL)</h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Avantaje LTL</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Costuri reduse pentru încărcături mici</li>
                  <li>• Flexibilitate în programare</li>
                  <li>• Consolidare eficientă</li>
                  <li>• Servicii de manipulare</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Caracteristici</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Încărcături de 1-10 paleți</li>
                  <li>• Livrare în 24-48h</li>
                  <li>• Manipulare specializată</li>
                  <li>• Rapoarte detaliate</li>
                </ul>
              </div>
            </div>
          </div>

         </div>
       ),
     },
     {
       title: "Full Truckload (FTL)",
      value: "about",
      content: (
        <div 
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white"
          style={{
            background: `linear-gradient(to bottom, rgb(30, 30, 30), rgb(20, 20, 20))`,
            boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.3), 0 1.5px 0 0 rgba(255,255,255,0.1) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.2) inset`,
          }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Transport Complet (FTL)</h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Servicii FTL</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Camion dedicat exclusiv</li>
                  <li>• Transport direct, fără opriri</li>
                  <li>• Capacitate maximă 24 tone</li>
                  <li>• Livrare rapidă</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Beneficii</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Securitate maximă</li>
                  <li>• Control total asupra încărcăturii</li>
                  <li>• Flexibilitate în programare</li>
                  <li>• Costuri optimizate pentru volume mari</li>
                </ul>
              </div>
            </div>
          </div>

         </div>
       ),
     },
   ];

  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-neutral-950 relative">



        <div className="pt-40 pb-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Serviciile Noastre
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Soluții complete de transport și logistică pentru afacerea dumneavoastră
            </p>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {/* Left side - Tabs */}
              <div className="relative lg:pr-8">
                <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start">
                  <Tabs tabs={tabs} />
                </div>
              </div>
              
              {/* Right side - Bento grid */}
              <div className="relative lg:pl-8">
                <div className="h-[20rem] md:h-[40rem]">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                      Caracteristici Avansate
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                      Tehnologii moderne pentru servicii de calitate superioară
                    </p>
                  </div>
                  <BentoGrid className="max-w-4xl mx-auto mt-8 h-full">
                     <BentoGridItem
                       title="Urmărire în Timp Real"
                       description="Monitorizați transporturile 24/7 cu sistemul nostru avansat de urmărire GPS."
                       icon={<Globe className="h-5 w-5" />}
                       className="md:col-span-2"
                     />
                     <BentoGridItem
                       title="Livrare Express"
                       description="Livrări rapide și sigure în toată Europa."
                       icon={<Truck className="h-5 w-5" />}
                       className="md:col-span-1"
                     />
                     <BentoGridItem
                       title="Depozitare Securizată"
                       description="Depozite cu temperatură controlată pentru mărfurile dumneavoastră."
                       icon={<Warehouse className="h-5 w-5" />}
                       className="md:col-span-1"
                     />
                     <BentoGridItem
                       title="Soluții Personalizate"
                       description="Soluții logistice adaptate nevoilor specifice ale afacerii dumneavoastră."
                       icon={<Package className="h-5 w-5" />}
                       className="md:col-span-2"
                     />
                  </BentoGrid>
                </div>
              </div>
            </div>
            
            {/* Vertical divider line - positioned to span from title to footer */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-30 transform -translate-x-1/2 z-20"></div>
          </div>
        </div>
        <Footer7 />
      </div>
    </>
  );
}