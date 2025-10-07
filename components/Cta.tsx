import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

const CTASocialBanner = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/yourcompany',
      color: 'hover:text-pink-500',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: 'https://tiktok.com/@yourcompany',
      color: 'hover:text-black',
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-12 md:m-24 bg-gray-900 md:rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          {/* Main heading */}
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              Följ oss på sociala medier
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto">
              Se vårt dagliga arbete, förvandlingar och tips för att hålla ditt hem skinande rent
            </p>
          </div>

          {/* Social media icons and CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-110 hover:bg-white"
                    aria-label={`Följ oss på ${social.name}`}
                  >
                    <IconComponent 
                      className={`w-6 h-6 text-white transition-colors duration-300 ${social.color} group-hover:scale-110`}
                    />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASocialBanner;