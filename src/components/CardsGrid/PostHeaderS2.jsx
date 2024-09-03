import { Avatar, Box, Button, Flex, Skeleton, SkeletonCircle, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
	const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
			<Flex alignItems={"center"} fontSize={15} gap={2}>
				{creatorProfile ? (
					<Link to={`/${creatorProfile.username}`}>
						<Avatar src={creatorProfile.profilePicURL} alt='user profile pic' size={"sm"} />
					</Link>
				) : (
					<SkeletonCircle size='10' />
				)}

				<VStack>
					{creatorProfile ? (
						<Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
					) : (
						<Skeleton w={"100px"} h={"10px"} />
					)}
					<Text color={'gray.500'}> {timeAgo(post.publishDate)} </Text>
				</VStack>
			</Flex>
			<Box cursor={"pointer"}>
				{/*
				<Button
					size={"xs"}
					bg={"transparent"}
					fontSize={14}
					color={"blue.500"}
					fontWeight={"bold"}
					_hover={{
						
						textDecoration: "underline"
					}}
					transition={"0.2s ease-in-out"}
					onClick={handleFollowUser}
					isLoading={isUpdating}
				>
					{isFollowing ? "Unfollow" : "Follow"}
				</Button>
*/}
				<Button size={"sm"} borderRadius={15} colorScheme='gray'>{isFollowing ? "Unfollow" : "Follow"}</Button>
			</Box>
		</Flex>
	);
};

export default PostHeader;
