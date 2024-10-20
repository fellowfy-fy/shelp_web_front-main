import React from "react";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

const Buttons = ({ value, icon, isActive, onClick, disableResponsive }) => {
  const defaultFlexDirection = useBreakpointValue({
    base: "column",
    lg: "row",
  });
  const iconSize = useBreakpointValue({ base: "24px", md: "20px" });
  const fontSize = useBreakpointValue({ base: "md", md: "md" });

  const flexDirection = disableResponsive ? "row" : defaultFlexDirection;

  return (
    <Box as="button" onClick={onClick}>
      <Flex
        direction={flexDirection}
        align="center"
        justify="center"
        cursor="pointer"
        borderRadius="md"
        // boxShadow={isActive ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"}
        // border={isActive ? "1px solid #ECECEC" : "none"}
        _hover={{
          backgroundColor: isActive ? "gray.300" : "gray.100",
        }}
        px={5}
        py={3}
        bg={isActive ? "gray.300" : "transparent"}
      >
        {/* Иконка */}
        <Image
          src={icon}
          alt={`${value} icon`}
          boxSize={iconSize}
          mb={flexDirection === "column" ? 1 : 0}
          mr={flexDirection === "row" ? 2 : 0}
        />

        {/* Текст */}
        <Text
          fontSize={fontSize}
          textAlign="center"
          width={"100%"}
          whiteSpace="nowrap"
          fontWeight={isActive ? "bold" : "normal"}
        >
          {value}
        </Text>
      </Flex>
    </Box>
  );
};

export default Buttons;
