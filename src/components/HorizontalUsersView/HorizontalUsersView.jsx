import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

const HorizontalUsersView = ({ children, gap = 4 }) => {
  return (
    <Flex
      align="center"
      justify="center"
      overflowX="auto"
      className="scrollbar-hide"
    >
      {React.Children.map(children, (child, index) => (
        <Box
          as={Link} // Make the entire Box a Link
          to={`/user/${index + 1}`}
          flex="0 0 auto"
          mx={gap}
          key={index}
          display="flex"
          justifyContent="center"
          _hover={{ textDecoration: "none" }} // Remove underline on hover
        >
          {child}
        </Box>
      ))}
    </Flex>
  );
};

export default HorizontalUsersView;
