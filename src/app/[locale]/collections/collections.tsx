"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/Navbar";

const links = [
  "bariloche",
  "calatura",
  "ecla",
  "elisa-cavaletti",
  "gardel-by-moore",
  "soulmate",
  "tinta",
  "valentinas",
];

const sectionBackgrounds = {
  blank: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    backgroundImage: "none",
    backgroundPosition: "center center",
  },
  bariloche: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('/images/bariloche/Tinta y bariloche Club Nautico9146.webp')",
    backgroundPosition: "30% 100%",
  },
  calatura: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url('/images/calatura/Calatura_SS_25_41561 1.webp')",
    backgroundPosition: "45% 0%",
  },
  ecla: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/ecla/IMG_8-9.webp')",
    backgroundPosition: "45% 0%",
  },
  "elisa-cavaletti": {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/elisa-cavaletti/_JCK0528_copia.webp')",
    backgroundPosition: "35% 100%",
  },
  "gardel-by-moore": {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/gardel-collections.webp",
    backgroundPosition: "75% 0%",
  },
  soulmate: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/soulmate/4352-252.webp')",
    backgroundPosition: "45% 0%",
  },
  tinta: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/tinta/Tinta Ibiza0518.webp')",
    backgroundPosition: "55% 100%",
  },
  valentinas: {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('/images/vlts-collections.webp')",
    backgroundPosition: "58% 0%",
  },
};

export default function Home() {
  type SectionId = keyof typeof sectionBackgrounds;
  const [sectionId, setSectionId] = useState<SectionId>("blank");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the currently highlighted link
  const [isMobile, setIsMobile] = useState(false); // Detect mobile devices

  // Define background styles for each section

  const handleHoverStart = (href: string) => {
    if (!isMobile) {
      setSectionId(href.replace("/", "") as SectionId);
      setHoveredLink(href);
    }
  };

  const handleHoverEnd = () => {
    if (!isMobile) {
      setSectionId("blank");
      setHoveredLink(null);
    }
  };

  const handleTouchStart = (href: string, event: React.TouchEvent) => {
    if (isMobile) {
      event.preventDefault(); // Prevent default navigation on first tap
      setSectionId(href.replace("/", "") as SectionId);
      setHoveredLink(href);
    }
  };

  useEffect(() => {
    // Detect if the user is on a mobile device
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      if (mobile) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setSectionId("blank");
        setHoveredLink(null);
      }
    };
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Start cycling immediately
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
      }, 3000);

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [isMobile, links]);

  useEffect(() => {
    if (isMobile) {
      const currentLink = links[currentIndex];
      setSectionId(currentLink.replace("/", "") as SectionId);
      setHoveredLink(`/${currentLink}`);
    }
  }, [currentIndex, isMobile]);

  const currentBackground =
    sectionBackgrounds[sectionId] || sectionBackgrounds.blank;

  return (
    <>
      <Navbar light={false} />
      <section
        id={sectionId}
        style={{
          backgroundImage: currentBackground.backgroundImage || "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition:
            currentBackground.backgroundPosition || "center center",
          height: "100%",
          width: "100%",
          filter: "grayscale(20%)",
        }}>
        <div className="container px-4 md:px-6 min-h-[40rem] md:min-h-[60rem] lg:min-h-[62rem] h-screen flex flex-col items-start justify-center space-y-0">
          {links.map((name) => (
            <Link
              key={name}
              href={`/collections/${name}`}
              onMouseEnter={() => handleHoverStart(`/${name}`)}
              onMouseLeave={handleHoverEnd}
              onTouchStart={(event) => handleTouchStart(`/${name}`, event)}
              className={`text-5xl xl:text-7xl font-medium w-fit block uppercase leading-none er transition-opacity duration-300 unselectable ${
                hoveredLink === `/${name}`
                  ? "text-white opacity-100" // Hovered link
                  : hoveredLink
                  ? "text-white opacity-50" // Non-hovered links when one is hovered
                  : isMobile
                  ? hoveredLink === `/${name}`
                    ? "text-white opacity-100" // Highlighted link on mobile
                    : "text-white opacity-50" // Non-highlighted links on mobile
                  : "text-black opacity-100" // Default black for non-mobile
              }`}
              style={{
                WebkitUserSelect: "none", // Disable text selection for Safari
                userSelect: "none", // Disable text selection
              }}>
              {name.replaceAll("-", " ")}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
