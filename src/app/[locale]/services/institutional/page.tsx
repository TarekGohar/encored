"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function InstitutionalPage() {
  return (
    <>
      <section
        id="institutional-hero"
        className="relative h-[60vh] min-h-[30rem]"
      >
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
          <h1 className="px-4 text-6xl leading-[4.5rem] md:leading-[6rem] sm:text-8xl md:text-9xl text-white text-center uppercase opacity-90">
            Institutional
          </h1>
        </div>
      </section>

      {/* Institutional content */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-10">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">
              Institutional Projects
            </span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl text-black/80 font-light leading-7">
              <p className="text-sm md:text-base">
                Encotec specializes in institutional construction and renovation
                projects that demand precision, durability, and adherence to
                stringent safety standards. Our experience spans manufacturing
                facilities, warehouses, distribution centers, and specialized
                institutional environments across diverse sectors.
              </p>
              <p className="text-sm md:text-base">
                We understand the unique challenges of institutional
                construction — from heavy-duty infrastructure requirements and
                specialized electrical systems to material handling
                considerations and compliance with industry-specific
                regulations. Our team brings technical expertise and practical
                solutions to every institutional project.
              </p>
              <p className="text-sm md:text-base">
                From ground-up construction to facility upgrades and expansions,
                we coordinate all aspects of your institutional project with a
                focus on operational efficiency, safety, and long-term
                performance. Our turn-key approach ensures seamless integration
                of mechanical, electrical, and structural systems.
              </p>
            </div>
          </div>

          {/* Project highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/10 pt-10">
            {[
              {
                title: "Expertise",
                value: "Manufacturing & Distribution",
              },
              {
                title: "Standards",
                value: "Safety & Compliance Focused",
              },
              {
                title: "Solutions",
                value: "Heavy-Duty Infrastructure",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-xs tracking-wider uppercase text-black/50">
                  {item.title}
                </span>
                <span className="text-lg text-black">{item.value}</span>
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
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl uppercase text-black">
              Institutional Projects
            </h2>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/606 Courcelle (Mission)/IMG_0052.webp",
                alt: "606 Courcelle Mission Project",
              },
              {
                src: "/images/606 Courcelle (Mission)/IMG_0053.webp",
                alt: "606 Courcelle Mission Interior",
              },
              {
                src: "/images/2222 Ontario Est (Mission)/IMG_5674.webp",
                alt: "2222 Ontario Est Mission Project",
              },
              {
                src: "/images/880 rue Guy (Salvation Army)/Kitchen/IMG_6260.webp",
                alt: "880 rue Guy Salvation Army Kitchen",
              },

              {
                src: "/images/Maison des Greffés/IMG_0318.webp",
                alt: "Maison des Greffés Interior",
              },
              {
                src: "/images/McGill/IMG_6445-scaled (Corridor).webp",
                alt: "McGill Corridor",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative w-full h-[20rem] overflow-hidden rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
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
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Ready to Build Your Institutional Facility?
            </h2>
            <p className="text-sm mb-8 text-black/50 font-light max-w-lg mx-auto leading-relaxed">
              Let's discuss your institutional construction needs and deliver a
              facility that supports your operations for years to come.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              <Link
                href="/contact"
                className="w-[15rem] flex items-center justify-center gap-2"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
