"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function InstitutionalPage() {
  const t = useTranslations("Services.institutional");

  const highlights = [
    { titleKey: "highlights.sectors", valueKey: "highlights.sectorsValue" },
    { titleKey: "highlights.scale", valueKey: "highlights.scaleValue" },
    { titleKey: "highlights.approach", valueKey: "highlights.approachValue" },
  ];

  const projects = [
    {
      src: "/images/606 Courcelle (Mission)/IMG_0052.webp",
      alt: "606 Courcelle Mission Project",
      title: "Welcome Hall Mission",
      description:
        "Renovation of corridor and offices for Welcome Hall Mission",
    },
    {
      src: "/images/606 Courcelle (Mission)/IMG_0053.webp",
      alt: "606 Courcelle Mission Interior",
      title: "Welcome Hall Mission",
      description:
        "Renovation of corridor and offices for Welcome Hall Mission",
    },
    {
      src: "/images/2222 Ontario Est (Mission)/IMG_5674.webp",
      alt: "2222 Ontario Est Mission Project",
      title: "Welcome Hall Mission",
      description:
        "Complete building renovation of 22 rooms for Welcome Hall Mission",
    },
    {
      src: "/images/880 rue Guy (Salvation Army)/Kitchen/IMG_6260.webp",
      alt: "880 rue Guy Salvation Army Kitchen",
      title: "Salvation Army",
      description: "Major renovation and addition to existing building",
    },
    {
      src: "/images/Maison des Greffés/IMG_0318.webp",
      alt: "Maison des Greffés Interior",
      title: "Maison des Greffés",
      description:
        "Various renovations including cafeteria, resident smoking rooms, accessible toilets and suites",
    },
    {
      src: "/images/McGill/IMG_6445-scaled (Corridor).webp",
      alt: "McGill Corridor",
      title: "McGill University",
      description:
        "Major renovation of office spaces, day-care, gym, showers, change rooms, and HVAC",
    },
    {
      src: "/images/McGill/IMG_6446-scaled (Office).webp",
      alt: "McGill Office",
      title: "McGill University",
      description: "Modern office space renovation with contemporary finishes",
    },
  ];

  const partners = [
    {
      name: "YMCA's of Quebec",
      logo: "/images/logos/ymca.jpg",
      description:
        "Major Renovation of office spaces, day-care, gym, showers, change rooms, and HVAC.",
    },
    {
      name: "Chez Doris",
      logo: "/images/logos/chez-doris.webp",
      description:
        "Major renovations and 3-storey addition to community women's shelter.",
    },
    {
      name: "Montreal Association for the Blind",
      logo: "/images/logos/mab.jpeg",
      description:
        "Various renovations including cafeteria, resident smoking rooms, accessible toilets and suites.",
    },
  ];

  return (
    <>
      <section
        id="institutional-hero"
        className="relative h-[60vh] min-h-[30rem]">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'url("/images/building-3.webp") no-repeat center center / cover',
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
          <h1 className="px-4 text-6xl leading-[4.5rem] md:leading-[6rem] sm:text-8xl md:text-6xl text-white text-center uppercase opacity-90">
            {t("hero.title")}
          </h1>
        </div>
      </section>

      {/* Institutional content */}
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
            <h2 className="text-3xl md:text-4xl uppercase text-black font-light">
              {t("showcase.title")}
            </h2>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative w-full h-[20rem] overflow-hidden rounded-sm group"
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
                {/* Overlay with project info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-light uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative w-full bg-white py-24">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 items-center text-center mb-16">
            <span className="text-black/50 font-light tracking-wider uppercase">
              {t("partners.label")}
            </span>
            <h2 className="text-3xl md:text-4xl uppercase text-black font-light">
              {t("partners.title")}
            </h2>
          </div>

          {/* Partners grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center gap-6 p-6 bg-theme-background-light rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}>
                {/* Logo container */}
                <div className="relative w-full h-24 flex items-center justify-center">
                  <div className="relative w-40 h-24">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                </div>
                {/* Partner name */}
                <h3 className="text-xl font-light text-black uppercase tracking-wide text-center">
                  {partner.name}
                </h3>
                {/* Description */}
                <p className="text-sm text-black/70 font-light leading-relaxed text-center">
                  {partner.description}
                </p>
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
