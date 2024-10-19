import {
  Avatar,
  Flex,
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
    // Основной контейнер с Flex
    <Flex
      direction="column" // Вертикальное расположение для создания строк
      gap={2} // Промежуток между строками
      py={5}
      px={isMobile ? 4 : 0}
      alignItems="center"
    >
      {/* Первая строка: Аватар и имя пользователя */}
      {userProfile && (
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          px={4}
        >
          <Flex alignItems="center">
            {/* Аватар */}
            <Avatar
              src={userProfile?.profilePicURL}
              alt={`${userProfile?.username}'s profile picture`}
              size={isMobile ? "md" : "lg"}
            />
            {/* Имя пользователя */}
            <Text
              ml={3}
              fontSize={isMobile ? "lg" : "2xl"}
              fontWeight="bold"
              textAlign="left"
            >
              {userProfile?.username}
            </Text>
          </Flex>
        </Flex>
      )}
  
      {userProfile && (
        <Flex
          direction="row"
          alignItems="center" // Выровнять по вертикали
          justifyContent="space-between" // Разместить элементы с равным промежутком
          width="100%" // Задать ширину контейнера для корректного выравнивания
        >
          {/* Полное имя */}
          <Text
            fontSize={isMobile ? "sm" : "lg"}
            fontWeight="medium"
            textAlign="left"
          >
            {userProfile?.fullName}
          </Text>
  
          <ProfileActions
            isOwnProfile={visitingOwnProfileAndAuth}
            isFollowing={isFollowing}
            isUpdating={isUpdating}
            onOpen={onOpen}
          />
        </Flex>
      )}
  
      {userProfile && (
        <Flex
          justifyContent="space-around"
          width="100%"
          px={4}
          backgroundColor="white"
          py={2}
        >
          <CollectionInfo
            posts={userProfile.posts}
            products={userProfile.products}
            followers={userProfile.followers}
            following={userProfile.following}
          />
        </Flex>
      )}
  
      {userProfile && (
        <Flex
          width="100%"
          px={4}
          py={2}
          backgroundColor="white"
          justifyContent="center"
        >
          <CollectionDescription bioText={userProfile.bio} />
        </Flex>
      )}
    </Flex>
  );    
};

export default CollectionHeader;
