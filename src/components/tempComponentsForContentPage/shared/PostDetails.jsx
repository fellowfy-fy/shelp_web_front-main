import { Box, Image, Text } from "@chakra-ui/react";
import AvatarWithUsername from "../ui/AvatarWithUsername";
import ActionButtons from "../ui/ActionButtons";

const PostDetails = ({ post }) => {
  if (!post) {
    return <Text>Post data is unavailable.</Text>;
  }

  return (
    <Box>
      <Image src={post.imageUrl} alt={post.title} />
      <Text>{post.title}</Text>
      <Text>{post.publishDate}</Text>
      <Text>{post.likesNum} likes</Text>
      <Text>{post.savesNum} saves</Text>
      <Text>
        Posted by {post.author.username} from {post.author.location}
      </Text>
    </Box>
  );
};

export default PostDetails;
