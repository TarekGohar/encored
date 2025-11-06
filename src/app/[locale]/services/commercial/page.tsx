"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CommercialPage() {
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
          <h1 className="px-4 text-6xl leading-[4.5rem] md:leading-[6rem] sm:text-8xl md:text-9xl text-white text-center uppercase opacity-90">
            Commercial
          </h1>
        </div>
      </section>

      {/* Commercial content */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-10">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">Commercial Projects</span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl text-black/80 font-light leading-7">
              <p className="text-sm md:text-base">
                Encotec brings decades of expertise to commercial construction and renovation projects across Montreal and beyond. 
                From office buildings and retail spaces to hospitality venues and institutional facilities, we deliver exceptional 
                results that meet the unique demands of commercial environments.
              </p>
              <p className="text-sm md:text-base">
                Our commercial portfolio spans a diverse range of sectors including hotels, corporate offices, healthcare facilities, 
                educational institutions, and retail establishments. We understand the critical importance of minimizing disruption 
                to your operations while maintaining the highest standards of quality and safety.
              </p>
              <p className="text-sm md:text-base">
                Whether you need a complete build-out, strategic renovations, or ongoing maintenance, our team coordinates every 
                aspect of your project with precision and professionalism. We work closely with architects, engineers, and stakeholders 
                to ensure your commercial space reflects your brand and serves your business objectives.
              </p>
            </div>
          </div>

          {/* Project highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/10 pt-10">
            {[{
              title: "Sectors Served",
              value: "Hotels, Offices, Retail & More"
            },{
              title: "Project Scale",
              value: "Small Fit-Outs to Large Build-Outs"
            },{
              title: "Approach",
              value: "Minimal Disruption, Maximum Quality"
            }].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-xs tracking-wider uppercase text-black/50">{item.title}</span>
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
            <span className="text-black/50 font-light tracking-wider uppercase">Featured Work</span>
            <h2 className="text-3xl md:text-4xl uppercase text-black">Commercial Projects</h2>
          </div>

          {/* Image grid - placeholders for now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="relative w-full h-[20rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full h-full bg-black/5 flex items-center justify-center">
                  <span className="text-black/30 text-sm">Project Image {item}</span>
                </div>
                {/* Overlay for future images */}
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
              Ready to Transform Your Commercial Space?
            </h2>
            <p className="text-sm mb-8 text-black/50 font-light max-w-lg mx-auto leading-relaxed">
              Let's discuss your commercial project and how we can deliver exceptional results for your business.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                className="w-[15rem]">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

