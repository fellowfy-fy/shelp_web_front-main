import FeedPosts from "../../components/CardsGrid/FeedPosts";
import { useEffect, useState } from 'react';
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import {
	FormControl, Tag,
	FormLabel, Divider, Center, HStack,
	Input, Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack, Image, CardBody, CardFooter, Button, Card, CardHeader, Avatar, Heading, IconButton, SimpleGrid, Stack
} from "@chakra-ui/react";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import useSearchUser from "../../hooks/useSearchUser";
import useFollowUser from "../../hooks/useFollowUser";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { BiBookmark, BiHeart, BiSolidHeart, BiSolidBookmark } from "react-icons/bi";
import { BsFilePostFill } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PostHeader from "../../components/FeedPosts/PostHeader";
import { timeAgo } from "../../utils/timeAgo";
import Comment from "../../components/Comment/Comment";
import ContentComment from "../../components/Comment/ContentComment";
import Caption from "../../components/Comment/Caption";


const ContentPage = (props) => {
	const searchRef = useRef(null);
	const { user, getUserProfile, isLoading, setUser } = useSearchUser();
	const handleSearchUser = (e) => {
		e.preventDefault();
		getUserProfile(searchRef.current.value);
	};

	const post = {
		caption: {
			caption: "Hello this is post",
			createdAt: Date.parse("2020-05-12T23:50:21.817Z")

		},
		comments: [
			{
				id: "qwewqeqwe12",
				createdBy: {
					username: 'Nick',
					profilePicURL: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
				},
				createdAt: Date.parse("2020-05-12T23:50:21.817Z"),
				comment: "First comment With Chakra UI, I wanted to sync the speed of development with the speed of designWith Chakra UI, I wanted to sync the speed of development with the speed of designWith Chakra UI, I wanted to sync the speed of development with the speed of designWith Chakra UI, I wanted to sync the speed of development with the speed of design"
			},
			{
				id: "qwewqeqwe12",
				createdBy: {
					username: 'Nick',
					profilePicURL: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
				},
				createdAt: Date.parse("2020-05-12T23:50:21.817Z"),
				comment: "First comment With Chakra UI, I wanted to sync the speed of development with the speed of designWith Chakra UI, I wanted to sync the speed of development with the speed of designWith Chakra UI, I wanted to sync the speed of development with the speed of designWith Chakra UI, I wanted to sync the speed of development with the speed of design"
			}
		]
	}

	const data = {
		collection: {
			tilte: "Modern online and offline payments for Africa",
			authorUsername: 'Nick',
			authorPoriflePic: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
			isLiked: false
		},
		title: "With Chakra UI, I wanted to sync the speed of development with the speed of design",
		medias: [
			"https://product-images-cdn.liketoknow.it/X8RDXVZii3rjXLNKScemOZ.c3l8ii8wI.iDfvF69452.KhKRGiez4TpuebjYZCtXqq6kpTBs1nPTgldAwE64yhPn3mypS_wuH9.9pTXwV9LrFKYmN7nKRl9xH08pcgSIOr9ltEBF_uxjd05tQ8.FaLfy2T7lw5QNfZ8DBhvUpptA5NMJv3vIH4babXA-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
			"https://product-images-cdn.liketoknow.it/2Ik7Mp.o7Rd157TEuRZJFE9UEOKUi7cSDk6haCA0m9YVe4TIngo28BukTH197NVU1ycuSCCmJT9jDI0e3it9FjBQkeWEfX2LaXubncbKV2SbwB81z_Q-?v=2&auto=format&fm=webp&q=80",

		],
		author: {
			authorUsername: 'Nick',
			authorPoriflePic: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
		},
		isLiked: false,
		isNew: true,
		imageURL:
			'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
		name: 'Wayfarer Classic',
		likesNum: 34,
		savesNum: 222,
		publishDate: Date.parse("2020-05-12T23:50:21.817Z"),
		is_liked: true,
		is_saved: true,
		isProduct: true,
		lastID: 1234556778,
		type: "product"
	}

	const history = useNavigate();

	const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(NaN);

	return (
		<>
			<Container mt={10} mb={20} maxW={'container.lg'}>
				<Button my={5} color={'black'} leftIcon={<FaArrowLeft />} variant='link' onClick={() => history(-1)}>
					Go back
				</Button>
				<Flex gap={5}>
					<Box flex={5}>
						<Image
							rounded={'lg'}
							objectFit='cover'
							src={data.medias[0]}
							alt={data.title}
						/>
					</Box>
					<Box flex={5}>
						<HStack fontSize={15} >
							<Link to={`/${data.author.authorUsername}`}>
								<HStack>
									<Avatar src={data.author.authorPoriflePic} size={"sm"} />
									<Text fontWeight={"bold"}>
										{data.author.authorUsername}
									</Text>
								</HStack>
							</Link>
							<Text> • </Text>
							<Text color={"gray"}>
								{timeAgo(data.publishDate)}
							</Text>
						</HStack>

						<Text fontSize={18} fontWeight={500} mb={3} mt={1}>
							{data.title}
						</Text>
						<HStack color='#53abe9' gap={3} flexWrap='wrap' alignItems='self-start' justify={'flex-start'} cursor={"pointer"}>
							{/* 
							<Button
								variant='outline'
								size={"md"}
								color={"blue.500"}
								fontWeight={"bold"}
								transition={"0.2s ease-in-out"}
								onClick={handleFollowUser}
								isLoading={isUpdating}
							>
								{isFollowing ? "Unfollow" : "Follow"}
							</Button>
							*/}


							<Button size={"sm"} borderRadius={15} color='#53abe9' colorScheme='#53abe9' variant='outline'>
								<HStack gap={1}><Box>12</Box><BiHeart /> </HStack>
							</Button>
							<Button size={"sm"} borderRadius={15} leftIcon={<HStack gap={1}><Box>12</Box><BiBookmark /> </HStack>} colorScheme='blue' variant='outline'>
								Save
							</Button>
							<Button size={"sm"} borderRadius={15} rightIcon={<FaRegShareSquare />} colorScheme='blue' variant='outline'>
								Share
							</Button>
						</HStack>

						<Text fontSize={15} mb={3} mt={1}>
							{data.title}
						</Text>

						{data.type == "post" && <>
							<Text fontSize={18} fontWeight={600} mb={3} mt={1}>
								Products
							</Text>
							<Card
								direction={{ base: 'column', sm: 'row' }}
								overflow='hidden'
								variant='outline'
							>
								<Image
									objectFit='cover'
									maxW={{ base: '100%', sm: '100px' }}
									src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
									alt='Caffe Latte'
								/>

								<Stack>
									<CardBody>
										<Heading size='md'>The perfect latte</Heading>

										<Text py='2'>
											Caffè latte is a coffee beverage of Italian origin made with espresso
											and steamed milk.
										</Text>
									</CardBody>

									<CardFooter>
										<Button variant='solid' colorScheme='blue'>
											Buy Latte
										</Button>
									</CardFooter>
								</Stack>
							</Card>
						</>
						}

						<Flex align="center">
							<Text py={3} pr={2} w={200} textTransform={'uppercase'} fontWeight={600}>Post products</Text>
							<Divider />
						</Flex>
						<VStack w='full' alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
							{/* COMMENTS */}
							{post.comments.map((comment) => (
								<ContentComment key={comment.id} comment={comment} />
							))}
						</VStack>
						<Flex align="center">
							<Text py={3} pr="2" textTransform={'uppercase'} fontWeight={600}>Comments</Text>
							<Divider />
						</Flex>

						<VStack w='full' alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
							{/* COMMENTS */}
							{post.comments.map((comment) => (
								<ContentComment key={comment.id} comment={comment} />
							))}
						</VStack>

						{/*
					<Flex spacing='4'>
						<Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>
							<Avatar size='sm' name='Segun Adebayo' src={data.author.profilePicURL} />
							<Box>
								<Link fontSize='15px' fontWeight={500} href={"/" + data.author.username}> @{data.author.username} </Link>
							</Box>
						</Flex>
						<IconButton
							variant='ghost'
							colorScheme='gray'
							aria-label='See menu'
							icon={<BsThreeDotsVertical />}
						/>
					</Flex>
					*/}
					</Box>
				</Flex>
			</Container>
		</>
	);
};

export default ContentPage;
