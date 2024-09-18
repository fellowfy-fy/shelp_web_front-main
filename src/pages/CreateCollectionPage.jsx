import {
  Input,
  Container,
  Textarea,
  Switch,
  Divider,
  Button,
} from "@chakra-ui/react";
import Editors from "../components/EditorsComponents/Editors";
import Tags from "../components/EditorsComponents/Tags";

const CreateCollection = () => {
  const editorsNames = [
    { name: "John Don", imageUrl: "/img1.png" },
    { name: "Jahn Don", imageUrl: "/img2.png" },
    { name: "Will Smith", imageUrl: "/img3.png" },
  ];
  const tagsArray = ["Art", "Music", "NFTs"];

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
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-semibold">Products in Post</h1>
                <Button
                  variant="outline"
                  borderColor="black"
                  color="black"
                  borderRadius="full"
                  size="sm"
                >
                  Add Product
                </Button>
              </div>
              <Divider />
              <h1>Card Place</h1>
              <Button
                bg="black"
                color="white"
                maxW="200px"
                _hover={{ bg: "blackAlpha.800" }}
              >
                Create collection
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CreateCollection;
