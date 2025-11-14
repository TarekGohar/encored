"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Loader2,
  Building2,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    <>
      {/* Hero Section */}
      <section id="contact-hero" className="relative h-[60vh] min-h-[30rem]">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'url("/images/rooftop/roof.webp") no-repeat center center / cover',
          }}
        />
        {/* Shader overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(25,36,52,0.7) 0%, rgba(0,0,0,0.15) 60%, rgba(180,180,216,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="px-4 text-6xl leading-[4.5rem] md:leading-[6rem] sm:text-8xl md:text-9xl text-white text-center uppercase opacity-80">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-16">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">
              Get in Touch
            </span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl uppercase text-black">
                Let's Build Together
              </h2>
              <p className="text-sm md:text-base text-black/80 font-light leading-7">
                Whether you're planning a commercial build-out, an institutional
                facility, or a residential renovation, Encotec is ready to bring
                your vision to life. Reach out today to discuss your project
                needs.
              </p>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/5 p-6 flex flex-col gap-4">
              <Phone className="h-6 w-6 text-black" />
              <div>
                <h3 className="text-lg text-black mb-2">Phone</h3>
                <a
                  href="tel:+15149080266"
                  className="text-sm font-light text-black/70 hover:text-black transition-colors">
                  (514) 908-0266
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/5 p-6 flex flex-col gap-4">
              <Mail className="h-6 w-6 text-black" />
              <div>
                <h3 className="text-lg font text-black mb-2">Email</h3>
                <a
                  href="mailto:michele@encotec.ca"
                  className="text-sm font-light text-black/70 hover:text-black transition-colors">
                  michele@encotec.ca
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/5 p-6 flex flex-col gap-4">
              <Clock className="h-6 w-6 text-black" />
              <div>
                <h3 className="text-lg text-black mb-2">Hours</h3>
                <p className="text-sm font-light text-black/70">
                  Monday - Friday
                  <br />
                  8:00 AM - 5:00 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-theme-background-light py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8">
              <h3 className="text-2xl md:text-3xl uppercase text-black mb-6">
                Request a Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-light text-black mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/5 border-none transition-all duration-200 outline-none text-black focus:bg-black/10"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-light text-black mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/5 border-none transition-all duration-200 outline-none text-black focus:bg-black/10"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-light text-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/5 border-none transition-all duration-200 outline-none text-black focus:bg-black/10"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-light text-black mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/5 border-none transition-all duration-200 outline-none text-black focus:bg-black/10"
                      placeholder="(514) 908-0266"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-light text-black mb-2">
                    Project Type *
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/5 border-none transition-all duration-200 outline-none text-black focus:bg-black/10 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        paddingRight: "3rem",
                      }}>
                      <option value="">Select a project type</option>
                      <option value="commercial">Commercial</option>
                      <option value="institutional">Institutional</option>
                      <option value="residential">Residential</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-light text-black mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/5 border-none transition-all duration-200 outline-none text-black focus:bg-black/10 resize-none"
                    placeholder="Tell us about your project..."></textarea>
                </div>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center bg-black text-white px-8 py-3 hover:bg-black/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl uppercase text-black mb-6">
                  Our Office
                </h3>
                <p className="text-sm md:text-base text-black/70 font-light leading-7 mb-8">
                  Visit us at our office or reach out through any of the contact
                  methods above. We're here to answer your questions and help
                  bring your construction project to life.
                </p>
              </div>

              <div className="bg-black/2 p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-black mb-2">Encotec Inc.</h4>
                    <p className="text-sm font-light text-black/70 leading-relaxed">
                      4459 Rue Sherbrooke O.
                      <br />
                      Westmount, QC H3Z 1E7
                      <br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/2 p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-6 w-6 text-black flex-shrink-0" />
                  <div>
                    <h4 className="text-lg text-black mb-2">What We Do</h4>
                    <p className="text-sm font-light text-black/70 leading-relaxed">
                      From site management and coordination to turn-key and
                      design-build mandates, we handle commercial,
                      institutional, and residential construction projects with
                      professionalism and care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
