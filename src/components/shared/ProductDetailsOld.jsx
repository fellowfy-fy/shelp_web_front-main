import { Switch } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function ProductDetails() {
  const { t } = useTranslation();
  return (
    <div className="mb-[20px]">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="font-bold">Nike Air Jordan Red Snickers</h1>
          <p className="text-[#76777E] text-sm">Nike</p>
        </div>
        <div className="flex gap-2 align-middle justify-center">
          <button className="border-[2px] border-black px-4 py-2 rounded-md font-bold">
            {t("save")}
          </button>
          <button>
            <img src="/hamburgerIcon.svg" />
          </button>
        </div>
      </div>
      {/* Profile */}
      <div className="flex items-center gap-2 ">
        <img
          src="/img1.png"
          alt="Profile Pic"
          className="rounded-full w-[40px] h-[40px] object-cover outline-offset-[2px] outline-[#E5E5E5] outline"
        />
        <p>UserName</p>
      </div>

      {/* Parameters  */}
      <div className="flex gap-7 mt-4">
        <div className="flex gap-1 items-center font-bold">
          <img src="/heart.svg" alt="Heart Icon" />
          <p>98</p>
        </div>
        <div className="flex gap-1 items-center font-bold">
          <img src="/save.svg" alt="Heart Icon" />
          <p>98</p>
        </div>
        <div className="flex gap-3">
          <Switch size="lg" />
          <p>Radar Enabled</p>
        </div>
      </div>
      <p className="text-[#76777E] text-sm">
        My specialty lies in creating colorful creations, amazing designs, and
        high-quality website artworks that have the potential to capture the
        attention while making a very positive first impression on the
        visitor... <span className="font-bold"> ( Read More )</span>
      </p>
      <a href="#" className="text-[#F0304E] font-bold">
        {t("product-page")}
      </a>
      <p className="font-bold">{t("price")} 2000 AED</p>
    </div>
  );
}
