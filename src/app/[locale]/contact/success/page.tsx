"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Home, Mail, Clock, Phone } from "lucide-react";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ContactSuccess() {
  const t = useTranslations("Contact.success");
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  // Countdown and auto-redirect
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <>
      {/* Hero Section - matches contact page */}
      <section id="success-hero" className="relative h-[60vh] min-h-[30rem]">
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 text-6xl leading-[4.5rem] md:leading-[6rem] text-white text-center uppercase opacity-80">
            {t("title")}
          </motion.h1>
        </div>
      </section>

      {/* Intro Section - matches contact page pattern */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-16">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">
              {t("badge")}
            </span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl uppercase text-black font-light">
                {t("cardTitle")}
              </h2>
              <p className="text-sm md:text-base text-black/80 font-light leading-7">
                {t("cardDescription")}
              </p>
            </div>
          </div>

          {/* Success Icon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center">
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-black/5 -z-10"
              />
              {/* Inner circle with check */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-black flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3,
                  }}>
                  <Check className="w-10 h-10 md:w-14 md:h-14 text-white" strokeWidth={3} />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Info Cards - matches contact page card style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/5 p-6 flex flex-col gap-4">
              <Mail className="h-6 w-6 text-black" />
              <div>
                <h3 className="text-lg text-black mb-2 font-light">
                  {t("description")}
                </h3>
                <p className="text-sm font-light text-black/70">
                  We&apos;ll respond within 2 business days
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/5 p-6 flex flex-col gap-4">
              <Phone className="h-6 w-6 text-black" />
              <div>
                <h3 className="text-lg font-light text-black mb-2">
                  Need Immediate Help?
                </h3>
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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/5 p-6 flex flex-col gap-4">
              <Clock className="h-6 w-6 text-black" />
              <div>
                <h3 className="text-lg font-light text-black mb-2">
                  Response Time
                </h3>
                <p className="text-sm font-light text-black/70 whitespace-pre-line">
                  Typically within 2 business days
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Section - matches contact form section */}
      <section className="bg-theme-background-light py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
            {/* Action Buttons Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8">
              <h3 className="text-2xl md:text-3xl uppercase text-black mb-6 font-light">
                What&apos;s Next?
              </h3>
              <div className="flex flex-col gap-4">
                <Link href="/">
                  <button className="w-full inline-flex items-center justify-center bg-black text-white px-8 py-3 hover:bg-black/90 transition-colors font-light">
                    <Home className="mr-2 h-5 w-5" />
                    {t("returnHome")}
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="w-full inline-flex items-center justify-center bg-white text-black px-8 py-3 border border-black hover:bg-black/5 transition-colors font-light">
                    {t("sendAnother")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Countdown Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8">
              <h3 className="text-2xl md:text-3xl uppercase text-black mb-6 font-light">
                Auto Redirect
              </h3>
              <div className="bg-black/2 p-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    key={countdown}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white text-lg font-light flex-shrink-0">
                    {countdown}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-light text-black mb-2">
                      Redirecting Soon
                    </h4>
                    <p className="text-sm font-light text-black/70 leading-relaxed">
                      {t("redirect")}
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
