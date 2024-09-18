import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
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
    <LinkBox
      as="article"
      maxW={["100%", "300px", "350px", "400px"]} // Responsive max width
      minW={["100%", "45%", "30%", "25%"]} // Responsive min width
      width={["100%", "auto"]} // Full width on small screens
    >
      <Card flexShrink={0} boxShadow="none" borderRadius="md">
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={1}
          borderRadius="md"
          overflow="hidden"
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
          <Heading
            size="xs"
            textAlign="center"
            fontSize={["sm", "md", "lg", "xl"]} // Responsive font sizes
          >
            <LinkOverlay href={collectionUrl}>{collectionName}</LinkOverlay>
          </Heading>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default CollectionCard;
