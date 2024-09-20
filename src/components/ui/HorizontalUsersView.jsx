import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const HorizontalUsersView = ({ children, gap = 4 }) => {
  return (
    <Flex justify="center" className="scrollbar-hide">
      {React.Children.map(children, (child, index) => (
        <Box mx={gap} key={index}>
          {child}
        </Box>
      ))}
    </Flex>
  );
};

export default HorizontalUsersView;
