"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";

interface InfiniteCarouselProps {
  title: string;
  images: { src: string; alt: string }[];
}

function InfiniteCarousel({ title, images }: InfiniteCarouselProps) {
  // Start in the middle set for infinite looping
  const [currentIndex, setCurrentIndex] = useState(images.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const transitionRef = useRef<NodeJS.Timeout | null>(null);

  // Track screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Duplicate images for infinite scroll effect (3 sets)
  const duplicatedImages = [...images, ...images, ...images];

  // Calculate the percentage to translate
  // Mobile: 1 image at a time (100% per image), Desktop: 2 images (50% per image)
  const imagesPerView = isMobile ? 1 : 2;
  const slideWidthPercent = 100 / duplicatedImages.length;

  const goToSlide = useCallback(
    (index: number, animate = true) => {
      if (isTransitioning && animate) return;

      if (animate) {
        setIsTransitioning(true);
      }
      setCurrentIndex(index);

      if (animate) {
        // Clear any existing timeout
        if (transitionRef.current) {
          clearTimeout(transitionRef.current);
        }

        transitionRef.current = setTimeout(() => {
          setIsTransitioning(false);

          // Reset position for infinite loop (without animation)
          setCurrentIndex((prev) => {
            if (prev >= images.length * 2) {
              return prev - images.length;
            } else if (prev < images.length) {
              return prev + images.length;
            }
            return prev;
          });
        }, 500);
      }
    },
    [isTransitioning, images.length]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (transitionRef.current) {
        clearTimeout(transitionRef.current);
      }
    };
  }, []);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide, isTransitioning]);

  // Get the display index (0 to images.length-1) for dot indicators
  const displayIndex =
    ((currentIndex % images.length) + images.length) % images.length;

  return (
    <div className="w-full">
      {/* Title */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl text-black font-light tracking-wide">
          {title}
        </h3>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Previous image">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Next image">
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:scale-110 transition-transform" />
        </button>

        {/* Images Container */}
        <motion.div
          className="flex"
          animate={{
            x: `${-(currentIndex * slideWidthPercent)}%`,
          }}
          transition={
            isTransitioning
              ? { duration: 0.5, ease: "easeInOut" }
              : { duration: 0 }
          }
          style={{
            width: `${duplicatedImages.length * (100 / imagesPerView)}%`,
          }}>
          {duplicatedImages.map((image, idx) => (
            <div
              key={idx}
              className="relative h-[25rem] md:h-[35rem] flex-shrink-0 px-1 md:px-2"
              style={{ width: `${slideWidthPercent}%` }}>
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isTransitioning) return;
                // Calculate target index in the middle set
                const targetIndex = images.length + idx;
                goToSlide(targetIndex);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === displayIndex
                  ? "w-8 bg-black"
                  : "w-2 bg-black/30 hover:bg-black/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResidentialPage() {
  const t = useTranslations("Services.residential");

  const highlights = [
    { titleKey: "highlights.sectors", valueKey: "highlights.sectorsValue" },
    { titleKey: "highlights.scale", valueKey: "highlights.scaleValue" },
    { titleKey: "highlights.approach", valueKey: "highlights.approachValue" },
  ];

  const carousels = [
    {
      titleKey: "showcase.residence1",
      images: [
        { src: "/images/rooftop/IMG_0234 (1).webp", alt: "Rooftop Project" },
        { src: "/images/rooftop/IMG_0267.webp", alt: "Rooftop Development" },
        { src: "/images/rooftop/IMG_0261.webp", alt: "Rooftop View" },
        { src: "/images/rooftop/roof.webp", alt: "Rooftop Space" },
      ],
    },
    {
      titleKey: "showcase.residence2",
      images: [
        { src: "/images/Westmount/Kitchen.webp", alt: "Westmount Kitchen" },
        { src: "/images/Westmount/Corridor.webp", alt: "Westmount Corridor" },
        {
          src: "/images/Westmount/MasterBathShower.webp",
          alt: "Westmount Master Bath",
        },
        {
          src: "/images/Westmount/SittingRoom.webp",
          alt: "Westmount Sitting Room",
        },
        { src: "/images/Westmount/View.webp", alt: "Westmount View" },
      ],
    },
    {
      titleKey: "showcase.residence3",
      images: [
        {
          src: "/images/House/3F_HOUSE.webp",
          alt: "Private Residence 3F",
        },
        {
          src: "/images/House/4F_HOUSE.webp",
          alt: "Private Residence 4F",
        },
        {
          src: "/images/House/6F_HOUSE.webp",
          alt: "Private Residence 6F",
        },
        {
          src: "/images/House/10F_HOUSE.webp",
          alt: "Private Residence 10F",
        },
        {
          src: "/images/House/11F_HOUSE.webp",
          alt: "Private Residence 11F",
        },
        {
          src: "/images/House/13F_HOUSE.webp",
          alt: "Private Residence 13F",
        },
        {
          src: "/images/House/14F_HOUSE.webp",
          alt: "Private Residence 14F",
        },
        {
          src: "/images/House/16F_HOUSE.webp",
          alt: "Private Residence 16F",
        },
        {
          src: "/images/House/17F_HOUSE.webp",
          alt: "Private Residence 17F",
        },
        {
          src: "/images/House/18F_HOUSE.webp",
          alt: "Private Residence 18F",
        },
        {
          src: "/images/House/20F_HOUSE.webp",
          alt: "Private Residence 20F",
        },
        {
          src: "/images/House/21F_HOUSE.webp",
          alt: "Private Residence 21F",
        },
        {
          src: "/images/House/23F_HOUSE.webp",
          alt: "Private Residence 23F",
        },
        {
          src: "/images/House/24F_HOUSE.webp",
          alt: "Private Residence 24F",
        },
        {
          src: "/images/House/25F_HOUSE.webp",
          alt: "Private Residence 25F",
        },
        {
          src: "/images/House/26F_HOUSE.webp",
          alt: "Private Residence 26F",
        },
        {
          src: "/images/House/27F_HOUSE.webp",
          alt: "Private Residence 27F",
        },
      ],
    },
  ];

  return (
    <>
      <section
        id="residential-hero"
        className="relative h-[60vh] min-h-[30rem]">
        {/* Background image */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{
            background:
              'url("/images/House/4F_HOUSE.webp") no-repeat 50% 60% / cover',
            height: "100%",
          }}
        />
        {/* Shader overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(25,36,52,0.8) 0%, rgba(0,0,0,0.15) 60%, rgba(180,180,216,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="px-4 text-4xl leading-[4.5rem] md:leading-[6rem] sm:text-7xl md:text-[6rem] text-white text-center uppercase opacity-90">
            {t("hero.title")}
          </h1>
        </div>
      </section>

      {/* Residential content */}
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
                <span className="text-xs tracking-wider uppercase text-black/50 font-light">
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

          {/* Infinite Image Carousels */}
          <div className="flex flex-col gap-16">
            {carousels.map((carousel, idx) => (
              <InfiniteCarousel
                key={idx}
                title={t(carousel.titleKey)}
                images={carousel.images}
              />
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
                className="w-[15rem] flex items-center justify-center gap-2">
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
