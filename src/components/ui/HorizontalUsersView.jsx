import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const HorizontalUsersView = ({ children, gap = 4 }) => {
  return (
    <Flex
      justify="center"
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
  );
};

export default HorizontalUsersView;
