import Navbar from "@/components/Navbar";
import Image from "next/image";
import metadata from "./metadata";
// import { promisify } from "util";
// import sizeOf from "image-size";
// import fs from "fs";
// import path from "path";
import { getTranslations } from "next-intl/server";
import ImageCarousel from "@/components/ImageCarousel";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Collections" });

  return {
    title: "éclà",
    description: t("ecla-description"),
  };
}

// const sizeOfAsync = promisify(sizeOf);

// async function fetchEclaImages() {
//   const imagesDir = path.join(process.cwd(), "public/images/ecla");
//   const files = fs
//     .readdirSync(imagesDir)
//     .filter((file) => /\.(png|jpe?g|gif|webp)$/.test(file));

//   const metadata = await Promise.all(
//     files.map(async (file) => {
//       const dimensions = await sizeOfAsync(path.join(imagesDir, file));
//       if (!dimensions) {
//         throw new Error(`Could not get dimensions for image: ${file}`);
//       }
//       return {
//         src: `/images/ecla/${file}`,
//         width: dimensions.width!,
//         height: dimensions.height!,
//         isHorizontal: dimensions.width! > dimensions.height!,
//       };
//     })
//   );

//   return metadata;
// }

export default async function Home() {
  const images = metadata;
  const t = await getTranslations("Collections");
  return (
    <>
      <div>
        <Navbar light={false} />
        <div className="h-[20rem] md:h-[36rem] flex justify-center md:justify-start items-center">
          <div className="md:container px-4">
            <Image
              src="/images/ecla-logo.webp"
              width={1000}
              height={1000}
              alt="Ecla lgoo"
              className="w-[8rem] md:w-[14rem] opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-neutral-100">
        <div className="container h-fit py-12 mb-2 md:mb-4 flex flex-col items-center justify-center px-4 gap-y-4">
          <p className="font-light text-md leading-loose md:text-xl md:leading-loose text-neutral-400">
            {t("ecla-description")}
          </p>
          <a
            href="https://gardel-by-moore.as/en/"
            className="w-full flex items-center gap-x-2 py-1 text-md md:text-xl text-neutral-600 hover:text-neutral-700 duration-150">
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
            <span>{t("visit")}</span>
          </a>
        </div>
      </div>

      <div className="max-w-[120rem] h-[90vh] flex items-center justify-center w-full mx-auto py-0 px-2 md:px-4">
        <ImageCarousel images={images} />
      </div>
    </>
  );
}
