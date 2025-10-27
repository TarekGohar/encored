import CollectionsPage from "./collections";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("collections-title"),
    description: t("collections-description"),
  };
}

export default function page() {
  return <CollectionsPage />;
}
