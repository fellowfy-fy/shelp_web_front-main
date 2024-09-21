import React from "react";
import { Box, Flex, Image, Text, useRadio } from "@chakra-ui/react";

const Buttons = ({ value, icon, isActive, onClick }) => {
  return (
    <Box as="button" onClick={onClick}>
      <Box
        cursor="pointer"
        borderWidth="0"
        borderRadius="md"
        boxShadow={isActive ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"}
        border={isActive ? "1px solid #ECECEC" : "none"}
        _hover={{
          backgroundColor: "gray.100",
        }}
        px={5}
        py={3}
        transition="box-shadow 0.2s ease"
        bg={isActive ? "white" : "white"} // выделение активной кнопки
      >
        <Flex align="center">
          <Image
            src={icon}
            alt={`${value} icon`}
            boxSize="20px"
            mr={2}
            display={["none", "inline-block"]}
          />
          <Text fontSize={["sm", "md"]}>{value}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Buttons;
