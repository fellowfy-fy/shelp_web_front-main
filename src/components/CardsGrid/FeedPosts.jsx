import { Box, Container, Text } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import CardView2 from "./CardView2";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const FeedPosts = (data) => {
  const { isLoading, posts, items } = useGetFeedPosts();
  return (
    <Container maxW={"container.xl"} py={5} px={2}>
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Dayuum. Looks like you don&apos;t have any friends.
          </Text>
        </>
      )}

      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1280: 4 }}
      >
        <Masonry gutter="1.2rem">
          {data.items.contents.map((src) => (
            <CardView2 linkImage={src} postData={src} />
          ))}
        </Masonry>
        <Box ref={data.observer}></Box>
      </ResponsiveMasonry>

      {/*
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1280: 4 }}>
				<Masonry gutter="1.2rem">{
					data.items.contents.map((src) => (
						<CardView linkImage={src} postData={src} />
					))}
				</Masonry>
				<Box ref={data.observer}></Box>
			</ResponsiveMasonry>

			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1280: 4 }}>
				<Masonry gutter="1.4rem">{
					data.posts.map((src) => (
						<CardView linkImage={src} postData={data.postData} />
					))}
				</Masonry>
				<Box ref={data.observer}></Box>
			</ResponsiveMasonry>
			 */}
    </Container>
  );
};

export default FeedPosts;
