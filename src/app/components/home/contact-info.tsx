"use client"

import type React from "react"
import { useState } from "react"
import { AlertCircle, CheckCircle2, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  privacy: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  privacy?: string
}

const ContactInfoComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Subject validation
    if (!formData.subject) {
      newErrors.subject = "Please select a subject"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    // Privacy validation
    if (!formData.privacy) {
      newErrors.privacy = "You must agree to the privacy policy"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          privacy: false,
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } catch (error) {
        console.error("Error submitting form:", error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const getInputClasses = (fieldName: keyof FormErrors) => {
    return `w-full px-4 py-3 rounded-xl border ${
      errors[fieldName]
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    } outline-none transition-all duration-200`
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to grow your digital presence? Reach out to our team for a personalized strategy tailored to your
            business needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3 text-green-700">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            )}

            <form id="contactForm" className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={getInputClasses("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 flex-shrink-0" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="johndoe@example.com"
                    className={getInputClasses("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 flex-shrink-0" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9689 433 293"
                  className={getInputClasses("phone")}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 flex-shrink-0" /> {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={getInputClasses("subject")}
                >
                  <option value="">Select a service</option>
                  <option value="Website Design">Website Design & Development</option>
                  <option value="App Development">Web App & Mobile App Development</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 flex-shrink-0" /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  className={getInputClasses("message")}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 flex-shrink-0" /> {errors.message}
                  </p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className={`mt-1 h-4 w-4 ${
                    errors.privacy ? "border-red-500" : "border-gray-300"
                  } rounded focus:ring-blue-500`}
                />
                <label
                  htmlFor="privacy"
                  className={`ml-2 block text-sm ${errors.privacy ? "text-red-500" : "text-gray-700"}`}
                >
                  I agree to the{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    privacy policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                    terms of service
                  </Link>
                  . <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.privacy && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3 flex-shrink-0" /> {errors.privacy}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-[1.01]"
                } text-white font-medium py-3.5 px-6 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl flex justify-center items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
                    backgroundSize: "50px 50px",
                  }}
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 relative">Contact Information</h3>

              <div className="space-y-6 md:space-y-8 relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-white/20 p-3 rounded-full">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Our Office</h4>
                    <p className="mt-1 text-blue-100">Display Promotion, PAP3, near BSNL Office,</p>
                    <p className="text-blue-100">MIDC Area, Baramati, Maharashtra 413133</p>
                   
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <Link
                      href="tel:+917767808010"
                      className="mt-1 text-blue-100 hover:text-white transition-colors duration-200 block"
                    >
                      +91 9689 433 293
                    </Link>
                   
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Email</h4>
                    <Link
                      href="mailto:displaypromo0110@gmail.com"
                      className="mt-1 text-blue-100 hover:text-white transition-colors duration-200 block"
                      target="_blank"
                    >
                      displaypromo0110@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-[300px] md:h-[350px] border border-gray-100">
            <iframe
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}

                  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Display+Promotion,+Display+Promotion,+PAP3,+near+BSNL+Office,+Maharashtra+Industrial+Development+Corporation+Area,+Baramati,+Maharashtra+413133&t=&z=12&ie=UTF8&iwloc=B&output=embed"
                >
                </iframe>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default ContactInfoComponent
