"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ConsultationSection() {
  return (
    <section className="bg-theme-primary/10 text-[#13265c] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-theme-primary/5 backdrop-blur-sm"></div>
      <div className="container max-w-5xl mx-auto text-center flex flex-col gap-8 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8">
          <h2 className="text-4xl md:text-4xl font-medium text-[#13265c] mb-4">
            Ready to Build the Future of Your Company?
          </h2>
          <p className="text-sm mb-8 text-[#13265c] max-w-lg mx-auto leading-relaxed">
            Whether you’re considering the next chapter for your business or
            exploring growth opportunities, Fluent is here to help.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              className="w-[15rem]">
              Connect with Us
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="primary"
              className="w-[15rem]">
              Explore Acquisitions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
