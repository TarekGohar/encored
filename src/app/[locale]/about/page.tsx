"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");

  const highlights = [
    {
      titleKey: "highlights.established",
      valueKey: "highlights.establishedValue",
    },
    {
      titleKey: "highlights.approach",
      valueKey: "highlights.approachValue",
    },
    {
      titleKey: "highlights.focus",
      valueKey: "highlights.focusValue",
    },
  ];

  return (
    <>
      <section id="about-hero" className="relative h-[60vh] min-h-[30rem]">
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
          <h1 className="px-4 text-6xl leading-[4.5rem] md:leading-[6rem] sm:text-8xl md:text-7xl text-white text-center uppercase opacity-90">
            {t("hero.title")}
          </h1>
        </div>
      </section>

      {/* About content only, styled to match site aesthetics */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-10">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">
              {t("content.label")}
            </span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl text-black/80 font-light leading-7">
              <p
                className="text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: t.raw("content.paragraph1") }}
              />
              <p className="text-sm md:text-base">
                {t("content.paragraph2")}
              </p>
              <p className="text-sm md:text-base">
                {t("content.paragraph3")}
              </p>
            </div>
          </div>

          {/* Filler: subtle highlights band without duplicating other pages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/10 pt-10">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-xs tracking-wider uppercase text-black/50">
                  {t(item.titleKey)}
                </span>
                <span className="text-lg text-black">{t(item.valueKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-theme-primary/10 text-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary/5 backdrop-blur-sm"></div>
        <div className="container max-w-5xl mx-auto text-center flex flex-col gap-8 relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8">
            <h2 className="text-3xl md:text-4xl text-black mb-4 font-light">
              {t("cta.title")}
            </h2>
            <p className="text-sm mb-8 text-black/50 font-light max-w-lg mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/contact"
                className="w-[15rem] flex items-center justify-center gap-2 font-light hover:text-black/60 duration-300">
                {t("cta.button")}
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
