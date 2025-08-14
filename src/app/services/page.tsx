'use client';

import { Tabs } from "@/components/ui/tabs";
import { Footer7 } from "../components/footer";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Globe, Truck, Warehouse, Package } from "lucide-react";

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
                  <li>• Asigurare completă a mărfii</li>
                  <li>• Echipă profesională</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Transport International</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• Documentație vamală</li>
                  <li>• Respectarea termenelor</li>
                  <li>• Preturi competitive</li>
                </ul>
              </div>
            </div>
            
            {/* Description area */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <h4 className="text-lg font-semibold text-white mb-3">Descriere Serviciu</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Oferim transport rutier pe întreg teritoriul României și în anumite zone din Europa, cu rute optimizate și monitorizare constantă a încărcăturilor. Fie că este vorba de mărfuri generale, produse industriale sau transporturi speciale, garantăm livrarea la timp și în condiții de siguranță maximă.
              </p>
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
                  <li>• Manipulare specializată</li>
                  <li>• Rapoarte detaliate</li>
                </ul>
              </div>
            </div>
            
            {/* Description area */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <h4 className="text-lg font-semibold text-white mb-3">Descriere Serviciu</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Soluția ideală pentru transporturi de volum redus sau parțial, LTL îți permite să partajezi spațiul din camion cu alte încărcături compatibile. Astfel, beneficiezi de un cost mai redus, fără a compromite calitatea serviciului.
              </p>
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
            
            {/* Description area */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <h4 className="text-lg font-semibold text-white mb-3">Descriere Serviciu</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Atunci când ai nevoie ca întreg camionul să fie dedicat încărcăturii tale, serviciul FTL este alegerea perfectă. Oferim transport direct, fără opriri intermediare, pentru volume mari sau mărfuri de mare valoare.
              </p>
            </div>
          </div>

         </div>
       ),
     },
   ];

  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-neutral-950 relative">



        <div className="pt-40 pb-20 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Serviciile Noastre
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mt-4">
              Soluții complete de transport și logistică pentru afacerea dumneavoastră
            </p>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
              {/* Left side - Tabs */}
              <div className="relative lg:pr-8">
                <div className="h-[24rem] md:h-[32rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start">
                  <Tabs tabs={tabs} />
                </div>
              </div>
              
              {/* Right side - Bento grid */}
              <div className="relative lg:pl-8 mt-8 lg:mt-0">
                <div className="h-auto lg:h-[40rem]">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                      De ce să alegi Trans Prima
                    </h2>
                  </div>
                  <BentoGrid className="max-w-4xl mx-auto mt-6 h-auto lg:h-full">
                     <BentoGridItem
                       title="Experiență de peste 30 de ani în transporturi"
                       description="Din 1994, Trans Prima livrează soluții de transport rutier adaptate nevoilor pieței locale și internaționale."
                       icon={<Globe className="h-5 w-5" />}
                       className="md:col-span-1"
                     />
                     <BentoGridItem
                       title="Flotă modernă și diversificată"
                       description="Operăm cu peste 45 de capete tractor și 60 de semiremorci"
                       icon={<Truck className="h-5 w-5" />}
                       className="md:col-span-1"
                     />
                     <BentoGridItem
                       title="Logistică proprie și manipulare rapidă"
                       description="Deținem platformă logistică proprie, spații de depozitare și echipamente performante pentru încărcare și descărcare."
                       icon={<Warehouse className="h-5 w-5" />}
                       className="md:col-span-1"
                     />
                     <BentoGridItem
                       title="Siguranță și conformitate garantată"
                       description="Respectăm toate reglementările europene și oferim asigurare extinsă de până la 1.500.000 €, pentru protecția totală a mărfurilor."
                       icon={<Package className="h-5 w-5" />}
                       className="md:col-span-1"
                     />
                  </BentoGrid>
                </div>
              </div>
            </div>
            
            {/* Vertical divider line - positioned to span from title to footer */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-30 transform -translate-x-1/2 z-20"></div>
          </div>
          
          {/* Extra spacing for mobile */}
          <div className="h-16 md:h-8"></div>
        </div>
        <Footer7 />
      </div>
    </>
  );
}