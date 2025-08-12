'use client';

import { Footer7 } from "../components/footer";

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-white dark:bg-neutral-950">
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Despre Trans Prima
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Din 1994, construim încredere prin servicii de transport profesionale și soluții logistice inovatoare.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                  Povestea noastră
                </h2>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    Trans Prima a fost înființată în 1994 cu viziunea de a deveni un partener de încredere 
                    în domeniul transportului rutier de mărfuri. De-a lungul anilor, am crescut constant, 
                    investind în tehnologie modernă și dezvoltând o echipă de profesioniști dedicați.
                  </p>
                  <p>
                    Astăzi, cu o flotă de 45 de capete de tir și 60 de semiremorci, deservim clienți din 
                    întreaga Europă, oferind soluții flexibile și sigure pentru toate nevoile de transport.
                  </p>
                  <p>
                    Experiența noastră de peste 30 de ani ne-a învățat că succesul se bazează pe încredere, 
                    profesionalism și adaptabilitate la cerințele în continuă schimbare ale pieței.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                  Valorile noastre
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Siguranță</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Fiecare transport este asigurat până la 1.500.000 €, garantând protecția completă a mărfurilor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Profesionalism</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Echipa noastră experimentată asigură servicii de cea mai înaltă calitate.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Inovație</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Investim constant în tehnologii moderne pentru a optimiza procesele logistice.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Încredere</h4>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Construim relații pe termen lung bazate pe transparență și rezultate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1994</div>
                <div className="text-neutral-600 dark:text-neutral-400">Anul înființării</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1200+</div>
                <div className="text-neutral-600 dark:text-neutral-400">Curse anuale</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">105</div>
                <div className="text-neutral-600 dark:text-neutral-400">Vehicule în flotă</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                  Misiunea noastră
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                  Să oferim servicii de transport și logistică de excepție, care să depășească așteptările 
                  clienților noștri și să contribuie la succesul afacerilor lor prin soluții inovatoare, 
                  sigure și eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer7 />
      </div>
    </>
  );
}