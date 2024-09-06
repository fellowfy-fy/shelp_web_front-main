import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import EditProfile from "./EditProfile";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Static placeholder data instead of fetching from a store or database
  const userProfile = {
    profilePicURL: "https://via.placeholder.com/150",
    username: "static_user",
    fullName: "Static User",
    bio: "This is a static bio for testing purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc. This is a static bio for testing purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc. This is a static bio for testing purposes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.",
    posts: Array(10).fill({}),
    followers: Array(150).fill({}),
    following: Array(75).fill({}),
  };
  const authUser = { username: "static_user" };
  const isFollowing = false;
  const isUpdating = false;

  // Define flags for visiting profiles
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile?.username;
  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile?.username;

  // State for bio read more
  const [showFullBio, setShowFullBio] = useState(false);
  const toggleBio = () => setShowFullBio((prev) => !prev);

  const maxBioLength = 230;
  const bioText = userProfile.bio;
  const isLongBio = bioText.length > maxBioLength;

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          src={userProfile?.profilePicURL}
          alt={`${userProfile?.username}'s profile picture`}
        />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile?.username}
          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                width="80px"
                height="32px"
                position="absolute"
                left="808px"
                top="149px"
                background="#1B1D28"
                borderRadius="5px"
                fontFamily="'Assistant'"
                fontWeight="700"
                fontSize="14px"
                lineHeight="18px"
                color="white"
              >
                Follow
              </Button>
              <Button
                width="64px"
                height="32px"
                position="absolute"
                left="899px"
                top="149px"
                border="1px solid #1B1D28"
                borderRadius="5px"
                fontFamily="'Assistant'"
                fontWeight="600"
                fontSize="14px"
                lineHeight="18px"
                color="#1B1D28"
                background="transparent"
                onClick={onOpen}
              >
                Edit
              </Button>
            </Flex>
          )}
          {visitingAnotherProfileAndAuth && (
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button
                bg={"blue.500"}
                color={"white"}
                _hover={{ bg: "blue.600" }}
                size={{ base: "xs", md: "sm" }}
                isLoading={isUpdating}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
            </Flex>
          )}
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile?.fullName}
          </Text>
        </Flex>

        {/* Bio Section with Read More */}
        <Text fontSize={"sm"}>
          {isLongBio && !showFullBio
            ? `${bioText.substring(0, maxBioLength)}...`
            : bioText}
          {isLongBio && (
            <Button
              variant="link"
              color="blue.500"
              onClick={toggleBio}
              size="sm"
              ml={2}
            >
              {showFullBio ? "Show Less" : "Read More"}
            </Button>
          )}
        </Text>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.posts?.length || 0}
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.products?.length || 0}
            </Text>
            Products
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.followers?.length || 0}
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              {userProfile?.following?.length || 0}
            </Text>
            Following
          </Text>
        </Flex>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
