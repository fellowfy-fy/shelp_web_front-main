import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProfileActions from "./CollectionActions";
import Bio from "../Bio";
import CollectionInfo from "./CollectionInfo";
import { useDisclosure } from "@chakra-ui/react";

const CollectionHeader = () => {
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
      // Removed width="100%"
    >
      {/* Avatar and User Info */}
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
        gap={isMobile ? 5 : 10}
        // Removed width={isMobile ? "100%" : "50%"}
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
          alignItems={isMobile ? "center" : "flex-start"}
          gap={2}
          mx="auto"
          // Removed flex={1} and width="100%"
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
          <CollectionInfo
            posts={userProfile.posts}
            products={userProfile.products}
            followers={userProfile.followers}
            following={userProfile.following}
          />
        </VStack>
      </Flex>
    </Flex>
  );
};

export default CollectionHeader;
