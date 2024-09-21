import React, { useState } from "react";
import {
  HStack,
  useRadioGroup,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import Buttons from "../ui/Buttons";

const NewIcon = "/NewIcon.svg";
const FollowedIcon = "/FollowedIcon.svg";
const PopularIcon = "/PopularIcon.svg";

const UsersViewSelection = ({ onChange }) => {
  const [activeButton, setActiveButton] = useState("New");
  // Брейкпоинт для определения мобильной версии
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonOptions = [
    { value: "New", icon: NewIcon },
    { value: "Popular", icon: PopularIcon },
    { value: "Followed", icon: FollowedIcon },
    { value: "For You", icon: FollowedIcon },
  ];

  const handleChange = (value) => {
    setActiveButton(value);
    if (onChange) {
      onChange(value);
    }
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "contentType",
    defaultValue: "New",
    onChange: handleChange,
  });

  const group = getRootProps();

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      justify={isMobile ? "flex-start" : "space-between"}
      align="center"
      py={4}
    >
      <Flex gap={2} mb={isMobile ? 4 : 0}>
        {" "}
        {/* Отступ для мобильной версии */}
        {buttonOptions.map(({ value, icon }) => (
          <Buttons
            key={value}
            value={value}
            icon={icon}
            isActive={activeButton === value}
            onClick={() => handleButtonClick(value)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default UsersViewSelection;
