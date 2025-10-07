import React from 'react';
import { ArrowRight } from 'lucide-react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
  imageUrl: '/image copy.png'
};

const SECOND_IMAGE = {
  imageUrl: '/image.png'
};

function BeforeAfterSection() {
  return (
    <section className="py-16  md:px-6 bg-gray-50">
      <div className="container max-w-full mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Text content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              {/* <div className="  flex items-center justify-center">
              <span className="absolute -top-2 w-8 h-8 text-[#0287FE]">
        <SparkleIcon />
      </span>
      <span className="absolute top-3 px-4 w-6 h-6 text-[#0287FE]">
        <SparkleIcon />
      </span>
              </div> */}
              SE FÖRÄNDRINGEN
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                Imponerad av
                <br />
                resultatet?
              </h2>
              
              <p className="text-md md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Fyll i kontaktformuläret eller ring och låt oss ta 
                ett förutsättningslöst samtal om hur vi kan hjälpa er?
              </p>
            </div>
            
            <button className="inline-flex items-center rounded-lg gap-3 bg-[#002657] text-white px-5 py-3 text-sm md:px-8 md:py-4 md:text-md font-medium hover:bg-gray-800 transition-colors">
              Få en gratis offert
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Right side - Before/After slider */}
          <div className="lg:col-span-3 relative">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-sm">
              <ReactBeforeSliderComponent
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
              />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Custom styles for the slider component */}
      <style jsx global>{`
        .beforeAfterSlider {
          overflow: hidden !important;
          height: 100% !important;
        }
        .beforeAfterSlider img {
          object-fit: cover !important;
          width: 100% !important;
          height: 100% !important;
        }
        .beforeAfterSlider .before-image,
        .beforeAfterSlider .after-image {
          height: 100% !important;
        }
        .beforeAfterSlider .before-image img,
        .beforeAfterSlider .after-image img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
      `}</style>
    </section>
  );
}

export default BeforeAfterSection;