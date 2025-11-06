"use client";

import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import Image from "next/image";

interface navbarProps {
  light: boolean;
}

export default function Navbar({ light }: navbarProps) {
  const [menu, setMenu] = useState(false);
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const [visibleWords, setVisibleWords] = useState({
    about: false,
    collections: false,
    contact: false,
    lang: false,
  });

  useEffect(() => {
    if (!menu) {
      // Reset visibility when menu is closed
      setVisibleWords({
        about: false,
        collections: false,
        contact: false,
        lang: false,
      });
      return;
    }

    // Staggered visibility effect when menu opens
    setTimeout(() => setVisibleWords((prev) => ({ ...prev, about: true })), 0);
    setTimeout(
      () => setVisibleWords((prev) => ({ ...prev, collections: true })),
      100
    );
    setTimeout(
      () => setVisibleWords((prev) => ({ ...prev, contact: true })),
      200
    );
    setTimeout(() => setVisibleWords((prev) => ({ ...prev, lang: true })), 300);

    if (typeof window !== "undefined") {
      // Disable body scroll when menu is open
      if (menu) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }

      // Clean up when component is unmounted or menu changes
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [menu]);


  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 w-full z-[1001] p-1 pr-10 mx-auto flex items-center justify-between text-white unselectable"
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(175, 175, 175, 0.2)",
        }}>
        <Link
          href="/"
          className={`hover:cursor-pointer w-20 md:w-[16rem] z-10 duration-300`}
          onClick={() => setMenu(false)}>
          <Image
            src="/images/logo.png"
            alt="Encotec"
            width={1000}
            height={500}
            className="w-full"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-x-16 text-black">
          <Link href="/about" className="font-light tracking-widest hover:cursor-pointer ">
            About
          </Link>

          {/* Collections Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              setHover(true);
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setHover(false);
              setIsOpen(false);
            }}>
            <div className="group flex items-center gap-x-2">
              <span className={` relative font-light tracking-widest cursor-pointer `}>
                Services
              </span>
              <svg
                className={`w-5 h-5  transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {hover ? (
              <>
                {/* Invisible bridge to prevent gap */}
                <div className="absolute top-full left-0 right-0 h-9"></div>
                <ul
                  className={`mt-9 py-4 px-6 absolute flex-col space-y-6 navbar-link`}
                  style={{
                    backdropFilter: "blur(12px)",
                    backgroundColor: "rgba(175, 175, 175, 0.2)",
                  }}>
                  <li>
                    <Link href={"/services/commercial"} className="font-light tracking-widest" >
                      Commercial
                    </Link>
                  </li>
                  <li>
                    <Link href={"/services/industrial"} className="font-light tracking-widest">
                      Industrial
                    </Link>
                  </li>
                  <li>
                    <Link href={"/services/residential"} className="font-light tracking-widest">
                      Residential
                    </Link>
                  </li>
                </ul>
              </>
            ) : null}
          </div>

          <Link href="/contact" className={`font-light tracking-widest p-4 px-5`}
          style={{
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(175, 175, 175, 0.2)",
          }}>
            Contact Us
          </Link>
          <Link
            href={pathname}
            locale={t("locale") as "en" | "fr" | undefined}
            className={`uppercase font-light tracking-widest`}>
            {t("locale")}
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          aria-label="Open mobile menu"
          id="menu-btn"
          className={`${
            menu ? "open" : ""
          } z-50 block hamburger lg:hidden focus:outline-none group`}
          onClick={() => setMenu((prev) => !prev)}>
          <span className={`hamburger-top `}></span>
          <span className={`hamburger-middle `}></span>
          <span className={`hamburger-bottom `}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`fixed top-0 bottom-0 left-0 flex-col z-[1000] items-end pr-6 self-end w-full min-h-screen pt-40 text-xl text-black gap-y-12 lg:hidden ${
          menu
            ? "flex opacity-100 transition-opacity duration-500"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}>
        <Link
          href="/about"
          className={`word  ${
            visibleWords.about ? "show" : ""
          }`}
          onClick={() => setMenu(false)}>
          About
        </Link>
        <div>
          <div
            className={`word group flex flex-row-reverse items-center gap-x-2 pl-12 ${
              visibleWords.collections ? "show" : ""
            }`}
            onClick={() => {
              setHover(!hover);
              setIsOpen(!isOpen);
            }}>
            <span className={`relative cursor-pointer `}>
              Services
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {hover ? (
            <ul
              className="mt-6 mr-6 flex flex-col space-y-4 text-right text-base"
              onClick={(e) => e.stopPropagation()}>
              <li>
                <Link 
                  href={"/services/commercial"} 
                  className="font-light tracking-widest text-black/70 hover:text-black"
                  onClick={() => {
                    setMenu(false);
                    setHover(false);
                    setIsOpen(false);
                  }}>
                  Commercial
                </Link>
              </li>
              <li>
                <Link 
                  href={"/services/industrial"} 
                  className="font-light tracking-widest text-black/70 hover:text-black"
                  onClick={() => {
                    setMenu(false);
                    setHover(false);
                    setIsOpen(false);
                  }}>
                  Industrial
                </Link>
              </li>
              <li>
                <Link 
                  href={"/services/residential"} 
                  className="font-light tracking-widest text-black/70 hover:text-black"
                  onClick={() => {
                    setMenu(false);
                    setHover(false);
                    setIsOpen(false);
                  }}>
                  Residential
                </Link>
              </li>
            </ul>
          ) : null}
        </div>

        <Link
          href="/contact"
          className={`word  ${
            visibleWords.contact ? "show" : ""
          }`}
          onClick={() => setMenu(false)}>
          Contact
        </Link>
        <Link
          href={pathname}
          locale={t("locale") as "en" | "fr" | undefined}
          className={`word  uppercase ${
            visibleWords.lang ? "show" : ""
          }`}
          onClick={() => setMenu(false)}>
          {t("locale")}
        </Link>
      </div>
    </>
  );
}
