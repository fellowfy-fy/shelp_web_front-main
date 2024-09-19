import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

const UserCard = ({ username, displayName, imageUrl }) => {
  return (
    <VStack>
      <Box
        boxSize="100px"
        bg="gray.200"
        borderRadius="full"
        overflow="hidden"
        borderWidth="1px"
        borderColor="gray.300"
      >
        <Image
          src={imageUrl}
          alt={`${username}'s avatar`}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>
      <Text fontWeight="bold">{username}</Text>
      <Text color="gray.500">{displayName}</Text>
    </VStack>
  );
};

export default UserCard;
