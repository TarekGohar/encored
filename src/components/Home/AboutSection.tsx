"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useMediaQuery } from "react-responsive";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="relative w-full">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col gap-12">
        <div
          className={`flex items-start justify-between ${
            isMobile ? "flex-col" : "flex-row"
          }`}>
          <span className="text-[#13265c] w-fit p-1 font-light tracking-wider uppercase">
            About Us
          </span>
          <div
            className={`w-3/4 flex flex-col gap-8 items-start justify-start ${
              isMobile ? "w-full" : "w-3/4"
            }`}>
            <h2 className="text-3xl md:text-4xl font uppercase text-[#13265c]">
              Building relationships since 1994.
            </h2>
            <p className="text-sm text-neutral-400 font-light max-w-[30rem]">
              Since 1994, Encotec Inc. has delivered complete construction and
              renovation services — cultivating strong, team-oriented
              relationships with our clients, consultants, and subcontractors on
              every project.
            </p>
            <Button href="/portfolio" size="lg" variant="primary">
              Learn More <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="w-full overflow-hidden relative">
          <Image
            src="/images/Westmount/IMG_7980.jpg"
            alt="Valsoft"
            width={1000}
            height={160}
            className="w-full h-[25rem] object-cover object-center"
          />
          {/* Shader overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#13265c]/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
