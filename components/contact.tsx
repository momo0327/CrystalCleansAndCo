"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown, CheckCircle } from "lucide-react";

type FormType = "offert" | "bokning";

const SimpleQuoteSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "Flyttstädning",
    date: "",
  });

  const [formType, setFormType] = useState<FormType>("offert");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { value: "Flyttstädning", label: "Flyttstädning" },
    { value: "Hemstädning", label: "Hemstädning" },
    { value: "Fönsterputs", label: "Fönsterputs" },
    { value: "Företagsstädning", label: "Företagsstädning" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (value: string) => {
    setFormData({ ...formData, serviceType: value });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: formType }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "Flyttstädning",
      date: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                Få en offert eller boka här
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
              Vill du få en offert eller boka städning? Fyll i formuläret så hör vi av oss inom 24 timmar.
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
          <div className="relative">
            <div className="bg-gray-50 p-8 border rounded-md border-gray-200 relative">
            <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md ${
                    formType === "offert" ? "bg-[#002657] text-white" : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setFormType("offert")}
                >
                  Offert
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-md ${
                    formType === "bokning" ? "bg-[#002657] text-white" : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setFormType("bokning")}
                >
                  Bokning
                </button>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {formType === "offert" ? "Offertförfrågan" : "Bokning"}
              </h3>

              {/* Toggle Buttons */}
            

              {/* Overlay for successful submission */}
              {submitted && (
                <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-50 transition-all p-8 text-center">
                  <CheckCircle className="w-32 h-32 text-green-500 animate-bounce mb-6" />
                  <p className="text-2xl font-semibold text-gray-900 mb-2">Form Submitted!</p>
                  <p className="text-gray-600 mb-4">
                    Thank you for your request. We'll be in touch soon.
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-[#002657] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+46 76-306 35 43"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-3 py-2 border border-gray-300 bg-white text-left flex items-center justify-between focus:outline-none focus:border-gray-500"
                    >
                      {serviceOptions.find(
                        (option) => option.value === formData.serviceType
                      )?.label}
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
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

                {formType === "bokning" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500"
                      required
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#002657] text-white py-3 px-4 font-medium hover:bg-blue-800 transition-colors mt-6"
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
