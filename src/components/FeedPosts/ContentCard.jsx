import {
  Flex,
  Box,
  Image,
  Text,
  Stack,
  Avatar,
  CardBody,
  Card,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { timeAgo } from "../../utils/timeAgo";
import {
  BiBookmark,
  BiHeart,
  BiSolidHeart,
  BiSolidBookmark,
} from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const data = {
  title:
    "With Chakra UI, I wanted to sync the speed of development with the speed of design",
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  likesNum: 34,
  savesNum: 222,
  publishDate: Date.parse("2020-05-12T23:50:21.817Z"),
  author: {
    username: "username",
    fname: "Segun Adebayo",
    profilePicURL:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  is_liked: true,
  is_saved: true,
};

const ContentCard = (data2) => {
  return (
    <Box>
      <PostHeader post={data} creatorProfile={data.author} />
      <Card maxW="md">
        <Image
          roundedTop="md"
          objectFit="cover"
          src={data2.linkImage}
          alt={data.title}
        />
        <CardBody>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent="space-between"
            fontSize="15px"
            align={"center"}
          >
            <Text color={"gray.500"}> {timeAgo(data.publishDate)} </Text>
            <Stack direction={"row"} spacing={3}>
              <Stack
                direction={"row"}
                spacing={0}
                justifyContent="space-between"
                align={"center"}
              >
                <Text>{data.likesNum}</Text>
                <IconButton
                  variant="ghost"
                  fontSize="20px"
                  icon={
                    data.is_saved ? (
                      <BiSolidHeart color="#53abe9" />
                    ) : (
                      <BiHeart />
                    )
                  }
                />
              </Stack>
              <Stack
                direction={"row"}
                spacing={0}
                justifyContent="space-between"
                align={"center"}
              >
                <Text>{data.savesNum}</Text>
                <IconButton
                  variant="ghost"
                  fontSize="20px"
                  icon={
                    data.is_saved ? (
                      <BiSolidBookmark color="#53abe9" />
                    ) : (
                      <BiBookmark />
                    )
                  }
                />
              </Stack>
            </Stack>
          </Stack>
          <Text fontSize={15} mb={3} mt={1}>
            {data.title}
          </Text>
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
        </CardBody>
      </Card>
    </Box>
  );
};

export default ContentCard;
