import {
  Input,
  Container,
  Textarea,
  Switch,
  Divider,
  Button,
} from "@chakra-ui/react";
import Editors from "../components/shared/Editors";
import Tags from "../components/shared/Tags";
import ProductsInCollection from "../components/shared/ProductsInCollection";

const CreateCollection = () => {
  const editorsNames = [
    { name: "John Don", imageUrl: "/img1.png" },
    { name: "Jahn Don", imageUrl: "/img2.png" },
    { name: "Will Smith", imageUrl: "/img3.png" },
  ];
  const tagsArray = ["Art", "Music", "NFTs"];
  const collectionPosts = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      title: "Underwater heaven",
      likesNum: 103,
      savesNum: 50,
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVg0JCFzD1T0R93AGYV_h2AiOWAlEJgCkew&usqp=CAU",
      title: "Underwater heaven",
      likesNum: 103,
      savesNum: 50,
    },
  ];

  return (
    <>
      <div className="mt-[64px]">
        <Container maxW="800px">
          <h1 className="font-bold text-3xl">New Collection</h1>
          <div className="flex flex-col gap-3 mt-6">
            <div>
              <label className="text-xl font-semibold" htmlFor="name">
                Collection name
              </label>
              <Input placeholder="Summer looks" id="name" />
            </div>
            <div>
              <label className="text-xl font-semibold" htmlFor="description">
                Description
              </label>
              <Textarea
                placeholder="Post tMy specialty lies in creating colorful creations, amazing designs, and high-quality website artworks that have the ext"
                id="description"
                resize="vertical"
              />
            </div>
            <Editors editors={editorsNames} />
            <Tags tags={tagsArray} />

            <div className="flex gap-3 my-3">
              <Switch colorScheme="gray" size="lg" />
              <p>Private Collection</p>
            </div>
            <ProductsInCollection collectionPosts={collectionPosts} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CreateCollection;
