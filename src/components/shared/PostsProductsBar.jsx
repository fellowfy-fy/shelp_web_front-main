import React, { useState } from "react";
import { Center } from "@chakra-ui/react";
import Buttons from "../ui/Buttons";
import { useTranslation } from "react-i18next";

const PostsProductsBar = () => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState("ideas");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Options for the buttons
  const buttonOptions = [
    { value: t("posts"), icon: "/NewIcon.svg" },
    { value: t("products"), icon: "/PopularIcon.svg" },
  ];

  return (
    <div className="flex justify-between mt-10 align-center">
      <Center>
        <div className="font-bold text-[20px] text-[#1B1D28]">
          {t("posts-and-products")}
        </div>
      </Center>
      <div className="flex gap-1">
        {buttonOptions.map(({ value, icon }) => (
          <Buttons
            key={value}
            value={value}
            icon={icon}
            isActive={activeButton === value.toLowerCase()}
            onClick={() => handleButtonClick(value.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsProductsBar;
