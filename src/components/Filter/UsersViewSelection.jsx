import React from "react";
import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";

const NewIcon = "/NewIcon.svg";
const FollowedIcon = "/FollowedIcon.svg";
const PopularIcon = "/PopularIcon.svg";

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

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
        _focus={{
          boxShadow: "outline",
        }}
        _hover={{
          backgroundColor: "gray.100",
        }}
        px={5}
        py={3}
        transition="box-shadow 0.2s ease" // Smooth transition effect
      >
        {props.children}
      </Box>
    </Box>
  );
}

const UsersViewSelection = ({ onChange }) => {
  // Options array with value and corresponding image for each option
  const options = [
    { value: "New", icon: NewIcon },
    { value: "Popular", icon: PopularIcon },
    { value: "Followed", icon: FollowedIcon },
    { value: "For You", icon: FollowedIcon }, // Reusing the same icon for "For You"
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "contentType",
    defaultValue: "New",
    onChange, // Trigger the onChange prop passed from the parent
  });

  const group = getRootProps();

  return (
    <HStack {...group} spacing={4}>
      {" "}
      {/* Add spacing between buttons */}
      {options.map(({ value, icon }) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            <Flex align="center">
              {/* Render the image icon */}
              <Image src={icon} alt={`${value} icon`} boxSize="20px" mr={2} />
              <Text>{value}</Text>
            </Flex>
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default UsersViewSelection;
