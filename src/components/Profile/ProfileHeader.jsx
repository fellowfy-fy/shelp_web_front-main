import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Grid,
  GridItem,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import ProfileActions from "./ProfileActions";
import Bio from "./Bio";
import UserInfo from "./UserInfo";
import EditProfile from "./EditProfile";
import { useDisclosure } from "@chakra-ui/react";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userProfile = {
    profilePicURL: "https://via.placeholder.com/150",
    username: "nkchaudhary01",
    fullName: "Wildlife Photographer",
    bio: "My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the potential to capture the attention while making a very positive first impression on the visitor.My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the potential to capture the attention while making a very positive first impression on the visitor.My specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the potential to capture the attention while making a very positive first impression on the visitor.",
    posts: Array(98).fill({}),
    followers: Array(900).fill({}),
    following: Array(900).fill({}),
    products: Array(3500).fill({}),
    collections: [
      { name: "TeacherWorkwear", items: 34 },
      { name: "Summer Go-To's", items: 24 },
      { name: "Beauty", items: 25 },
      { name: "Athleisure", items: 23 },
      { name: "Foodie", items: 23 },
    ],
  };

  const authUser = { username: "nkchaudhary01" };
  const isFollowing = false;
  const isUpdating = false;

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile?.username;

  return (
    <Flex direction="column" alignItems="center" py={10} width="100%">
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={10}
        width="50%"
        mb={8}
      >
        <AvatarGroup size="2xl" mx={"auto"}>
          <Avatar
            src={userProfile?.profilePicURL}
            alt={`${userProfile?.username}'s profile picture`}
          />
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1} width="100%">
          <Flex gap={4} direction="row" justifyContent="space-between" w="100%">
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
              {userProfile?.username}
            </Text>
            <ProfileActions
              isOwnProfile={visitingOwnProfileAndAuth}
              isFollowing={isFollowing}
              isUpdating={isUpdating}
              onOpen={onOpen}
            />
          </Flex>

          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
            {userProfile?.fullName}
          </Text>

          <Bio bioText={userProfile.bio} />

          <UserInfo
            posts={userProfile.posts}
            products={userProfile.products}
            followers={userProfile.followers}
            following={userProfile.following}
          />
        </VStack>
      </Flex>

      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
