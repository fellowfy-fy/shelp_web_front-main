import { HStack, Avatar, Text, Box } from "@chakra-ui/react";

const Comment = ({ username, profilePicURL, comment, createdAt }) => (
  <HStack align="start">
    <Avatar size="sm" src={profilePicURL} />
    <Box>
      <Text fontWeight="bold">{username}</Text>
      <Text>{comment}</Text>
      <Text fontSize="xs" color="gray.500">
        {new Date(createdAt).toLocaleDateString()}
      </Text>
    </Box>
  </HStack>
);

export default Comment;
