"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function ConsultationSection() {
  return (
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
            Ready to Start Your Next Project?
          </h2>
          <p className="text-sm mb-8 text-black/50 font-light max-w-lg mx-auto leading-relaxed">
            From site management to turn-key solutions, let Encotec bring your construction and renovation vision to life.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <Link
              href="/contact"
              className="w-[15rem] flex items-center justify-center gap-2">
              Get in Touch
              <ChevronRight className="w-4 h-4" />
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
