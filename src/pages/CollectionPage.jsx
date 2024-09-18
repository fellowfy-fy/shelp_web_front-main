import FeedPosts from "../components/CardsGrid/FeedPosts";
import { useEffect, useState } from "react";
import { Center, Box, Container, Flex, Button } from "@chakra-ui/react";

import useSearchUser from "../hooks/useSearchUser";
import useFollowUser from "../hooks/useFollowUser";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import collectionItems from "../sunth_data/contents.json";
import CollectionHeader from "../components/CollectionComponents/CollectionHeader";
import SearchBar from "../components/SearchBar/SearchBar";
const CollectionPage = (props) => {
  const searchRef = useRef(null);
  const { user, getUserProfile, isLoading, setUser } = useSearchUser();
  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  const collection_posts = ["/img1.png", "/img2.png", "/img3.png"];

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

  const observerTarget = useRef(null);
  const [lastID, setLastID] = useState(data.lastID);
  const navigate = useNavigate();

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
    <Container maxW="container.xl" py={5}>
      <Box pb={10}>
        <Container maxW={"container.xl"}>
          <Button
            my={5}
            color={"black"}
            leftIcon={<FaArrowLeft />}
            variant="link"
            onClick={() => navigate(-1)} // use navigate instead of history
          >
            Go back
          </Button>
        </Container>
        <Flex align="center" justify="center">
          <CollectionHeader />
        </Flex>
      </Box>
      <Container mb={20} maxW={"container.xl"}>
        <SearchBar />
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
