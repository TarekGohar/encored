"use client";

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <section id="about-hero" className="relative h-[60vh] min-h-[30rem]">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'url("/images/rooftop/roof.png") no-repeat center center / cover',
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
            Who we are
          </h1>
        </div>
      </section>

      {/* About content only, styled to match site aesthetics */}
      <section className="relative w-full bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-10">
          <div className="flex items-start justify-between flex-col md:flex-row">
            <span className="text-black w-fit p-1 font-light tracking-wider uppercase">About Us</span>
            <div className="flex flex-col gap-6 items-start justify-start md:max-w-2xl text-black/80 font-light leading-7">
              <p className="text-sm md:text-base">
                Established in 1994 under the name <span className="font-semibold">ENgineering & COnstruction TEChnologies</span>, Encotec Inc. was formed to
                provide its clients with all their construction and renovation needs.
              </p>
              <p className="text-sm md:text-base">
                Our role has varied from site management and coordination to turn-key and design-build mandates. We strive during
                each project for positive team-oriented relationships with our clients, our consultants and our subcontractors.
              </p>
              <p className="text-sm md:text-base">
                Our team has shown the strength and flexibility to turn any challenge into a success. We define this success not only
                by the quality of construction and respect for budget and schedule, but also by the quality of the relationships we
                have built with our clients.
              </p>
            </div>
          </div>

          {/* Filler: subtle highlights band without duplicating other pages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/10 pt-10">
            {[{
              title: "Established",
              value: "1994"
            },{
              title: "Approach",
              value: "Turn-key & Design-Build"
            },{
              title: "Focus",
              value: "Client-first Collaboration"
            }].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-xs tracking-wider uppercase text-black/50">{item.title}</span>
                <span className="text-lg text-black">{item.value}</span>
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
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-sm mb-8 text-black/50 font-light max-w-lg mx-auto leading-relaxed">
              Ready to start your next project? Get in touch with our team to discuss how we can help bring your vision to life.
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


