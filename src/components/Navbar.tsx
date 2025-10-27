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

  const light_color = light
    ? `text-white hover:text-main group-hover:text-main`
    : `text-main hover:text-neutral-400 group-hover:text-neutral-400`;

  const light_color_bg = light
    ? `bg-white group-hover:bg-main`
    : `bg-main group-hover:bg-neutral-50`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-20 p-2 md:p-2 mx-auto flex items-center justify-between text-white unselectable">
        <Link
          href="/"
          className={`hover:cursor-pointer w-20 md:w-[20rem] z-10 duration-300 ${light_color}`}
          onClick={() => setMenu(false)}>
          <Image
            src="/images/logo.png"
            alt="Encotec"
            width={1000}
            height={1000}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-x-20">
          <Link href="/about" className={`navbar-link ${light_color}`}>
            {t("about")}
          </Link>

          {/* Collections Dropdown */}
          <div>
            <div
              className="group flex items-center gap-x-2"
              onMouseEnter={() => {
                setHover(true);
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                setHover(false);
                setIsOpen(false);
              }}>
              <Link
                href="/collections"
                className={` relative navbar-link ${light_color}`}>
                {t("collections")}
              </Link>
              <svg
                className={`w-5 h-5 navbar-link ${light_color} transition-transform ${
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
              <ul
                className={`pt-6 pb-2 absolute flex-col space-y-6 navbar-link`}
                onMouseEnter={() => {
                  setHover(true);
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  setHover(false);
                  setIsOpen(false);
                }}>
                <li>
                  <Link href={"/collections/bariloche"} className={light_color}>
                    Bariloche
                  </Link>
                </li>
                <li>
                  <Link href={"/collections/calatura"} className={light_color}>
                    Calatura
                  </Link>
                </li>
                <li>
                  <Link href={"/collections/ecla"} className={light_color}>
                    Ecla
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/collections/elisa-cavaletti"}
                    className={light_color}>
                    Elisa Cavaletti
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/collections/gardel-by-moore"}
                    className={light_color}>
                    Gardel by Moore
                  </Link>
                </li>
                <li>
                  <Link href={"/collections/soulmate"} className={light_color}>
                    Soulmate
                  </Link>
                </li>
                <li>
                  <Link href={"/collections/tinta"} className={light_color}>
                    Tinta
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/collections/valentinas"}
                    className={light_color}>
                    Valentina&apos;s
                  </Link>
                </li>
              </ul>
            ) : null}
          </div>

          <Link href="/where-to-buy" className={`navbar-link ${light_color}`}>
            {t("contact")}
          </Link>
          <Link
            href={pathname}
            locale={t("locale") as "en" | "fr" | undefined}
            className={`navbar-link uppercase  ${light_color}`}>
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
          <span className={`hamburger-top ${light_color_bg}`}></span>
          <span className={`hamburger-middle ${light_color_bg}`}></span>
          <span className={`hamburger-bottom ${light_color_bg}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="menu"
        className={`absolute top-0 bottom-0 left-0 flex-col z-10 items-end pr-6 self-end w-full min-h-screen pt-40 text-xl text-white bg-opacity-70 bg-white gap-y-12 lg:hidden ${
          menu
            ? "flex opacity-100 transition-opacity duration-500"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenu(false)}>
        <Link
          href="/about"
          className={`navbar-link word ${light_color} ${
            visibleWords.about ? "show" : ""
          }`}
          onClick={() => setMenu(false)}>
          {t("about")}
        </Link>
        <div>
          <div
            className={`word group flex flex-row-reverse items-center gap-x-2 pl-12 ${
              visibleWords.collections ? "show" : ""
            }`}
            onMouseEnter={() => {
              setHover(true);
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              setHover(false);
              setIsOpen(false);
            }}>
            <Link
              href="/collections"
              className={`relative navbar-link ${light_color}`}>
              {t("collections")}
            </Link>
            <svg
              className={`w-5 h-5 navbar-link ${light_color} transition-transform ${
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
              className="absolute right-0 mr-[9rem] -mt-[1.73rem] z-20 pb-2 flex-col space-y-6 text-right pr-10"
              onTouchStart={() => {
                setHover(true);
                setIsOpen(true);
              }}
              onMouseEnter={() => {
                setHover(true);
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                setHover(false);
                setIsOpen(false);
              }}>
              <li>
                <Link href={"/collections/bariloche"} className={light_color}>
                  Bariloche
                </Link>
              </li>
              <li>
                <Link href={"/collections/calatura"} className={light_color}>
                  Calatura
                </Link>
              </li>
              <li>
                <Link href={"/collections/ecla"} className={light_color}>
                  Ecla
                </Link>
              </li>
              <li>
                <Link
                  href={"/collections/elisa-cavaletti"}
                  className={light_color}>
                  Elisa Cavaletti
                </Link>
              </li>
              <li>
                <Link
                  href={"/collections/gardel-by-moore"}
                  className={light_color}>
                  Gardel by Moore
                </Link>
              </li>
              <li>
                <Link href={"/collections/soulmate"} className={light_color}>
                  Soulmate
                </Link>
              </li>
              <li>
                <Link href={"/collections/tinta"} className={light_color}>
                  Tinta
                </Link>
              </li>
              <li>
                <Link href={"/collections/valentinas"} className={light_color}>
                  Valentina&apos;s
                </Link>
              </li>
            </ul>
          ) : null}
        </div>

        <Link
          href="/where-to-buy"
          className={`navbar-link word ${light_color} ${
            visibleWords.contact ? "show" : ""
          }`}
          onClick={() => setMenu(false)}>
          {t("contact")}
        </Link>
        <Link
          href={pathname}
          locale={t("locale") as "en" | "fr" | undefined}
          className={`navbar-link word ${light_color} uppercase ${
            visibleWords.lang ? "show" : ""
          }`}
          onClick={() => setMenu(false)}>
          {t("locale")}
        </Link>
      </div>
    </>
  );
}
