import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const CollectionCard = () => {
  // Массив картинок с возможностью отсутствия одного из изображений
  const images = [image1, image2, image3, null];
  const collectionName = "My Awesome Collection"; // Название коллекции
  const itemCount = images.length; // Количество товаров в коллекции
  const collectionUrl = "/collection"; // URL для перехода

  return (
    <LinkBox as="article" maxW="250">
      {" "}
      {/* Уменьшил максимальную ширину карточки */}
      <Card>
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={1}
        >
          {images.map((img, idx) => (
            <GridItem key={idx} colSpan={1} rowSpan={1}>
              {img ? (
                <Box aspectRatio={1}>
                  <Image
                    objectFit="cover"
                    src={img}
                    alt={`Image ${idx + 1}`}
                    w="100%"
                    h="100%"
                  />
                </Box>
              ) : (
                <Box aspectRatio={1} bg="gray.200" />
              )}
            </GridItem>
          ))}
        </Grid>

        <CardBody>
          {/* Название коллекции, как кликабельная ссылка */}
          <Heading size="xs" textAlign="center">
            <LinkOverlay href={collectionUrl}>{collectionName}</LinkOverlay>
          </Heading>
        </CardBody>

        <CardFooter justify="center">
          <Text fontSize="xs" color="gray.500">
            {itemCount} items in collection
          </Text>
        </CardFooter>
      </Card>
    </LinkBox>
  );
};

export default CollectionCard;
