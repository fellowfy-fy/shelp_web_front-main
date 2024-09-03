import {FormControl,
	FormLabel, Divider,
	Input, Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack, Image, CardBody, CardFooter, Button, Card, CardHeader, Avatar, Heading, IconButton, SimpleGrid, Stack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import CardView from "./CardView";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import useSearchUser from "../../hooks/useSearchUser";
import { useRef } from "react";

const Portfolio = (data) => {
	const { isLoading, posts } = useGetFeedPosts();
	return (
		<Container maxW={"container.xl"} py={5} px={2}>
			{!isLoading && posts.length > 0 && posts.map((post) => <FeedPost key={post.id} post={post} />)}
			{!isLoading && posts.length === 0 && (
				<>
					<Text fontSize={"md"} color={"red.400"}>
						Dayuum. Looks like you don&apos;t have any friends.
					</Text>
				</>
			)}

			{/*
			<Flex gap='5'>
				{isLoading &&
					[0, 1, 2].map((_, idx) => (
						<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
							<Flex gap='2'>
								<SkeletonCircle size='10' />
								<VStack gap={2} alignItems={"flex-start"}>
									<Skeleton height='10px' w={"200px"} />
									<Skeleton height='10px' w={"200px"} />
								</VStack>
							</Flex>
							<Skeleton w={"full"}>
								<Box h={"200px"}>contents wrapped</Box>
							</Skeleton>
						</VStack>
					))}
			</Flex>
			*/}

			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1280: 4 }}>
				<Masonry gutter="1rem">{data.posts.map((src) => (

					<CardView linkImage={src} postData={data.postData} />

				))}</Masonry>
			</ResponsiveMasonry>
		</Container>
	);
};

export default Portfolio;
