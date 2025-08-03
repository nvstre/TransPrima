'use client';

import { FloatingPathsBackground } from "./components/floating-paths";
import { Hero } from "./components/animated-hero";
import { Timeline } from "./components/timeline";

export default function Page() {
  return (
    <section id="features" className="relative z-20">
      <div className="min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
        <FloatingPathsBackground position={1} className="h-screen">
          <div className="h-full relative">
            <Hero />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent"></div>
          </div>
        </FloatingPathsBackground>
        
        <Timeline data={[
          {
            title: "2022",
            content: (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Company Founded</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Transprima was established with a vision to revolutionize the transportation industry.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
                </p>
              </div>
            ),
          },
          {
            title: "2023",
            content: (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Expansion Phase</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  We expanded our operations to cover more regions and added new services to our portfolio.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>
            ),
          },
          {
            title: "2024",
            content: (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Launched our digital platform to streamline operations and provide better service to our clients.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo.
                </p>
              </div>
            ),
          },
          {
            title: "2025",
            content: (
              <div className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Planning to expand our services globally and enter new markets across continents.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue.
                </p>
              </div>
            ),
          },
        ]} />
        
      </div>
    </section>
  );
}
