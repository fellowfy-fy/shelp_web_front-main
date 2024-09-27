import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ProfileActions from "./CollectionActions";
import CollectionDescription from "../ui/CollectionDescription";
import CollectionInfo from "./CollectionInfo";

const CollectionHeader = () => {
  const { onOpen} = useDisclosure();

  const userProfile = {
    profilePicURL: "https://via.placeholder.com/150",
    username: "nkchaudhary01",
    fullName: "Wildlife Photographer",
    bio: "My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks...",
    posts: Array(98).fill({}),
    followers: Array(900).fill({}),
    following: Array(900).fill({}),
    products: Array(3500).fill({}),
    more: Array(900).fill({}),
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
      alignItems={isMobile ? "flex-start" : "center"} // Изменено на flex-start для мобильных
      justifyContent={isMobile ? "flex-start" : "space-between"}
      py={5}
      px={isMobile ? 4 : 0}
      gap={isMobile ? 5 : 10}
    >
      {/* Avatar and User Info */}
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems={isMobile ? "flex-start" : "center"} // Изменено на flex-start для мобильных
        justifyContent={isMobile ? "flex-start" : "flex-start"}
        gap={isMobile ? 4 : 10}
        mb={isMobile ? 6 : 8}
        width="100%"
      >
        {/* Avatar */}
        <AvatarGroup size="2xl" mx="auto">
          <Avatar
            src={userProfile?.profilePicURL}
            alt={`${userProfile?.username}'s profile picture`}
            size={isMobile ? "xl" : "2xl"}
          />
        </AvatarGroup>

        {/* User Info and Actions */}
        <VStack
          alignItems={isMobile ? "flex-start" : "flex-start"} // Выровнено по левому краю для мобильных
          spacing={isMobile ? 3 : 4}
          mx="auto"
          width={isMobile ? "100%" : "auto"}
        >
          {/* Username and Profile Actions */}
          <Flex
            gap={isMobile ? 2 : 4}
            direction="row"
            justifyContent="space-between" // Выровнено по левому краю
            w={isMobile ? "100%" : "auto"}
            alignItems="center"
          >
            <Text
              fontSize={isMobile ? "lg" : "2xl"}
              fontWeight="bold"
              textAlign="left" // Выровнено по левому краю
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
            fontSize={isMobile ? "sm" : "lg"}
            fontWeight="medium"
            textAlign={isMobile ? "left" : "left"} // Выровнено по левому краю
          >
            {userProfile?.fullName}
          </Text>

          {/* UserDescription */}
          <CollectionDescription bioText={userProfile.bio} />

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
