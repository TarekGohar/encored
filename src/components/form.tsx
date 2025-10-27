"use client";

import PhoneInput from "@/components/phone-input";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";
import DropdownSelector from "./DropdownSelector";
import LoadingSpinner from "./LoadingSpinner";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Canada");
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Buy");
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "8fb96e49-b2ea-414b-a6af-1eedf71a1277");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setLoading(false);
      router.push(`${pathname}/success`);
    }
  }

  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="max-w-2xl w-full h-fit"
      onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="access_key"
        value={process.env.WEB_API_ACCESS_KEY}
      />

      {/* Personal Information */}
      <div className="mt-2 flex flex-col space-y-3">
        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">
            {t("name")} <span className="text-red-600">*</span>
          </h2>
          <input
            type="text"
            name="name"
            placeholder={t("name-placeholder")}
            className="input"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">
            {t("email")} <span className="text-red-600">*</span>
          </h2>
          <input
            type="email"
            name="email"
            placeholder={t("email-placeholder")}
            className="input"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">
            {t("phone")} <span className="text-red-600">*</span>
          </h2>
          <div className="flex space-x-4">
            <PhoneInput />
            <div className="w-52">
              <DropdownSelector
                name="phone-type"
                placeholder={`${t("phone-type.home")}`}
                options={[
                  `${t("phone-type.home")}`,
                  `${t("phone-type.work")}`,
                  `${t("phone-type.mobile")}`,
                ]}
              />
            </div>
          </div>
        </div>

        {/* Country */}
        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">{t("country")}</h2>
          <div className="w-full;">
            <DropdownSelector
              name="country"
              placeholder="Canada"
              options={[t("canada"), t("usa")]}
              onChange={setSelectedCountry}
            />
          </div>
        </div>

        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">
            {t("address-1")} <span className="text-red-600">*</span>
          </h2>
          <input
            type="text"
            name="Location"
            placeholder={t("address-1-placeholder")}
            className="input"
            autoComplete="address-line1"
            required
          />
        </div>
        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">{t("address-2")}</h2>
          <input
            type="text"
            name="Location"
            placeholder={t("address-2-placeholder")}
            className="input"
            autoComplete="address-line2"
          />
        </div>
        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">
            {t("city")} <span className="text-red-600">*</span>
          </h2>
          <input
            type="text"
            name="Capacity"
            placeholder={t("city-placeholder")}
            className="input"
            autoComplete="city"
            required
          />
        </div>

        {/* Postal/Zip Code */}
        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">
            {selectedCountry === "United States" ? "Zip Code" : "Postal Code"}{" "}
            <span className="text-red-600">*</span>
          </h2>
          <input
            type="text"
            name={selectedCountry === t("usa") ? "zipCode" : "postalCode"}
            placeholder={
              selectedCountry === t("usa")
                ? t("code-us-placeholder")
                : t("code-ca-placeholder")
            }
            className="input"
            autoComplete={"postal-code"}
            required
          />
        </div>

        <div>
          <h2 className="text-main text-lg  mb-1 ml-3">
            {t("message")} <span className="text-red-600">*</span>
          </h2>
          <textarea
            name="Message"
            placeholder={t("message-placeholder")}
            className="input"
            style={{ height: "10rem" }}
            required
          />
        </div>
      </div>

      <button
        className="flex items-center justify-center border-b-2 border-l-2 border-neutral-300 mt-8 py-4 px-3 text-neutral-900  text-lg tracking-light hover:border-neutral-500 duration-150 w-full"
        type="submit">
        {!loading ? (
          <div className="h-7">{t("submit")}</div>
        ) : (
          <div className="h-7">
            <LoadingSpinner color="#fffff" />
          </div>
        )}
      </button>
    </form>
  );
}
