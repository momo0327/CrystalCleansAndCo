"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacyPolicy: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    if (!formData.privacyPolicy) {
      toast({
        title: "Error",
        description: "Please agree to the privacy policy",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacyPolicy: false,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-gray-200">
            First name <span className="text-[#f485c7]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            required
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f485c7]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-gray-200">
            Last name <span className="text-[#f485c7]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
            className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f485c7]"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-200">
          Email <span className="text-[#f485c7]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
          required
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f485c7]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-200">
          Phone number (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f485c7]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-200">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#f485c7]"
        >
          <option value="" className="bg-gray-900">
            Select a subject
          </option>
          <option value="sales" className="bg-gray-900">
            Sales inquiry
          </option>
          <option value="support" className="bg-gray-900">
            Technical support
          </option>
          <option value="demo" className="bg-gray-900">
            Request a demo
          </option>
          <option value="other" className="bg-gray-900">
            Other
          </option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-200">
          Message <span className="text-[#f485c7]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us how we can help you..."
          required
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f485c7]"
        ></textarea>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="privacyPolicy"
          name="privacyPolicy"
          checked={formData.privacyPolicy}
          onChange={handleCheckboxChange}
          className="h-4 w-4 rounded border-gray-700 bg-gray-900 text-[#f485c7] focus:ring-[#f485c7]"
        />
        <label htmlFor="privacyPolicy" className="text-sm text-gray-300">
          I agree to the{" "}
          <a href="#" className="text-[#f485c7] hover:underline">
            privacy policy
          </a>
        </label>
      </div>

      <Button type="submit" className="w-full bg-[#f485c7] hover:bg-[#e06bb0] text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
