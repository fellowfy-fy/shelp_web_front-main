import { Button, Flex } from "@chakra-ui/react";
import dots from "../../assets/dots.svg";

const CollectionActions = ({
  isOwnProfile,
  isFollowing,
  onOpen,
  isUpdating,
}) => {
  return (
    <Flex gap={4}>
      {isOwnProfile ? (
        <>
          <Button
            width="80px"
            height="32px"
            background="#1B1D28"
            borderRadius="5px"
            fontFamily="'Assistant'"
            fontWeight="700"
            fontSize="14px"
            lineHeight="18px"
            color="white"
          >
            Follow
          </Button>
          <Button
            width="10px"
            height="32px"
            background="transparent"
            borderRadius="5px"
            fontFamily="'Assistant'"
            fontWeight="700"
            fontSize="14px"
            lineHeight="18px"
            color="white"
          >
            <img src={dots} alt="dots" />
          </Button>
        </>
      ) : (
        <Button
          bg={"blue.500"}
          color={"white"}
          _hover={{ bg: "blue.600" }}
          size={{ base: "xs", md: "sm" }}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default CollectionActions;
