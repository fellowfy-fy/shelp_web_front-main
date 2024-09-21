import React from "react";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

const Buttons = ({ value, icon, isActive, onClick }) => {
  // Меняем направление элементов в зависимости от размера экрана
  const flexDirection = useBreakpointValue({ base: "column", lg: "row" });
  const iconSize = useBreakpointValue({ base: "24px", md: "20px" });
  const fontSize = useBreakpointValue({ base: "xs", md: "md" });

  return (
    <Box as="button" onClick={onClick} width="100%">
      <Flex
        direction={flexDirection} // Меняем расположение текста и иконки
        align="center"
        justify="center"
        cursor="pointer"
        borderWidth={isActive ? "2px" : "0"}
        borderRadius="md"
        boxShadow={isActive ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"}
        border={isActive ? "2px solid #ECECEC" : "none"}
        _hover={{
          backgroundColor: "gray.100",
        }}
        px={5}
        py={3}
        transition="all 0.2s ease"
        bg={isActive ? "white" : "transparent"} // выделение активной кнопки
      >
        {/* Иконка */}
        <Image
          src={icon}
          alt={`${value} icon`}
          boxSize={iconSize}
          mb={flexDirection === "column" ? 1 : 0} // Отступ снизу для мобильной версии
          mr={flexDirection === "row" ? 2 : 0} // Отступ справа для больших экранов
        />

        {/* Текст */}
        <Text fontSize={fontSize} textAlign="center">
          {value}
        </Text>
      </Flex>
    </Box>
  );
};

export default Buttons;
