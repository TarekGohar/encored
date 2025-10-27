"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { useMediaQuery } from "react-responsive";

export default function PortfolioSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section className="bg-theme-background-light text-theme-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex flex-col gap-8 text-center items-center justify-center">
        <span
          className={`${
            isMobile ? "w-full" : "w-1/3"
          } text-[#13265c]/50 font-semibold`}>
          Industries We Serve
        </span>

        <h2
          className={`${
            isMobile ? "text-2xl" : "text-3xl md:text-4xl"
          } font-medium text-[#13265c]`}>
          Celebrating Our Most Recent Acquisitions
        </h2>
        <p
          className={`text-sm text-neutral-400 font-medium ${
            isMobile ? "max-w-full" : "max-w-2xl"
          }`}>
          Each transaction we undertake is more than a business deal. It&apos;s
          the beginning of a new chapter, where legacy is honored, innovation is
          fostered, and a shared vision for the future is realized. Our
          acquisitions are built on trust, collaboration, and a commitment to
          sustainable growth, ensuring that every company's story continues to
          flourish within our portfolio.
        </p>
        <Button href="/portfolio" size="lg" variant="primary">
          View All Acquisitions
        </Button>
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16 relative w-full justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}>
          {[
            {
              industry: "Dental",
              company: "TDO",
              image: "/images/dental.webp",
            },
            {
              industry: "Retail",
              company: "Cybertill",
              image: "/images/analytics.webp",
            },
            {
              industry: "Healthcare",
              company: "American Data",
              image: "/images/healthcare.webp",
            },
          ].map((item, index) => (
            <motion.div
              className={`w-full md:w-80 lg:w-[20rem] h-[20rem] md:h-[22rem] lg:h-[25rem] flex flex-col gap-2 bg-[#13265c]/3 p-6 overflow-hidden relative ${
                index === 1
                  ? "lg:mt-5"
                  : index === 2
                  ? "lg:-mt-12"
                  : "lg:-mt-12"
              }`}
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                scale: isMobile ? 1 : 1.02,
                y: isMobile ? 0 : -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}>
              <Image
                src={item.image}
                alt={`${item.company} - ${item.industry}`}
                width={1000}
                height={160}
                className="object-cover object-center w-full h-full absolute top-0 left-0"
              />
              {/* Overlay */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#13265c]/40 z-10"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: isMobile ? 0.4 : 0.3 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h3
                className="absolute top-0 left-0 text-base md:text-lg font-medium text-[#ffffff] leading-tight z-20 p-4 md:p-6 flex flex-col items-start justify-start space-y-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}>
                <span className="text-sm text-[#ffffff] leading-tight">
                  {item.company}
                </span>
                <span className="text-xs font-medium text-[#ffffff] leading-tight">
                  {item.industry}
                </span>
              </motion.h3>
              <p className="absolute bottom-0 left-0 text-sm text-[#ffffff] leading-tight z-20 p-6"></p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
