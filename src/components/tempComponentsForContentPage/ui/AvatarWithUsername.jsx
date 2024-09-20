import { HStack, Avatar, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AvatarWithUsername = ({ username, profilePicURL }) => (
  <Link to={`/${username}`}>
    <HStack>
      <Avatar src={profilePicURL} size="sm" />
      <Text fontWeight="bold">{username}</Text>
    </HStack>
  </Link>
);

export default AvatarWithUsername;
