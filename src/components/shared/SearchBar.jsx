import React, { useState } from "react";
import { Box, Flex, Button, Image } from "@chakra-ui/react";
import Buttons from "../ui/Buttons"; // Используем компонент Buttons
import SearchField from "../ui/SearchField"; // Импорт компонента SearchField

const SearchBar = () => {
  const [activeButton, setActiveButton] = useState("Ideas");

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
    <Flex justify="space-between" align="center" width="100%" py={4}>
      <Flex gap={2}>
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

      <Flex align="center" gap={2}>
        <Button
          variant="outline"
          colorScheme="gray"
          width="40px"
          height="40px"
          p={0}
        >
          <Image src="/configureIcon.svg" alt="Configure Icon" boxSize="20px" />
        </Button>
        <SearchField /> {/* Вставляем компонент строки поиска */}
      </Flex>
    </Flex>
  );
};

export default SearchBar;
