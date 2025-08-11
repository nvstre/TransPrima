import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/app/components/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <div className="animate-in fa de-in duration-1000">
      <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
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
          description="Manipulăm și transportăm mărfuri periculoase în condiții de siguranță, conform standardelor ADR (inclusiv termo), perfect pentru bunuri sensibile sau reglementate."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-6 w-6" />}
          title="Transport cu prelate (normale și mega)"
          description="Dispunem de logistică proprie și trei motostivuitoare pentru operațiuni rapide și eficiente în depozit — de la recepție la încărcare."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-6 w-6" />}
          title="Depozitare și manipulare proprie"
          description="Dispunem de logistică proprie și trei motostivuitoare pentru operațiuni rapide și eficiente în depozit — de la recepție la încărcare."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-6 w-6" />}
          title="Asigurare extinsă a transportului"
          description="Fiecare transport este asigurat până la 1.500.000 € — un plus de siguranță și liniște pentru clienți."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[16rem] list-none", area)}>
      <div className="relative h-full rounded-xl border border-neutral-200 dark:border-neutral-800 p-1 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer group">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-lg bg-white dark:bg-neutral-900 p-6 transition-all duration-300 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg bg-neutral-100 dark:bg-neutral-800 p-3 transition-all duration-300 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700">
              {icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Discover more</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};