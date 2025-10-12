import React, { useState } from 'react';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const SimpleQuoteSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'residential'
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceOptions = [
    { value: 'Flyttstädning', label: 'Flyttstädning ' },
    { value: 'Hemstädning', label: 'Hemstädning' },
    { value: 'Fönsterputs', label: 'Fönsterputs' },
    { value: 'Företagsstädning', label: 'Företagsstädning' },
  ];

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSelect = (value: string) => {
    setFormData({
      ...formData,
      serviceType: value
    });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id='contact' className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Contact us today for a free quote or to schedule your cleaning
                service. We're here to make your space sparkle!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium text-gray-900">+46 76-306 35 43</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium text-gray-900">crystalcleansab@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">Service Area</p>
                  <p className="text-lg font-medium text-gray-900">Västra Götaland, Göteborg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <div className="bg-gray-50 p-8 border  rounded-md border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Get Your Free Quote
                </h3>
                <p className="text-gray-600">
                Fyll i formuläret så återkommer vi inom 24 timmar.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+46 76-306 35 43"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                  />
                </div>

                {/* Service Type Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-3 py-2 border border-gray-300 bg-white text-left focus:outline-none focus:border-gray-500 flex items-center justify-between"
                    >
                      <span className="text-gray-900">
                        {serviceOptions.find(option => option.value === formData.serviceType)?.label}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 z-10">
                        {serviceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleServiceSelect(option.value)}
                            className="w-full px-3 py-2 text-left hover:bg-gray-100"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#002657] text-white py-3 px-4 font-medium hover:bg-gray-800 transition-colors mt-6"
                >
                  Skicka
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleQuoteSection;