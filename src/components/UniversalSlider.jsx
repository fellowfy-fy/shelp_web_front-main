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
    </Flex>
  );
};

export default CollectionMansoryGrid;
