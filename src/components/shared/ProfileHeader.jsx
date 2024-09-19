import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Box,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProfileActions from "./ProfileActions";
import Bio from "../ui/Bio";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import { useDisclosure } from "@chakra-ui/react";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userProfile = {
    profilePicURL: "https://via.placeholder.com/150",
    username: "nkchaudhary01",
    fullName: "Wildlife Photographer",
    bio: "My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks...",
    posts: Array(98).fill({}),
    followers: Array(900).fill({}),
    following: Array(900).fill({}),
    products: Array(3500).fill({}),
  };

  const authUser = { username: "nkchaudhary01" };
  const isFollowing = false;
  const isUpdating = false;

  // Detect if the view is mobile for responsive layout changes
  const isMobile = useBreakpointValue({ base: true, md: false });

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile?.username;

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      py={5}
      px={isMobile ? 4 : 0}
      // Remove width property to allow content to size naturally
    >
      {/* Avatar and User Info */}
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
        gap={isMobile ? 5 : 10}
        // Remove width property to prevent overriding centering
        mb={isMobile ? 6 : 8}
      >
        {/* Avatar */}
        <AvatarGroup size="2xl" mx="auto">
          <Avatar
            src={userProfile?.profilePicURL}
            alt={`${userProfile?.username}'s profile picture`}
            size={isMobile ? "xl" : "2xl"} // Adjust avatar size on mobile
          />
        </AvatarGroup>

        {/* User Info and Actions */}
        <VStack
          alignItems={isMobile ? "center" : "start"}
          gap={2}
          mx="auto"
          // Remove flex and width properties
        >
          {/* Username and Profile Actions */}
          <Flex
            gap={4}
            direction="row"
            justifyContent="space-between"
            w="100%"
            alignItems="center"
          >
            <Text
              fontSize={isMobile ? "lg" : "xl"}
              fontWeight="bold"
              textAlign={isMobile ? "center" : "left"}
            >
              {userProfile?.username}
            </Text>
            <ProfileActions
              isOwnProfile={visitingOwnProfileAndAuth}
              isFollowing={isFollowing}
              isUpdating={isUpdating}
              onOpen={onOpen}
            />
          </Flex>

          {/* Full Name */}
          <Text
            fontSize="md"
            fontWeight="medium"
            textAlign={isMobile ? "center" : "left"}
          >
            {userProfile?.fullName}
          </Text>

          {/* Bio */}
          <Bio bioText={userProfile.bio} />

          {/* User Info Section (Posts, Followers, Following) */}
          <UserInfo
            posts={userProfile.posts}
            products={userProfile.products}
            followers={userProfile.followers}
            following={userProfile.following}
          />
        </VStack>
      </Flex>

      {/* Modal for editing profile (if open) */}
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
