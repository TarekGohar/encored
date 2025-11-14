import Image from "next/image";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import { getTranslations } from "next-intl/server";
import AboutSection from "@/components/Home/AboutSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import CTA from "@/components/Home/CTA";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("home-title"),
    description: t("home-description"),
  };
}

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <>
      <section id="hero" className="relative h-screen min-h-[50rem]">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'url("/images/rooftop/IMG_0296.webp") no-repeat center center / cover',
          }}
        />
        {/* Nice shader overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(25,36,52,0.7) 0%, rgba(0,0,0,0.15) 60%, rgba(180,180,216,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center max-w-screen z-20">
          <h1 className="px-4 text-7xl leading-[5rem] md:leading-[7rem] sm:text-9xl md:text-10xl font- text-white text-left uppercase opacity-90 er">
            Encotec
          </h1>
        </div>
      </section>

      {/* About Us */}
      <AboutSection />

      <PortfolioSection />

      <CTA />
    </>
  );
}
