"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CommercialPage() {
  const t = useTranslations("Services.commercial");

  const highlights = [
    { titleKey: "highlights.sectors", valueKey: "highlights.sectorsValue" },
    { titleKey: "highlights.scale", valueKey: "highlights.scaleValue" },
    { titleKey: "highlights.approach", valueKey: "highlights.approachValue" },
  ];

  const images = [
    { src: "/images/AEI Internet/AEILobby.webp", alt: "AEI Internet Lobby" },
    { src: "/images/Hotel du Park/WyndhamHotels (Bar).webp", alt: "Hotel du Park Bar" },
    { src: "/images/Hyatt Regency Montreal/Hotels-HyattRegencyMontreal1.webp", alt: "Hyatt Regency Montreal" },
    { src: "/images/Hyatt Regency Montreal/Lobby-MapofWorld.webp", alt: "Hyatt Regency Lobby" },
    { src: "/images/Pierrefonds Animal Hospital/Commercial-PierrefondsAnimalHospital-1.webp", alt: "Pierrefonds Animal Hospital" },
    { src: "/images/The Ritz-Carlton Montreal/Ritz Montreal (1).webp", alt: "The Ritz-Carlton Montreal" },
  ];

  return (
    <>
      <section id="commercial-hero" className="relative h-[60vh] min-h-[30rem]">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'url("/images/building-2.webp") no-repeat center center / cover',
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
          <h1 className="px-4 text-6xl leading-[4.5rem] md:leading-[6rem] text-white text-center uppercase opacity-90">
            {t("hero.title")}
          </h1>
        </div>
      </section>

      {/* Commercial content */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-10">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">
              {t("content.label")}
            </span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl text-black/80 font-light leading-7">
              <p className="text-sm md:text-base">{t("content.paragraph1")}</p>
              <p className="text-sm md:text-base">{t("content.paragraph2")}</p>
              <p className="text-sm md:text-base">{t("content.paragraph3")}</p>
            </div>
          </div>

          {/* Project highlights */}
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

      {/* Image showcase section */}
      <section className="relative w-full bg-theme-background-light py-24">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 items-center text-center mb-12">
            <span className="text-black/50 font-light tracking-wider uppercase">
              {t("showcase.label")}
            </span>
            <h2 className="text-3xl md:text-4xl uppercase text-black">
              {t("showcase.title")}
            </h2>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative w-full h-[20rem] overflow-hidden rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-sm mb-8 text-black/50 font-light max-w-lg mx-auto leading-relaxed">
              {t("cta.description")}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/contact"
                className="w-[15rem] flex items-center justify-center gap-2">
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
