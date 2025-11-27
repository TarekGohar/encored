"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { useMediaQuery } from "react-responsive";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const t = useTranslations("Home.about");

  return (
    <div className="relative w-full">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col gap-12">
        <div
          className={`flex items-start justify-between ${
            isMobile ? "flex-col" : "flex-row"
          }`}>
          <span className="text-black w-fit p-1 font-light tracking-wider uppercase">
            {t("label")}
          </span>
          <div
            className={` flex flex-col gap-8 items-start justify-start ${
              isMobile ? "w-full" : ""
            }`}>
            <h2 className="text-3xl md:text-4xl uppercase text-black font-light">
              {t("title")}
            </h2>
            <p className="text-sm text-black/50 font-light max-w-[30rem]">
              {t("description")}
            </p>
            <Button href="/about" variant="primary">
              {t("cta")} <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
