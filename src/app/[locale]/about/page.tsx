import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("about-title"),
    description: t("about-description"),
  };
}

export default async function Home() {
  const t = await getTranslations("About");
  return (
    <>
      <div>
        <Navbar light={false} />
        <div className="h-[20rem] md:h-[36rem] flex jusitfy-center items-center">
          <h1 className=" px-4 container text-5xl md:text-7xl font-medium text-main uppercase ">
            {t("header")}
          </h1>
        </div>
      </div>

      {/* History */}
      <div className=" bg-neutral-100">
        <div className="py-12 flex flex-col md:flex-row gap-y-12 container h-fit md:h-[70rem] px-4">
          <div className="h-full flex flex-col justify-center space-y-4 md:pr-8 lg:pr-12">
            <h2 className="text-5xl md:text-5xl font-medium  uppercase text-main">
              {t("first-heading")}
            </h2>
            <p className="font-light text-md leading-loose md:text-xl md:leading-loose text-neutral-500">
              {t("first-paragraph")}
            </p>
          </div>
          <Image
            src="/images/elisa-cavaletti/_JCK0358 copia_2.webp"
            width={960}
            height={540}
            alt="Elisa Cavaletti model"
            className="md:w-1/2 h-full object-cover"
          />
        </div>
      </div>

      {/* Mission */}

      <div className="py-12 container flex flex-col md:flex-row-reverse gap-y-12 h-fit md:h-[70rem] px-4">
        <div className="h-full flex flex-col justify-center space-y-4 md:pl-8 lg:pl-12">
          <h2 className="text-5xl md:text-5xl font-medium  uppercase text-main">
            {t("second-heading")}
          </h2>
          <p className="font-light text-md leading-loose md:text-xl md:leading-loose text-neutral-500">
            {t("second-paragraph")}
          </p>
        </div>
        <Image
          src="/images/valentinas/vlt_s-ss24-florence-240216-ph-stefano-casati-03882.webp"
          width={960}
          height={540}
          alt="Elisa Cavaletti model"
          className="md:w-1/2 h-full object-cover"
        />
      </div>

      <div className=" bg-neutral-100">
        <div className="container h-[30rem] flex flex-col justify-center space-y-4 px-4">
          <h2 className="text-5xl md:text-5xl font-medium  uppercase text-main">
            {t("third-heading")}
          </h2>
          <p className="font-light text-md leading-loose md:text-xl md:leading-loose text-neutral-500">
            {t("third-paragraph")}
          </p>
          <Link
            href="/collections"
            className="flex items-center gap-x-2 py-1 w-fit text-md md:text-xl text-neutral-600 hover:text-neutral-700 duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
            <span>{t("view")}</span>
          </Link>
        </div>
      </div>
    </>
  );
}
