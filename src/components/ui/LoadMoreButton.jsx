import React from "react";
import { Button } from "@chakra-ui/react";

const LoadMoreButton = ({ onClick }) => {
  return (
    <Button
      border="1px"
      px={20}
      borderRadius={10}
      background="transparent"
      borderColor="black"
      _hover={{ background: "black", color: "white" }}
      onClick={onClick}
    >
      Load more
    </Button>
  );
};

export default LoadMoreButton;
