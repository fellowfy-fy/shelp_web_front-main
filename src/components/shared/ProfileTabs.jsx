import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3, BsSuitHeart, BsSearch } from "react-icons/bs";
import { MdWidthNormal } from "react-icons/md";

const ProfileTabs = () => {
  return (
    <Flex
      direction="column"
      w="full"
      justifyContent="center"
      gap={4}
      textTransform="uppercase"
      fontWeight="bold"
      position="relative" // Make the container relative to position search bar absolutely
    >
      <Flex w="full" justifyContent="center" gap={{ base: 4, sm: 10 }}>
        <Flex
          borderTop="1px solid white"
          alignItems="center"
          p="3"
          gap={1}
          cursor="pointer"
        >
          <Box fontSize={20}>
            <BsGrid3X3 />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Posts
          </Text>
        </Flex>

        <Flex alignItems="center" p="3" gap={1} cursor="pointer">
          <Box fontSize={20}>
            <BsBookmark />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            Products
          </Text>
        </Flex>
      </Flex>

      {/* Search Bar */}
      <InputGroup
        position="absolute"
        top="-4"
        right="0"
        w="247px"
        h="40px"
        bg="#F8FBFF"
        boxShadow="inset 0px 4px 40px rgba(175, 193, 217, 0.12)"
        borderRadius="8px"
        mt="4"
      >
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch color="#AFC1D9" />}
        />
        <Input
          placeholder="Search"
          fontSize="18px"
          fontWeight={500}
          color="#AFC1D9"
          borderRadius="8px"
          bg="#F8FBFF"
          _placeholder={{ color: "#AFC1D9" }}
        />
      </InputGroup>
    </Flex>
  );
};

export default ProfileTabs;
