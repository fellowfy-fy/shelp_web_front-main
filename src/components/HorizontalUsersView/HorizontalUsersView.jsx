import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

const HorizontalUsersView = ({ children, gap = 4 }) => {
  return (
    <Flex justify="center" className="scrollbar-hide">
      {React.Children.map(children, (child, index) => (
        <Box
          as={Link}
          to={`/user/${index + 1}`}
          mx={gap}
          key={index}
          _hover={{ textDecoration: "none" }}
        >
          {child}
        </Box>
      ))}
    </Flex>
  );
};

export default HorizontalUsersView;
