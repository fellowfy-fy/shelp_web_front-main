import React, { useState } from "react";
import { Box, Flex, Button, Image, useBreakpointValue } from "@chakra-ui/react";
import Buttons from "../ui/Buttons";
import SearchField from "../ui/SearchField";

const SearchBar = () => {
  const [activeButton, setActiveButton] = useState("Ideas");

  // Брейкпоинт для определения мобильной версии
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Опции для кнопок
  const buttonOptions = [
    { value: "Ideas", icon: "/NewIcon.svg" },
    { value: "Products", icon: "/PopularIcon.svg" },
    { value: "Collections", icon: "/FollowedIcon.svg" },
  ];

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      justify={isMobile ? "flex-start" : "space-between"}
      align="center"
      width="100%"
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

      <Flex align="center" gap={2} width={isMobile ? "100%" : "auto"}>
        {" "}
        {/* На мобильной версии 100% ширина */}
        <Button
          variant="outline"
          colorScheme="gray"
          width="40px"
          height="40px"
          p={0}
        >
          <Image src="/configureIcon.svg" alt="Configure Icon" boxSize="20px" />
        </Button>
        <SearchField isMobile={isMobile} />{" "}
        {/* Передаем пропс для управления размерами */}
      </Flex>
    </Flex>
  );
};

export default SearchBar;
