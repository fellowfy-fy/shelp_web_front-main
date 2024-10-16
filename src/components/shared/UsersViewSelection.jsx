import React, { useState } from "react";
import { useRadioGroup, useBreakpointValue, Flex } from "@chakra-ui/react";
import Buttons from "../ui/Buttons";
import { useTranslation } from "react-i18next";

const NewIcon = "/NewIcon.svg";
const FollowedIcon = "/FollowedIcon.svg";
const PopularIcon = "/PopularIcon.svg";

const UsersViewSelection = ({ onChange }) => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState("New");
  // Брейкпоинт для определения мобильной версии
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonOptions = [
    { value: t("home-new"), icon: NewIcon },
    { value: t("home-popular"), icon: PopularIcon },
    { value: t("home-followed"), icon: FollowedIcon },
    { value: t("home-for-you"), icon: FollowedIcon },
  ];

  const handleChange = (value) => {
    setActiveButton(value);
    if (onChange) {
      onChange(value);
    }
  };

  const { getRootProps } = useRadioGroup({
    name: "contentType",
    defaultValue: "New",
    onChange: handleChange,
  });

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      justify={isMobile ? "flex-start" : "space-between"}
      align="center"
      py={4}
    >
      <Flex gap={2} mb={isMobile ? 4 : 0} wrap="wrap">
        {buttonOptions.map(({ value, icon }) => (
          <Buttons
            key={value}
            value={value}
            icon={icon}
            isActive={activeButton === value}
            onClick={() => handleButtonClick(value)}
            disableResponsive={true}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default UsersViewSelection;
