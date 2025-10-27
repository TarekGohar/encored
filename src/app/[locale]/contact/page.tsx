"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Loader2,
  Briefcase,
  Users,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useMediaQuery } from "react-responsive";

export default function ContactPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/contact/success");
      } else {
        alert(
          `Error: ${data.error || "Failed to send message. Please try again."}`
        );
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-theme-background text-theme-foreground relative overflow-clip w-full">
      {/* Content Container */}
      <div className="relative w-full">
        {/* Hero Section */}
        <div
          className={`mx-auto relative ${
            isMobile ? "min-h-[28rem]" : "min-h-[32rem] h-[60vh]"
          } flex items-center`}>
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/hero-3.webp"
              alt="Contact Background"
              fill
              priority
              className="object-cover object-center w-full h-full"
              sizes="100vw"
            />
            {/* Corporate Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Primary gradient overlay - made darker */}
              <div
                className="absolute inset-0 noisecontainer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30,60,120, 0.65) 0%, rgba(50,80,150, 0.65) 35%, rgba(30,60,120, 0.65) 80%)",
                }}
              />

              {/* Secondary diagonal gradient for depth - made darker */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(0,0,0, 0.85) 0%, transparent 50%, rgba(0,0,0, 0.85) 100%)",
                }}
              />
            </div>
          </div>

          <div
            className={`w-full ${
              isMobile ? "text-center" : "text-center"
            } max-w-[90rem] mx-auto flex flex-col ${
              isMobile
                ? "items-center justify-center"
                : "items-end justify-center"
            } px-4 sm:px-6 lg:px-2 md:py-24 relative z-10 text-white`}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={isMobile ? "text-center" : "text-left"}>
              <h1
                className={`text-4xl md:text-6xl font-medium leading-tight mb-6 ${
                  isMobile ? "max-w-full" : "max-w-[50rem]"
                } text-white/95`}>
                Let's Start the Conversation
              </h1>
              <div
                className={`${
                  isMobile ? "text-sm" : "text-lg md:text-sm"
                } mb-8 md:mb-12 ${
                  isMobile ? "max-w-full" : "max-w-[42rem]"
                } font-medium`}>
                <p className="mb-1 text-sm text-white/90 leading-relaxed">
                  Whether you're a founder exploring the next chapter for your
                  company, a partner looking to collaborate, or a professional
                  interested in opportunities with Fluent, we'd love to hear
                  from you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="relative w-full">
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
              isMobile ? "py-16" : "py-24"
            } flex flex-col gap-16`}>
            {isMobile ? (
              // Mobile Layout: Centered vertical stacking
              <div className="flex flex-col gap-8 text-center">
                <span className="text-[#13265c] font-semibold">Contact Us</span>
                <h2 className="text-2xl font-medium text-[#13265c]">
                  Get in Touch
                </h2>
                <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-full">
                  Fluent is always open to conversations with business owners,
                  entrepreneurs, and industry leaders. Reach out today and we'll
                  connect you with the right member of our team.
                </p>
              </div>
            ) : (
              // Desktop Layout: Original side-by-side layout
              <div className="flex items-start justify-between">
                <span className="text-[#13265c] w-fit p-1 font-semibold">
                  Contact Us
                </span>
                <div className="w-2/3 flex flex-col gap-8 items-start justify-start">
                  <h2 className="text-3xl md:text-4xl font-medium text-[#13265c]">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-neutral-400 font-medium">
                    Fluent is always open to conversations with business owners,
                    entrepreneurs, and industry leaders. Reach out today and
                    we'll connect you with the right member of our team.
                  </p>
                </div>
              </div>
            )}

            {/* Contact Options */}
            <div
              className={`grid ${
                isMobile
                  ? "grid-cols-1 gap-6"
                  : "grid-cols-1 md:grid-cols-2 gap-8"
              } mb-16`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-[12rem] bg-[#13265c]/5 p-4 flex flex-col justify-between">
                <Mail className="h-6 w-6 text-[#13265c]" />

                <div className="flex flex-col items-start gap-2 mt-auto">
                  <h3 className="text-lg font-medium text-[#13265c]">
                    General & Acquisition Inquiries
                  </h3>
                  <p className="text-xs text-neutral-500">
                    For general questions, information about Fluent Group, or to
                    explore acquisition opportunities with our team.
                  </p>
                  <a
                    href="mailto:info@fluentcorp.com"
                    className="text-[#13265c] hover:text-[#13265c]/80 font-medium text-sm">
                    info@fluentcorp.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-[12rem] bg-[#13265c]/5 p-4 flex flex-col justify-between">
                <Briefcase className="h-6 w-6 text-[#13265c]" />

                <div className="flex flex-col items-start gap-2 mt-auto">
                  <h3 className="text-lg font-medium text-[#13265c]">
                    Careers & Talent
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Join our team and help shape the future of software
                    acquisitions.
                  </p>
                  <a
                    href="mailto:careers@fluentcorp.com"
                    className="text-[#13265c] hover:text-[#13265c]/80 font-medium text-sm mt-auto">
                    careers@fluentcorp.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div
          className={`bg-[#f8f9fa]/50 ${
            isMobile ? "py-16" : "py-16"
          } relative`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid ${
                isMobile
                  ? "grid-cols-1 gap-8"
                  : "grid-cols-1 lg:grid-cols-2 gap-12"
              }`}>
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#13265c]/5  p-8">
                <h3 className="text-2xl font-medium text-[#13265c] mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div
                    className={`grid ${
                      isMobile
                        ? "grid-cols-1 gap-4"
                        : "grid-cols-1 md:grid-cols-2 gap-6"
                    }`}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#13265c] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white transition-all duration-200 outline-none text-[#13265c]"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#13265c] mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white transition-all duration-200 outline-none text-[#13265c]"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div
                    className={`grid ${
                      isMobile
                        ? "grid-cols-1 gap-4"
                        : "grid-cols-1 md:grid-cols-2 gap-6"
                    }`}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#13265c] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white transition-all duration-200 outline-none text-[#13265c]"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#13265c] mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white transition-all duration-200 outline-none text-[#13265c]"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#13265c] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white transition-all duration-200 outline-none text-[#13265c]"
                      placeholder="Tell us about your company and how we can help..."></textarea>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center bg-[#13265c] text-white px-8 py-3 font-semibold hover:bg-[#13265c]/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Contact Us
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Office Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8">
                <div>
                  <h3 className="text-2xl font-medium text-[#13265c] mb-4">
                    Where We're Based
                  </h3>
                  <p className="text-sm text-neutral-400 font-medium mb-8">
                    As part of Valsoft Corporation, Fluent has a global reach
                    with a local touch. While our headquarters are in Montreal,
                    Canada, our companies and partners span the globe.
                  </p>

                  <div className="bg-white p-6 mb-4">
                    <div className="flex flex-col items-start gap-2">
                      <MapPin className="h-6 w-6 text-[#13265c]" />

                      <div>
                        <h4 className="text-lg font-medium text-[#13265c] mb-2">
                          Headquarters
                        </h4>
                        <p className="text-sm text-neutral-500">
                          7405 Rte Transcanadienne #100
                          <br />
                          Saint-Laurent, QC H4T 1Z2
                          <br />
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6">
                    <div className="flex flex-col items-start gap-2">
                      <MapPin className="h-6 w-6 text-[#13265c]" />

                      <div>
                        <h4 className="text-lg font-medium text-[#13265c] mb-2">
                          Headquarters
                        </h4>
                        <p className="text-sm text-neutral-500">
                          151 Bloor St W
                          <br />
                          Toronto, ON M5S 1S4
                          <br />
                          Canada
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-6 bg-neutral-100 rounded-sm h-64 flex items-center justify-center">
                    <p className="text-neutral-500 font-medium">
                      [Interactive Map Placeholder]
                    </p>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <section
          className={`bg-[#13265c] text-white ${
            isMobile ? "py-16" : "py-16"
          } relative`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 text-center items-center justify-center relative z-10">
            <div className="max-w-3xl">
              <h2
                className={`${
                  isMobile ? "text-2xl" : "text-3xl md:text-4xl"
                } font-medium text-white mb-6`}>
                Your Next Chapter Starts Here
              </h2>
              <p
                className={`${
                  isMobile ? "text-sm" : "text-lg"
                } text-white/80 font-medium mb-8 ${
                  isMobile ? "leading-relaxed" : ""
                }`}>
                Fluent is ready to be the permanent home for your software
                company. Let's explore how we can build lasting success
                together.
              </p>
              <div
                className={`flex ${
                  isMobile
                    ? "flex-col gap-4 w-full max-w-sm"
                    : "flex-col sm:flex-row gap-4"
                } justify-center`}>
                <Button
                  href="/contact"
                  size="lg"
                  variant="secondary"
                  className={`bg-white text-[#13265c] hover:bg-white/90 ${
                    isMobile ? "w-full" : ""
                  }`}>
                  Submit an Inquiry
                </Button>
                <Button
                  href="/portfolio"
                  size="lg"
                  variant="secondary"
                  className={`bg-transparent text-white hover:bg-white hover:text-[#13265c] ${
                    isMobile ? "w-full" : ""
                  }`}>
                  Explore Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
