import { SparklesText } from "./SparklesText";

export function Text() {
    return (
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center space-y-6 md:space-y-8">
            <SparklesText>
            <h2 className="text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#002657]  leading-tight tracking-tight">
            Vi städar upp till sista dammkornet.
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#002657]  leading-tight tracking-tight">
            <span className="font-serif italic font-semibold">        Kristall Klart,</span>
            <span className="font-serif italic font-semibold">        Skinande rent</span>
      
            </h2>
            </SparklesText>
          </div>
        </div>
      </section>
    );
  }