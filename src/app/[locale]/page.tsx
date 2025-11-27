import { getTranslations } from "next-intl/server";
import AboutSection from "@/components/Home/AboutSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import CTA from "@/components/Home/CTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
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
              'url("/images/House/18F_HOUSE.jpg") no-repeat center center / cover',
          }}
        />
        {/* Nice shader overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(20,16,8,0.6) 0%, rgba(40,32,16,0.4) 60%, rgba(10,8,4,0.6) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-x-6 max-w-screen z-20">
          <div className="h-[6rem] w-[6rem]">
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2448.53 2480.83">
              <path
                fill="white"
                d="M1144.45,2480.83C680.22,2444.4.01,1993.56,0,1239.9-.01,493.33,681.15,43.21,1142.92,0l1.53,2480.83Z"
              />
              <path
                fill="white"
                d="M1282.16,0c528.54,0,1037.69,471.44,1068.28,792.94l-1068.63.65"
              />
              <path
                fill="white"
                d="M1282.16,2480.83c528.54,0,1037.69-471.44,1068.28-792.94l-1068.63-.65"
              />
              <path
                fill="white"
                d="M1281.81,933.27h862.75c8.14,0,14.75,6.61,14.75,14.75v570.86c0,8.14-6.61,14.75-14.75,14.75h-862.75v-600.35h0Z"
              />
            </svg>
          </div>
          <h1 className="px-4 text-7xl leading-[5rem] md:leading-[7rem] sm:text-9xl md:text-10xl !font-gontserrat text-white text-left uppercase opacity-90 er">
            {t("hero.title")}
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
