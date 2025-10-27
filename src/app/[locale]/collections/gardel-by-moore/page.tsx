import Navbar from "@/components/Navbar";
import Image from "next/image";
import { promisify } from "util";
import sizeOf from "image-size";
import fs from "fs";
import path from "path";
import { getTranslations } from "next-intl/server";
import metadata from "./metadata";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Collections" });

  return {
    title: "Gardel By Moore",
    description: t("gardel-description"),
  };
}

// const sizeOfAsync = promisify(sizeOf);

// async function fetchGardelImages() {
//   const imagesDir = path.join(process.cwd(), "public/images/gardel");
//   const files = fs
//     .readdirSync(imagesDir)
//     .filter((file) => /\.(png|jpe?g|gif|webp)$/i.test(file))
//     .sort((a, b) => a.localeCompare(b, undefined, { numeric: true })); // Sort files alphabetically

//   const metadata = await Promise.all(
//     files.map(async (file) => {
//       try {
//         const filePath = path.join(imagesDir, file);
//         const dimensions = await sizeOfAsync(filePath);

//         if (!dimensions) {
//           console.error(`Could not get dimensions for image: ${filePath}`);
//           return null;
//         }

//         return {
//           src: `/images/gardel/${file}`,
//           width: dimensions.width,
//           height: dimensions.height,
//           isHorizontal: dimensions.width > dimensions.height,
//         };
//       } catch (error) {
//         console.error(`Error processing image: ${file}`, error);
//         return null;
//       }
//     })
//   );

//   return metadata.filter(Boolean); // Remove null entries from the array
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
              src="/images/gardel-logo.webp"
              width={1000}
              height={1000}
              alt="Gardel lgoo"
              className="w-[20rem] md:w-[44rem] opacity-90"
            />
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="container h-fit py-12 mb-2 md:mb-4 flex flex-col items-center justify-center px-4 gap-y-4">
          <p className="font-light text-md leading-loose md:text-xl md:leading-loose text-neutral-400">
            {t("gardel-description")}
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

      <div className="max-w-[120rem] mx-auto py-0 px-2 md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4">
          {images.map(({ src, width, height, isHorizontal }, index) => (
            <Image
              key={index}
              src={src}
              alt={`Bariloche Image ${index + 1}`}
              width={isHorizontal ? width : 1000} // Adjust width for better grid layout
              height={isHorizontal ? height : 2000} // Adjust height for better grid layout
              className={`object-cover h-full w-full ${
                isHorizontal ? "col-span-1 md:col-span-2" : "col-span-1"
              }`}
              priority={index < 3} // Preload the first few images
            />
          ))}
        </div>
      </div>
    </>
  );
}
