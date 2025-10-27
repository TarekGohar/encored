"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface CarouselProps {
  images: {
    src: string;
    width: number;
    height: number;
    isHorizontal: boolean;
  }[];
}

export default function ImageCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Set up event listener to check window width
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the typical md breakpoint
    };

    // Check initially
    checkIfMobile();

    // Set up listener for resize events
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const goToPrevious = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const iconSize = isMobile ? 50 : 100;

  return (
    <div className="max-w-[120rem] w-full overflow-hidden mx-auto relative">
      <div
        className="relative aspect-w-16 aspect-h-9"
        style={{
          height: "80vh",
        }}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 z-10">
            <div className="w-12 h-12 rounded-full border-4 border-neutral-300 border-t-neutral-600 animate-spin"></div>
          </div>
        )}
        <Image
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          width={images[currentIndex].width}
          height={images[currentIndex].height}
          className="object-contain w-full h-full"
          onLoadingComplete={handleImageLoad}
          priority
        />
      </div>
      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-200 hover:text-neutral-300 duration-300 rotate-180 z-20"
        aria-label="Previous image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute bottom-2 right-2 top-1/2 -translate-y-1/2 text-neutral-200 hover:text-neutral-300 z-20"
        aria-label="Next image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </button>
      {/* Image counter */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-sm z-20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
