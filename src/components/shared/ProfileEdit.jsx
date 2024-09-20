import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  IconButton,
  Input,
  Button,
  Textarea,
  Switch,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import Tags from "./Tags";

import { Link as ChakraLink } from "@chakra-ui/react";
const ProfileEdit = () => {
  const [tags, setTags] = useState(["Summer", "Dresses"]);
  const [newTag, setNewTag] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <Box p={8} maxWidth="500px" mx="auto" bg="white" borderRadius="10px">
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Edit profile
      </Text>

      {/* Avatar Section */}
      <Flex align="center" mb={6}>
        <Box position="relative">
          <Avatar
            size="xl"
            name="Profile Image"
            src="https://via.placeholder.com/100"
          />
          <IconButton
            icon={<FaTimes />}
            size="sm"
            position="absolute"
            top="0"
            right="0"
            bg="white"
            borderRadius="full"
            boxShadow="md"
            aria-label="Remove avatar"
          />
        </Box>

        <Box ml={6}>
          <Button variant="outline" colorScheme="blue" size="sm">
            Drag and drop or{" "}
            <Text as="span" color="blue.500">
              Browse
            </Text>
          </Button>
          <Text fontSize="sm" color="gray.500">
            Support all image formats
          </Text>
        </Box>
      </Flex>

      {/* Full name input */}
      <Text fontWeight="bold" mb={2}>
        Full name
      </Text>
      <Input placeholder="Full name" defaultValue="Summer looks" mb={4} />

      {/* Email input */}
      <Text fontWeight="bold" mb={2}>
        Email
      </Text>
      <Input placeholder="example@mail.com" mb={4} />

      {/* Description */}
      <Text fontWeight="bold" mb={2}>
        Description
      </Text>
      <Textarea
        placeholder="Write something about yourself..."
        defaultValue="My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the ext"
        mb={4}
      />

      {/* Tags Section */}
      <Tags initialTags={tags} />

      {/* Private Profile Switch */}
      <Flex align="center" my={4}>
        <Switch
          id="private-profile"
          isChecked={isPrivate}
          onChange={() => setIsPrivate(!isPrivate)}
        />
        <Text ml={2}>Private profile</Text>
      </Flex>

      {/* Update and Cancel Buttons */}
      <Flex>
        <Button bg="black" color="white" _hover={{ bg: "blackAlpha.800" }}>
          Update
        </Button>
        <Spacer />
        <Button variant="outline" colorScheme="gray">
          Cancel
        </Button>
        <Spacer />
        <ChakraLink href="/profile/password">
          <Button variant="outline" colorScheme="gray">
            Change Password
          </Button>
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default ProfileEdit;
