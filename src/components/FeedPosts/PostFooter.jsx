import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import CommentsModal from "../Modals/CommentsModal";

// Import icons as paths
const Like = "/Like.svg";
const Favorite = "/Favorite.svg";
const Comment = "/Comment.svg";
const Send = "/Send.svg";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={10} mt={"auto"}>
      {/* Actions Section */}
      <Flex alignItems={"center"} justifyContent={"space-between"} mb={2}>
        {/* Like and Comment Icons */}
        <Flex alignItems={"center"} gap={4}>
          {/* Like Button */}
          <Box onClick={handleLikePost} cursor={"pointer"}>
            <img src={isLiked ? Favorite : Like} alt="Like" />
          </Box>
          {/* Comment Button */}
          <Box cursor={"pointer"} onClick={() => commentRef.current.focus()}>
            <img src={Comment} alt="Comment" />
          </Box>
          {/* Send Button */}
          <Box cursor={"pointer"}>
            <img src={Send} alt="Send" />
          </Box>
        </Flex>
      </Flex>

      {/* Likes Information */}
      <Text fontWeight={600} fontSize={"sm"}>
        Liked by{" "}
        <span style={{ fontWeight: "bold" }}>{creatorProfile.username}</span>{" "}
        and {likes} others
      </Text>

      {/* Caption and Comments */}
      {!isProfilePage && (
        <>
          <Text fontSize="sm" fontWeight={400} mt={2}>
            {post.caption}
          </Text>
        </>
      )}

      {/* Date Section */}
      <Text fontSize="sm" color={"gray.500"} mt={2}>
        {/* Display date in "Wed, 26 January 2021" format */}
        {new Date(post.createdAt).toLocaleDateString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </Text>

      {/* Comment Input */}
      {authUser && (
        <Flex alignItems={"center"} gap={2} mt={4}>
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
                bg={"transparent"}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}

      {/* Comments Modal */}
      {isOpen ? (
        <CommentsModal isOpen={isOpen} onClose={onClose} post={post} />
      ) : null}
    </Box>
  );
};

export default PostFooter;
