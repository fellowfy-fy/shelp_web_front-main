import {
  Box,
  Text,
  Flex,
  VStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import useGetFeedPosts from "../../hooks/useGetFeedPosts.js";
import ItemCard from "./ItemCard.jsx";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Box width="100%">
      {!isLoading && posts.length > 0 && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 2,
            750: 2,
            900: 3,
            1200: 4,
            1500: 5,
            1800: 6,
          }}
        >
          <Masonry gutter="1rem">
            {posts.map((post) => (
              <ItemCard
                key={post.id}
                imageUrl={post.imageURL}
                title={post.title}
                publishDate={post.publishDate}
                likesNum={post.likesNum}
                author={post.author}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
      {/* If loading is done and there are no posts */}
      {!isLoading && posts.length === 0 && (
        <Text fontSize={"md"} color={"red.400"}>
          Dayuum. Looks like you don&apos;t have any friends.
        </Text>
      )}
      {/* If loading is ongoing */}
      {isLoading && (
        <Flex gap="5">
          {[0, 1, 2].map((_, idx) => (
            <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap="2">
                <SkeletonCircle size="10" />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton height="10px" w={"200px"} />
                  <Skeleton height="10px" w={"200px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"200px"}>contents wrapped</Box>
              </Skeleton>
            </VStack>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default FeedPosts;
