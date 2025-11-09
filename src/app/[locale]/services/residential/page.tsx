"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ResidentialPage() {
  return (
    <>
      <section
        id="residential-hero"
        className="relative h-[60vh] min-h-[30rem]"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'url("/images/building-4.webp") no-repeat center center / cover',
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
            Residential
          </h1>
        </div>
      </section>

      {/* Residential content */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-10">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">
              Residential Projects
            </span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl text-black/80 font-light leading-7">
              <p className="text-sm md:text-base">
                Encotec brings craftsmanship and attention to detail to every
                residential project. From custom homes and luxury condominiums
                to multi-unit developments and heritage renovations, we create
                living spaces that combine beauty, functionality, and lasting
                quality.
              </p>
              <p className="text-sm md:text-base">
                Our residential portfolio includes single-family homes,
                apartment buildings, townhouse complexes, and high-end
                residential renovations. We understand that homes are personal
                spaces, and we work closely with homeowners, architects, and
                designers to bring your vision to life with meticulous care and
                professional execution.
              </p>
              <p className="text-sm md:text-base">
                Whether you're building a dream home from the ground up,
                renovating a heritage property, or developing a multi-unit
                residential complex, our team manages every detail with
                precision. We combine modern construction techniques with
                timeless craftsmanship to deliver residential spaces that stand
                the test of time.
              </p>
            </div>
          </div>

          {/* Project highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/10 pt-10">
            {[
              {
                title: "Specialization",
                value: "Custom Homes & Renovations",
              },
              {
                title: "Craftsmanship",
                value: "Attention to Every Detail",
              },
              {
                title: "Service",
                value: "From Concept to Completion",
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
              Residential Projects
            </h2>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/rooftop/IMG_0234 (1).webp",
                alt: "Rooftop Project",
              },
              {
                src: "/images/rooftop/IMG_0267.webp",
                alt: "Rooftop Development",
              },

              { src: "/images/rooftop/rooftop-1.webp", alt: "Rooftop View" },
              { src: "/images/rooftop/roof.webp", alt: "Rooftop Space" },
              {
                src: "/images/Westmount/Kitchen.webp",
                alt: "Westmount Kitchen",
              },
              {
                src: "/images/Westmount/Corridor.webp",
                alt: "Westmount Corridor",
              },
              {
                src: "/images/Westmount/MasterBathShower.webp",
                alt: "Westmount Master Bath",
              },
              {
                src: "/images/Westmount/SittingRoom.webp",
                alt: "Westmount Sitting Room",
              },
              {
                src: "/images/Westmount/View.webp",
                alt: "Westmount View",
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
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-sm mb-8 text-black/50 font-light max-w-lg mx-auto leading-relaxed">
              Let's bring your residential vision to life with craftsmanship and
              care that exceeds expectations.
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
