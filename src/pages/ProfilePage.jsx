import {
  Container,
  Flex,
  Link,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import ProfileHeader from "../components/shared/ProfileHeader.jsx";
import useGetUserProfileByUsername from "../hooks/useGetUserProfileByUsername.js";
import CollectionCard from "../components/ui/CollectionCard.jsx";
import LoadMoreButton from "../components/ui/LoadMoreButton.jsx";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import GoBackButton from "../components/ui/GoBackButton.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ItemCard from "../components/shared/ItemCard.jsx";
import SearchBar from "../components/shared/SearchBar";

const ProfilePage = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);

  // Sample data for the collections
  const collectionPosts = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVg0JCFzD1T0R93AGYV_h2AiOWAlEJgCkew&usqp=CAU",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "data:image/jpeg;base64,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",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVg0JCFzD1T0R93AGYV_h2AiOWAlEJgCkew&usqp=CAU",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "https://product-images-cdn.liketoknow.it/D0aPFlYmnHpmH.Fh5gGRYpOJBIHwI6CNLlSq3Rk05rpQBkmYWZWEpDG7J2bVoWwfj8y4QWJ8q_0..jI3p2wyBzp4ThZajAnDAuuuR4M6AJtsvJp07M26SGr.2jETPZ5D39CpB8p_9b71L6pelzbOi.5ed2gKQNRpW1pBU26xzW8Shny1TbkSyUev0dM-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "https://product-images-cdn.liketoknow.it/D0aPFlYmnHpmH.Fh5gGRYpOJBIHwI6CNLlSq3Rk05rpQBkmYWZWEpDG7J2bVoWwfj8y4QWJ8q_0..jI3p2wyBzp4ThZajAnDAuuuR4M6AJtsvJp07M26SGr.2jETPZ5D39CpB8p_9b71L6pelzbOi.5ed2gKQNRpW1pBU26xzW8Shny1TbkSyUev0dM-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "https://product-images-cdn.liketoknow.it/D0aPFlYmnHpmH.Fh5gGRYpOJBIHwI6CNLlSq3Rk05rpQBkmYWZWEpDG7J2bVoWwfj8y4QWJ8q_0..jI3p2wyBzp4ThZajAnDAuuuR4M6AJtsvJp07M26SGr.2jETPZ5D39CpB8p_9b71L6pelzbOi.5ed2gKQNRpW1pBU26xzW8Shny1TbkSyUev0dM-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "https://product-images-cdn.liketoknow.it/D0aPFlYmnHpmH.Fh5gGRYpOJBIHwI6CNLlSq3Rk05rpQBkmYWZWEpDG7J2bVoWwfj8y4QWJ8q_0..jI3p2wyBzp4ThZajAnDAuuuR4M6AJtsvJp07M26SGr.2jETPZ5D39CpB8p_9b71L6pelzbOi.5ed2gKQNRpW1pBU26xzW8Shny1TbkSyUev0dM-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVg0JCFzD1T0R93AGYV_h2AiOWAlEJgCkew&usqp=CAU",
      title: "Underwater heaven",
      publishDate: "Wed, 26 January 2021",
      likesNum: 103,
      savesNum: 50,
      author: {
        username: "pat.rick96",
        location: "New Delhi, India",
        profilePicURL: "/path/to/avatar.jpg",
      },
    },
  ];

  const navigate = useNavigate();

  // const userNotFound = !isLoading && !userProfile;
  // if (userNotFound) return <UserNotFound />;

  return (
    <Container maxW="container.xl" py={5}>
      <Box pb={10}>
        <GoBackButton />
        <Flex align="center" justify="center">
          <ProfileHeader />
        </Flex>
      </Box>

      <Flex align="center" mb={4} justifyContent="space-between">
        <Text
          className="font-assistant font-bold text-[16px] leading-[21px] text-[#1B1D28]"
          whiteSpace="nowrap" // Prevent the text from wrapping
        >
          My Collections
        </Text>
        <button>See all</button>
      </Flex>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>

      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w={"full"}
        mx={"auto"}
        flexDirection={"column"}
      >
        {!isLoading && userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
      </Flex>

      <SearchBar />

      {/* Feed Posts Section */}
      <Box width="100%" py={10}>
        {" "}
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 2,
            750: 2,
            900: 3,
            1200: 4,
          }}
        >
          <Masonry gutter="16px">
            {collectionPosts.map((post, index) => (
              <ItemCard
                key={index}
                imageUrl={post.imageUrl}
                title={post.title}
                publishDate={post.publishDate}
                likesNum={post.likesNum}
                savesNum={post.savesNum}
                author={post.author}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>

      <center>
        <LoadMoreButton />
      </center>
    </Container>
  );
};

export default ProfilePage;

// skeleton for profile header
const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size="24" />
      return (
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SkeletonCircle size="24" />

        <VStack
          alignItems={{ base: "center", sm: "flex-start" }}
          gap={2}
          mx={"auto"}
          flex={1}
        >
          <Skeleton height="12px" width="150px" />
          <Skeleton height="12px" width="100px" />
        </VStack>
      </Flex>
      );
      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height="12px" width="150px" />
        <Skeleton height="12px" width="100px" />
      </VStack>
    </Flex>
  );
};

const UserNotFound = () => {
  return (
    <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <Link
        as={RouterLink}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go home
      </Link>
    </Flex>
  );
};
