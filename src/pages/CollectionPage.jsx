import FeedPosts from "../components/CardsGrid/FeedPosts";
import { useEffect, useState } from "react";
import SuggestedUsers from "../components/SuggestedUsers/SuggestedUsers";
import {
  FormControl,
  Tag,
  InputGroup,
  InputLeftElement,
  FormLabel,
  Divider,
  Center,
  HStack,
  Input,
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
  Image,
  CardBody,
  CardFooter,
  Button,
  Card,
  CardHeader,
  Avatar,
  Heading,
  IconButton,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import useGetFeedPosts from "../hooks/useGetFeedPosts";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import useSearchUser from "../hooks/useSearchUser";
import useFollowUser from "../hooks/useFollowUser";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import {
  BiBookmark,
  BiHeart,
  BiSolidHeart,
  BiSolidBookmark,
} from "react-icons/bi";
import { BsFilePostFill } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import collectionItems from "../sunth_data/contents.json";

const CollectionPage = (props) => {
  const searchRef = useRef(null);
  const { user, getUserProfile, isLoading, setUser } = useSearchUser();
  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  const collection_posts = [
    "https://product-images-cdn.liketoknow.it/MtoRLDzuoTojD.pu5olR4_NKuL0MDAFjuIi6ECMRD6K1q8rIB0ZAo9bsaexHXzAPFxnigJonpKBNSFyezhG88mBhTWPEjeOB.p.UPZqkPEnW94A5Wmymp5ykQXUYQ7Glw5r.UtXtA4VZGdldtOt1eziCqp581te23Naz9WwYDRdeqFxygacLkfTbBeo-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
    "https://product-images-cdn.liketoknow.it/jNDt4.XAsbguTzjYzHi4TmJbYRbZBwvaVJoPey6ACj9yvvjiGE2ynWlVxNZ47FQvSALtbaCgtn16nMrd2u_JlBIh9rmrLrlUV4pOmqqoslRvXF6J3xSfvhht5M8Q8i2dT8BzoPgdVQQIqNPUC3vmZQPthxWEjYlrlddKDmkybDbrCGJYXMbG5LMitlE-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
    "https://images.urbndata.com/is/image/Anthropologie/84492214_011_b?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080",
    "https://images.urbndata.com/is/image/Anthropologie/84492214_011_b2?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=1080",
    "https://product-images-cdn.liketoknow.it/Cig47ih5caSWSjfoomkx3oG9ifpWBVTWDDxedlStp3W71HpgKt9WyGQX4_1avDga_aYy4E.kuozNJbeANM9eXISX_BDNNxgG4aiDeQB_iH98VyWhhbFikQYEBNLQGwADZOglLLzrMx8jh5dcfT3tJ2KXlt_wReI75QhG0taQwHsQaN52rBOnGDPDjAQ-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
    "https://product-images-cdn.liketoknow.it/zrwkWIV7UsuiqdpnL4AQ.9NTvUmabxvg2U56WeuR2LZLGuQt5Tg9efw2vt6yiVyH1OXOo4u5LdPiIARJm2Ul6YFEX8lJUoVMQ5wGDLmBh.kSivd2rJZTPFJDUYAJmlUVP_Si.zuRO0h.zSiUPkXhcom5GF3iQxnX27.HpuUU_3Ye5qtZz0d4ZHcK7yk-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
    "https://product-images-cdn.liketoknow.it/X8RDXVZii3rjXLNKScemOZ.c3l8ii8wI.iDfvF69452.KhKRGiez4TpuebjYZCtXqq6kpTBs1nPTgldAwE64yhPn3mypS_wuH9.9pTXwV9LrFKYmN7nKRl9xH08pcgSIOr9ltEBF_uxjd05tQ8.FaLfy2T7lw5QNfZ8DBhvUpptA5NMJv3vIH4babXA-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
    "https://product-images-cdn.liketoknow.it/2Ik7Mp.o7Rd157TEuRZJFE9UEOKUi7cSDk6haCA0m9YVe4TIngo28BukTH197NVU1ycuSCCmJT9jDI0e3it9FjBQkeWEfX2LaXubncbKV2SbwB81z_Q-?v=2&auto=format&fm=webp&q=80",
    "https://product-images-cdn.liketoknow.it/itrKH_XqLPU_CCvk.GaKCnFN498GxPBo6R2vQWafdGagj6ww051d3snTrIueZtO4EKTKRJrX27E_LxegbR6J3Klm5udulVGp.DuATF8LWKrGcsNcG_QGMo9.sa.uG7LFMpviuQT0_duaeiIXiVMlBlhBDFg1hKtTTuh3C3RVtrV.MQCesIpAnZPvONQ-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
    "https://product-images-cdn.liketoknow.it/D0aPFlYmnHpmH.Fh5gGRYpOJBIHwI6CNLlSq3Rk05rpQBkmYWZWEpDG7J2bVoWwfj8y4QWJ8q_0..jI3p2wyBzp4ThZajAnDAuuuR4M6AJtsvJp07M26SGr.2jETPZ5D39CpB8p_9b71L6pelzbOi.5ed2gKQNRpW1pBU26xzW8Shny1TbkSyUev0dM-?v=0&auto=format&fm=webp&w=450&q=80&dpr=2",
    "https://i.pinimg.com/564x/a3/dd/e9/a3dde980dfa46b697a4ec30f03dcde41.jpg",
    "https://i.pinimg.com/564x/59/fc/ef/59fcef26533eb2c0d3210d79ee6d0dff.jpg",
    "https://i.pinimg.com/564x/81/f2/7b/81f27b5bf7d2c9cdb59f9edf9ae3cf7d.jpg",
    "https://i.pinimg.com/564x/ba/37/0e/ba370efb59365508e2b8d49f7575b105.jpg",
    "https://i.pinimg.com/564x/5a/9e/d1/5a9ed1508c574ba9d40604975af21eea.jpg",
    "https://files.choys.app/choys/D.Ishutina/6f62a20d-3b63-4a7c-9d2f-2da3b63ea6cd_1721055264.775538_0",
  ];

  const data = {
    collection: {
      tilte: "Modern online and offline payments for Africa",
      authorUsername: "Nick",
      authorPoriflePic:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      isLiked: false,
    },
    title:
      "Trumpet/Mermaid Scoop Ankle-Length Lace Tulle Mother of the Bride Dress With Sequins Beading  - JJ's House",
    description:
      "Product Code: #217292 Fabric: Lace, Tulle Embellishment: Beading, Sequins Silhouette: Trumpet/Mermaid Length: Ankle-Length Neckline: Scoop Straps & Sleeves: Short Sleeve Fully Lined: Yes Built-In Bra: Yes Boning: No Features: No Leg Slit Back Style: Back Zip, Scoop",
    isNew: true,
    imageURL:
      "https://i.pinimg.com/564x/ba/37/0e/ba370efb59365508e2b8d49f7575b105.jpg",
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
    isProduct: true,
    lastID: 1234556778,
  };

  const history = useNavigate();

  const observerTarget = useRef(null);
  const [lastID, setLastID] = useState(data.lastID);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLastID(data.lastID);
          console.log("Update");
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(NaN);

  return (
    <Container maxW={"100%"} px={0}>
      <Box pb={10}>
        <Container maxW={"container.xl"}>
          <Button
            my={5}
            color={"black"}
            leftIcon={<FaArrowLeft />}
            variant="link"
            onClick={() => history(-1)}
          >
            Go back
          </Button>

          <HStack
            alignContent={"center"}
            justifyContent={"space-between"}
            gap={6}
          >
            <VStack
              textAlign="center"
              gap={3}
              alignItems="flex-start"
              width={"100%"}
              maxW={"800px"}
            >
              <Box textStyle={"collectionTitle"}>{data.collection.tilte}</Box>
              <Text fontSize="md">
                Paystack helps businesses in Africa get paid by anyone, anywhere
                in the world
              </Text>
              <HStack
                fontSize="17px"
                gap={5}
                justifyContent="flex-start"
                fontWeight={500}
              >
                <HStack fontSize={"15px"} fontWeight={600} gap={2}>
                  {data.collection.authorUsername ? (
                    <Link to={`/${data.collection.authorUsername}`}>
                      <Avatar
                        src={data.collection.authorPoriflePic}
                        alt="user profile pic"
                        size={"sm"}
                      />
                    </Link>
                  ) : (
                    <SkeletonCircle size="10" />
                  )}

                  {data.collection.authorUsername ? (
                    <Link
                      fontSize="15px"
                      fontWeight={600}
                      to={`/${data.collection.authorUsername}`}
                    >
                      {data.collection.authorUsername}
                    </Link>
                  ) : (
                    <Skeleton w={"100px"} h={"10px"} />
                  )}
                </HStack>
                <Divider
                  color={"#FE5F75"}
                  height={"20px"}
                  border={"1px"}
                  orientation="vertical"
                />
                <HStack gap={2}>
                  <Box fontWeight={600}>12</Box> <Box> products</Box>
                </HStack>
                <Divider
                  color={"#FE5F75"}
                  height={"20px"}
                  border={"1px"}
                  orientation="vertical"
                />
                <HStack gap={2}>
                  <Box fontWeight={600}>12</Box> <Box> posts</Box>
                </HStack>
              </HStack>
            </VStack>
            <VStack
              gap={3}
              alignItems={"flex-end"}
              flexWrap="wrap"
              justify={"flex-start"}
              cursor={"pointer"}
            >
              <Button
                size={"sm"}
                leftIcon={
                  <HStack gap={1}>
                    <Box>12</Box>
                    <BiHeart />{" "}
                  </HStack>
                }
                colorScheme="blue"
                variant="outline"
              >
                {data.collection.isLiked ? "Unlike" : "Like"}
              </Button>
              <Button
                size={"sm"}
                leftIcon={
                  <HStack gap={1}>
                    <Box>12</Box>
                    <HiOutlineUsers />{" "}
                  </HStack>
                }
                colorScheme="blue"
                variant="outline"
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </Button>
              <Button
                size={"sm"}
                rightIcon={<FaRegShareSquare />}
                colorScheme="blue"
                variant="outline"
              >
                Share
              </Button>
            </VStack>
          </HStack>
        </Container>
      </Box>
      <Container mb={20} maxW={"container.xl"}>
        {/* 
				<Divider my={10} boxShadow='base' />
				<HStack gap={5}>
					<InputGroup>
						<InputLeftElement pointerEvents='none'>
							<IoSearch />
						</InputLeftElement>
						<Input type='tel' placeholder='Keyword...' />
					</InputGroup>
					<Button rightIcon={<IoFilter />} border={'1px'} px={10} borderRadius={20} background={'transparent'} borderColor={'black'}>Filter</Button>
					<Button rightIcon={<TbArrowsSort />} border={'1px'} px={10} borderRadius={20} background={'transparent'} borderColor={'black'}>Sort</Button>
					<Button rightIcon={<IoSearch />} border={'1px'} px={10} borderRadius={20} background={'transparent'} borderColor={'black'}>Show</Button>
				</HStack>
*/}
        <Divider my={0} boxShadow="base" />

        <FeedPosts
          posts={collection_posts}
          items={collectionItems}
          observer={observerTarget}
          postData={data}
        />
        <Center>
          <Button
            border={"1px"}
            px={20}
            borderRadius={20}
            background={"transparent"}
            borderColor={"black"}
            _hover={{ background: "black", color: "white" }}
          >
            Load more
          </Button>
        </Center>
      </Container>
    </Container>
  );
};

export default CollectionPage;
