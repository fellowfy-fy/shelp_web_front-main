import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
	//const userProfile = useUserProfileStore((state) => state.userProfile);
	const userProfile = {
		username: 'Nick',
		profilePicURL: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	}
	return (
		<Flex gap={4}>
			<Link to={`/${userProfile.username}`}>
				<Avatar src={userProfile.profilePicURL} size={"sm"} />
			</Link>
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					<Link to={`/${userProfile.username}`}>
						<Text fontWeight={"bold"} fontSize={12}>
							{userProfile.username}
						</Text>
					</Link>
					<Text fontSize={14}>{post.caption}</Text>
				</Flex>
				<Text fontSize={12} color={"gray"}>
					{timeAgo(post.createdAt)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Caption;
