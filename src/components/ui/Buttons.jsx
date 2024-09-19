import React from "react";
import { Box, Flex, Image, Text, useRadio } from "@chakra-ui/react";

const Buttons = ({ value, icon, ...radioProps }) => {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="0"
        borderRadius="md"
        boxShadow="none"
        _checked={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderWidth: "0",
        }}
        _hover={{
          backgroundColor: "gray.100",
        }}
        px={5}
        py={3}
        transition="box-shadow 0.2s ease"
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
