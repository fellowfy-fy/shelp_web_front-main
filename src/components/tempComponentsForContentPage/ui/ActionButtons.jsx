import { Button, HStack, Box } from "@chakra-ui/react";
import { BiHeart, BiBookmark } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";

const ActionButtons = ({ likes, saves }) => (
  <HStack
    color="#53abe9"
    gap={3}
    flexWrap="wrap"
    alignItems="start"
    justify="flex-start"
    cursor="pointer"
  >
    <Button size="sm" borderRadius={15} variant="outline">
      <HStack gap={1}>
        <Box>{likes}</Box>
        <BiHeart />
      </HStack>
    </Button>
    <Button
      size="sm"
      borderRadius={15}
      variant="outline"
      leftIcon={<BiBookmark />}
    >
      Save
    </Button>
    <Button
      size="sm"
      borderRadius={15}
      variant="outline"
      rightIcon={<FaRegShareSquare />}
    >
      Share
    </Button>
  </HStack>
);

export default ActionButtons;
