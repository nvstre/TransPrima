import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/app/components/glowing-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function GlowingEffectDemo() {
  return (
    <div className="animate-in fade-in duration-1000">
      <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-6 w-6" />}
          title="Transport cu temperatură controlată"
          description="Livrăm mărfuri care necesită condiții de temperatură precise, garantând integritatea produselor pe toată durata transportului."
          image="https://cdn.discordapp.com/attachments/1118816420600492042/1404587434016247829/assets2Ftask_01k2djkv9zepjtphcgvkjr4hfq2F1754950035_img_0.png?ex=689bbb7c&is=689a69fc&hm=cc5bb77e826f97d6009652455ab3973052fa60b0b507ff9a2893af8d9fba052a&"
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-6 w-6" />}
          title="Transport ADR / thermo-ADR"
          description="Manipulăm și transportăm mărfuri periculoase în condiții de siguranță, conform standardelor ADR (inclusiv termo), perfect pentru bunuri sensibile sau reglementate."
          image="https://cdn.discordapp.com/attachments/1118816420600492042/1404589623480680630/assets2Ftask_01k2dk1qhbfyk843rf8p9tf2nc2F1754950469_img_0.png?ex=689bbd86&is=689a6c06&hm=074e773da628bc0217c1a3d5faf1177bc00496d661aa62c89a21c4d0e1e01890&"
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-6 w-6" />}
          title="Transport cu prelate (normale și mega)"
          description="Dispunem de logistică proprie și trei motostivuitoare pentru operațiuni rapide și eficiente în depozit — de la recepție la încărcare."
          image="https://cdn.discordapp.com/attachments/1118816420600492042/1404590789425627146/assets2Ftask_01k2dkc9bkf8mvhxraf2dqg23w2F1754950822_img_0.png?ex=689bbe9c&is=689a6d1c&hm=abd4c1c81236d9ceeacfc483e446fbd443cdca40b782db5cde89eb29b0fe7902&"
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-6 w-6" />}
          title="Depozitare și manipulare proprie"
          description="Dispunem de logistică proprie și trei motostivuitoare pentru operațiuni rapide și eficiente în depozit — de la recepție la încărcare."
          image="https://cdn.discordapp.com/attachments/1118816420600492042/1404591708133527643/assets2Ftask_01k2dknq6sfcjbcyt4zcc0242b2F1754951145_img_0.png?ex=689bbf77&is=689a6df7&hm=65a6ffedccb114e68749871370b1cb0018f387f868fa103c23fb1804dd18c1e5&"
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-6 w-6" />}
          title="Asigurare extinsă a transportului"
          description="Fiecare transport este asigurat până la 1.500.000 € — un plus de siguranță și liniște pentru clienți."
          image="https://cdn.discordapp.com/attachments/1118816420600492042/1404592776288403588/assets2Ftask_01k2dkv9t6e9yv5x9mh5ecpgsf2F1754951291_img_0.png?ex=689bc075&is=689a6ef5&hm=bc2e48e0fb73cb1acbe7d138605d8ae407da555cc72d72d797cbdaabeca45884&"
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
  image?: string;
}

export const GridItem = ({ area, icon, title, description, image }: GridItemProps) => {
  return (
    <li className={cn("min-h-[16rem] list-none", area)}>
      <Link href="/services" className="block h-full">
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
            {image && (
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover grayscale opacity-5 group-hover:opacity-8 transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
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
                <div className="flex items-center gap-2 text-sm text-white dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Discover more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};