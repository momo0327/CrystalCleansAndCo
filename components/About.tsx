export default function About() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Text Content - Left Side */}
          <div className="grid grid-rows-[60%_40%] gap-4 h-full min-h-[500px]">
            {/* Title Container - Blue Background (60%) */}
            <div className="bg-[#002657] rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Sparkle decoration */}
              <div className="absolute bottom-6 right-8">
                <div className="w-12 h-12 text-[#0287FE]/60">
                  <SparkleIcon />
                </div>
              </div>
              
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal font-serif text-white leading-tight italic">
                Dentme är framtidens tandvård – tillgänglig, prisvärd, förutsägbar och innovativ.                
                </h1>
              </div>
            </div>

            {/* Text Container - Gray Background (40%) */}
            <div className="bg-blue-50 rounded-3xl p-6 md:p-8 flex flex-col justify-center">
              <p className="text-lg md:text-xl font-normal text-gray-800 leading-relaxed">
                Vi förändrar hur människor tar hand om sina leenden genom en enkel och smart prenumerationsmodell som gör tandvård lika självklart som ett gymkort.
              </p>
              <div className="w-12 h-12 text-[#0287FE]/60">
                  <SparkleIcon />
                </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="rounded-2xl overflow-hidden shadow-lg relative z-10 bg-gray-200 min-h-[500px] flex items-center justify-center">
                <img 
                  src="/01 copy.jpg" 
                  alt="Modern dental clinic interior"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = '<div class="text-gray-500 text-center p-8"><div class="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-lg flex items-center justify-center"><svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div><p>Modern Dental Clinic Interior</p></div>';
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sparkle Icon Component */
function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
      <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3 3-9z"/>
    </svg>
  );
}