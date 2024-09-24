import React, { useRef } from "react";
import { Flex, Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HorizontalUsersView = ({ children, gap = 4 }) => {
  const containerRef = useRef(null);

  // Логика прокрутки влево
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Логика прокрутки вправо
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Box position="relative" py={10} gap={4}>
      {/* Левая стрелка */}
      <IconButton
        icon={<FaArrowLeft />}
        position="absolute"
        left="10px"
        top="45%"
        transform="translateY(-50%)"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        aria-label="Scroll Left"
        onClick={scrollLeft}
        zIndex={1}
        _hover={{ bg: "gray.200" }}
      />

      {/* Контейнер с пользователями */}
      <Flex
        ref={containerRef}
        overflowX="auto"
        whiteSpace="nowrap"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none" /* IE и Edge */,
          "scrollbar-width": "none" /* Firefox */,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Box mx={gap} key={index} display="inline-block">
            {child}
          </Box>
        ))}
      </Flex>

      {/* Правая стрелка */}
      <IconButton
        icon={<FaArrowRight />}
        position="absolute"
        right="10px"
        top="45%"
        transform="translateY(-50%)"
        bg="white"
        borderRadius="full"
        boxShadow="md"
        aria-label="Scroll Right"
        onClick={scrollRight}
        zIndex={1}
        _hover={{ bg: "gray.200" }}
      />
    </Box>
  );
};

export default HorizontalUsersView;
