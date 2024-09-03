import {
    Flex,
    Box,
    Image,
    Text,
    Stack,
    Circle,
    Avatar,
    CardBody, Card, IconButton, Divider
} from '@chakra-ui/react'
import { timeAgo } from "../../utils/timeAgo";
import { BiBookmark, BiHeart, BiSolidHeart, BiSolidBookmark } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Link } from "react-router-dom";
import { IoShareOutline } from "react-icons/io5";



const CardView = (data) => {
    return (
        <Box mb="0.5rem" >
            <PostHeader post={data.postData} creatorProfile={data.postData.author} />
            {data.isProduct && (
                <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
            )}
            <Box position='relative'>
                <Circle position="absolute" background='white' w={6} h={6} top={2} right={2} >
                    <AiOutlineShopping size={20} color='#DC1646' />
                </Circle>
                <Link to={`/content/q`}>
                    <Image
                        rounded="md"
                        objectFit='cover'
                        src={ data.postData.url}
                        alt={data.postData.title}
                    />
                </Link>
            </Box>
            <Stack direction={'row'} spacing={2} justifyContent="space-between" fontSize='15px' align={'center'}>
                <Text color={'gray.500'}> {timeAgo(Date.parse(data.postData.publishDate))} </Text>
                <Stack direction={'row'} spacing={0}>
                    <Stack direction={'row'} spacing={0} justifyContent="space-between" align={'center'}>
                        <Text>{data.postData.likes}</Text>
                        <IconButton
                        minW={7}
                            variant='ghost'
                            fontSize='18px'
                            icon={data.postData.is_saved ? <BiSolidHeart color='#53abe9' /> : <BiHeart />}
                        />
                    </Stack>
                    <IconButton
                    minW={7}
                            variant='ghost'
                            fontSize='18px'
                            icon={<BiBookmark />}
                        />
                        <IconButton
                        minW={7}
                            variant='ghost'
                            fontSize='18px'
                            icon={<IoShareOutline />}
                        />
                        
                        {/*
                        <IconButton
                            variant='ghost'
                            fontSize='20px'
                            icon={data.postData.is_saved ? <BiSolidBookmark color='#53abe9' /> : <BiBookmark />}
                        />
                        */}
  
                </Stack>
            </Stack>
            <Text fontSize={15} noOfLines={[1, 2, 3]} fontWeight={400} mb={2} mt={1}>
                <Link to={`/home`}> {data.postData.title} </Link>
            </Text>
            <Divider />
        </Box>



        /*
        <Box mb="0.5rem" >
            <PostHeader post={data.postData} creatorProfile={data.postData.author} />
            
            {data.isProduct && (
                <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
            )}
            <Box position='relative'>
                <Circle position="absolute" background='white' w={6} h={6} top={2} right={2} >
                    <AiOutlineShopping size={20} color='#DC1646' />
                </Circle>

                <Link to={`/content/q`}>
                    <Image
                        rounded="xl" 
                        objectFit='cover'
                        src={data.linkImage}
                        alt={data.postData.title}
                    />
                </Link>
            </Box>
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
            <Text fontSize={15} fontWeight={300} mb={2} mt={1}>
                <Link to={`/home`}> {data.postData.title} </Link>
            </Text>
            <Divider />
        </Box>
        */
    );
};

export default CardView