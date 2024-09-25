import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import ProfileActions from "./ProfileActions";
import UserDescription from "../ui/UserDescription";
import UserInfo from "./UserInfo";
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
      alignItems={isMobile ? "flex-start" : "center"}
      justifyContent={isMobile ? "flex-start" : "space-between"}
      py={5}
      px={isMobile ? 4 : 8} // Добавление внутреннего отступа для мобильных устройств
      width="100%" // Устанавливаем ширину в 100% для адаптивности
      maxW="100%" // Устанавливаем максимальную ширину для предотвращения выхода за границы
      overflow="hidden" // Для предотвращения выхода элементов за границы
    >
      {/* Avatar and User Info */}
      <Flex
        direction={isMobile ? "column" : "row"}
        alignItems={isMobile ? "flex-start" : "center"}
        justifyContent="flex-start"
        gap={isMobile ? 5 : 10}
        width="100%" // Обеспечиваем, что блок занимает всю ширину
        maxW="100%"
        mb={isMobile ? 6 : 8}
      >
        {/* Avatar */}
        <AvatarGroup size="2xl" mx="auto">
          <Avatar
            src={userProfile?.profilePicURL}
            alt={`${userProfile?.username}'s profile picture`}
            size={isMobile ? "xl" : "2xl"} // Адаптируем размер аватара
          />
        </AvatarGroup>

        {/* User Info and Actions */}
        <VStack
          alignItems={isMobile ? "flex-start" : "flex-start"}
          spacing={isMobile ? 3 : 4}
          width="100%" // Адаптируем ширину на мобильных устройствах
          maxW="100%"
        >
          {/* Username and Profile Actions */}
          <Flex
            gap={isMobile ? 2 : 4}
            direction="row"
            justifyContent="space-between" // Выравниваем контент по краям
            w="100%"
            alignItems="center"
          >
            {/* Левая часть с именем пользователя */}
            <Text
              fontSize={isMobile ? "lg" : "2xl"}
              fontWeight="bold"
              textAlign="left" // Выравнивание текста по левому краю
            >
              {userProfile?.username}
            </Text>

            {/* Правая часть с действиями профиля */}
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
            textAlign={isMobile ? "left" : "left"}
          >
            {userProfile?.fullName}
          </Text>

          {/* UserDescription */}
          <UserDescription bioText={userProfile.bio} />

          {/* User Info Section (Posts, Followers, Following) */}
          <UserInfo
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

export default ProfileHeader;
