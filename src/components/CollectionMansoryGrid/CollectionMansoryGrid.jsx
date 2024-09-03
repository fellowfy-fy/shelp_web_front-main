import React from "react";
import { Flex, Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const CollectionMansoryGrid = ({ children, gap = 4 }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalItems = React.Children.count(children);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex align="center" justify="center" position="relative">
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={handlePrevClick}
        position="absolute"
        left="10px"
        zIndex="1"
        aria-label="Previous"
      />

      <Flex overflow="hidden" w="100%" justifyContent="center">
        {React.Children.map(children, (child, index) => (
          <Box
            flex="0 0 auto"
            mx={gap}
            key={index}
            display="flex"
            justifyContent="center"
          >
            {child}
          </Box>
        ))}
      </Flex>

      <IconButton
        icon={<ChevronRightIcon />}
        onClick={handleNextClick}
        position="absolute"
        right="10px"
        zIndex="1"
        aria-label="Next"
      />
    </Flex>
  );
};

export default CollectionMansoryGrid;
