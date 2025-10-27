"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function ContactSuccess() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // Auto-redirect after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`min-h-screen bg-theme-background relative overflow-hidden w-full ${
        isMobile ? "pt-16" : "pt-24"
      }`}>
      {/* Global Background Elements */}
      <div className="absolute inset-0 overflow-hidden w-full">
        <div className="absolute -top-40 -right-40 w-[40vw] h-[40vw] bg-theme-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[40vw] h-[40vw] bg-theme-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-theme-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative w-full">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
            isMobile ? "py-16" : "py-24"
          }`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-center ${isMobile ? "mb-8" : "mb-16"}`}>
            <span
              className={`inline-block ${
                isMobile ? "px-4 py-2" : "px-6 py-3"
              } rounded-full bg-theme-primary/10 text-theme-primary ${
                isMobile ? "text-xs" : "text-sm"
              } font-medium mb-4 border border-theme-primary/20`}>
              Thank You
            </span>
            <h1
              className={`${
                isMobile ? "text-3xl" : "text-4xl md:text-5xl"
              } font-medium mb-4 text-theme-foreground`}>
              Message Received
            </h1>
            <p
              className={`${
                isMobile ? "text-sm" : "text-lg"
              } text-theme-foreground-muted max-w-2xl mx-auto ${
                isMobile ? "leading-relaxed" : ""
              }`}>
              Thank you for reaching out to Fluent. We've received your inquiry
              and will get back to you shortly.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`bg-theme-card/80 backdrop-blur-sm rounded-xl ${
                isMobile ? "p-6" : "p-8"
              } border border-theme-border shadow-sm relative overflow-hidden`}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

              <div className="flex flex-col items-center justify-center text-center relative z-10">
                <div
                  className={`${
                    isMobile ? "w-16 h-16" : "w-20 h-20"
                  } bg-theme-primary/10 rounded-full flex items-center justify-center mb-6`}>
                  <CheckCircle
                    className={`${
                      isMobile ? "h-8 w-8" : "h-10 w-10"
                    } text-theme-primary`}
                  />
                </div>

                <h2
                  className={`${
                    isMobile ? "text-xl" : "text-2xl"
                  } font-medium mb-4 text-theme-foreground`}>
                  Your Inquiry Has Been Submitted
                </h2>

                <p
                  className={`text-theme-foreground-muted mb-8 ${
                    isMobile ? "text-sm leading-relaxed" : ""
                  }`}>
                  We appreciate your interest in Fluent. Our team will review
                  your message and contact you within 2 business days.
                </p>

                <div
                  className={`flex ${
                    isMobile
                      ? "flex-col gap-4 w-full"
                      : "flex-col sm:flex-row gap-4"
                  }`}>
                  <Link href="/">
                    <motion.div
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center bg-theme-primary text-theme-primary-foreground py-3 px-6 rounded-md font-semibold hover:bg-theme-primary-dark transition-colors shadow-sm ${
                        isMobile ? "w-full" : ""
                      }`}>
                      Return to Home
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Link>

                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: isMobile ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center justify-center bg-theme-background text-theme-primary py-3 px-6 rounded-md font-semibold border border-theme-primary hover:bg-theme-background-dark transition-colors ${
                        isMobile ? "w-full" : ""
                      }`}>
                      Send Another Message
                    </motion.div>
                  </Link>
                </div>

                <p
                  className={`${
                    isMobile ? "text-xs" : "text-sm"
                  } text-theme-foreground-muted mt-6`}>
                  You will be automatically redirected to the home page in 10
                  seconds.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
