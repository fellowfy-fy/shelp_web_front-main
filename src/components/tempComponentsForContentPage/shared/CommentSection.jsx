import { VStack, Divider } from "@chakra-ui/react";
import Comment from "../ui/Comment";

const CommentSection = ({ comments }) => (
  <VStack align="start" maxH="350px" overflowY="auto">
    {comments.map((comment) => (
      <Comment key={comment.id} {...comment} />
    ))}
    <Divider />
  </VStack>
);

export default CommentSection;
