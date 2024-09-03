import { Avatar, Circle, Flex, HStack, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

const ContentComment = ({ comment }) => {
	//const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);
	const userProfile = {
		username: 'Nick',
		profilePicURL: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	}

	const isLoading = false;

	if (isLoading) return <CommentSkeleton />;
	return (
		<>
			<Flex direction={"column"} gap={1}>
				<HStack alignItems={'flex-start'}>
					<Link to={`/${userProfile.username}`}>
						<Avatar src={userProfile.profilePicURL} size={"sm"} />
					</Link>
					<VStack alignItems={'flex-start'}>
						<HStack  >
						
							<Link to={`/${userProfile.username}`}>
								<Text fontWeight={"bold"} fontSize={14}>
									{userProfile.username}
								</Text>
							</Link>
							<Text> • </Text>
							<Text fontSize={14} color={"gray"}>
								{timeAgo(comment.createdAt)}
							</Text>
						</HStack>
						<Text fontSize={14}>{comment.comment}</Text>
					</VStack>
				</HStack>
			</Flex>
		</>
	);
};

export default ContentComment;

const CommentSkeleton = () => {
	return (
		<Flex gap={4} direction={"column"} w={"full"} >
			<HStack>
				<SkeletonCircle h={8} w={8} />
				<Skeleton height={2} width={100} />
				<Skeleton height={2} width={50} />
			</HStack>
			<Skeleton height={10} width={300} />
		</Flex>
	);
};
