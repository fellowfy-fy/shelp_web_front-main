import {
    Flex,
    Box,
    Image,
    Text,
    Stack,
    Avatar,
    CardBody, Card, IconButton, Link, Divider
} from '@chakra-ui/react'
import { timeAgo } from "../../utils/timeAgo";
import { BiBookmark, BiHeart, BiSolidHeart, BiSolidBookmark } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";




const CardView = (data) => {
    return (
        <Box mb="0.5rem">
            <PostHeader post={data.postData} creatorProfile={data.postData.author} />
            <Image
                rounded="xs"
                objectFit='cover'
                src={data.linkImage}
                alt={data.postData.title}
            />
            <Stack direction={'row'} spacing={2} justifyContent="space-between" fontSize='15px' align={'center'}>
                <Text color={'gray.500'}> {timeAgo(data.postData.publishDate)} </Text>
                <Stack direction={'row'} spacing={3}>
                    <Stack direction={'row'} spacing={0} justifyContent="space-between" align={'center'}>
                        <Text>{data.postData.likesNum}</Text>
                        <IconButton
                            variant='ghost'
                            fontSize='20px'
                            icon={data.postData.is_saved ? <BiSolidHeart color='#53abe9' /> : <BiHeart />}
                        />
                    </Stack>
                    <Stack direction={'row'} spacing={0} justifyContent="space-between" align={'center'}>
                        <Text >{data.postData.savesNum}</Text>
                        <IconButton
                            variant='ghost'
                            fontSize='20px'
                            icon={data.postData.is_saved ? <BiSolidBookmark color='#53abe9' /> : <BiBookmark />}
                        />
                    </Stack>

                </Stack>
            </Stack>
            <Text fontSize={15} mb={3} mt={1}>
                {data.postData.title}
            </Text>
            <Divider />
        </Box>
    );
};

export default CardView