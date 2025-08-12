'use client';

import { Tabs } from "@/components/ui/tabs";
import { Footer7 } from "../components/footer";
import Link from "next/link";

export default function ServicesPage() {
  const tabs = [
    {
      title: "Transport Intern & International",
      value: "product",
      content: (
        <div 
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-black"
          style={{
            background: `linear-gradient(to bottom, rgb(255, 255, 255), rgb(243, 244, 246))`,
            boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.15), 0 1.5px 0 0 rgba(255,255,255,0.8) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.1) inset`,
          }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Transport de Marfă Complet</h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Transport Intern</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Livrări rapide în toată România</li>
                  <li>• Urmărire în timp real</li>
                  <li>• Asigurare completă a mărfii</li>
                  <li>• Echipă profesională</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Transport International</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Acoperire în toată Europa</li>
                  <li>• Documentație vamală</li>
                  <li>• Respectarea termenelor</li>
                  <li>• Preturi competitive</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <Link href="/contact">
              <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                Contact
              </button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Less Than Truckload (LTL)",
      value: "services",
      content: (
        <div 
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-black"
          style={{
            background: `linear-gradient(to bottom, rgb(255, 255, 255), rgb(243, 244, 246))`,
            boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.15), 0 1.5px 0 0 rgba(255,255,255,0.8) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.1) inset`,
          }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Transport Parțial (LTL)</h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Avantaje LTL</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Costuri reduse pentru încărcături mici</li>
                  <li>• Flexibilitate în programare</li>
                  <li>• Consolidare eficientă</li>
                  <li>• Servicii de manipulare</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Caracteristici</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Încărcături de 1-10 paleți</li>
                  <li>• Livrare în 24-48h</li>
                  <li>• Manipulare specializată</li>
                  <li>• Rapoarte detaliate</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
             <Link href="/contact">
               <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                 Contact
               </button>
             </Link>
           </div>
         </div>
       ),
     },
     {
       title: "Full Truckload (FTL)",
      value: "about",
      content: (
        <div 
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-black"
          style={{
            background: `linear-gradient(to bottom, rgb(255, 255, 255), rgb(243, 244, 246))`,
            boxShadow: `0 2px 8px 0 rgba(0, 0, 0, 0.15), 0 1.5px 0 0 rgba(255,255,255,0.8) inset, 0 -2px 8px 0 rgba(0, 0, 0, 0.1) inset`,
          }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Transport Complet (FTL)</h3>
            <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Servicii FTL</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Camion dedicat exclusiv</li>
                  <li>• Transport direct, fără opriri</li>
                  <li>• Capacitate maximă 24 tone</li>
                  <li>• Livrare rapidă</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-xl md:text-2xl mb-4">Beneficii</h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Securitate maximă</li>
                  <li>• Control total asupra încărcăturii</li>
                  <li>• Flexibilitate în programare</li>
                  <li>• Costuri optimizate pentru volume mari</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
             <Link href="/contact">
               <button className="px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                 Contact
               </button>
             </Link>
           </div>
         </div>
       ),
     },
   ];

  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-neutral-950 relative">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="pt-40 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Serviciile Noastre
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              Soluții complete de transport și logistică pentru afacerea dumneavoastră
            </p>
          </div>
          
          <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
            <Tabs tabs={tabs} />
          </div>
        </div>
        <Footer7 />
      </div>
    </>
  );
}