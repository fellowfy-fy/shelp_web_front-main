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

const CollectionCard = () => {
  const image1 = "/image1.jpg";
  const image2 = "/image2.jpg";
  const image3 = "/image3.jpg";
  // Массив картинок с возможностью отсутствия одного из изображений
  const images = [image1, image2, image3, null];
  const collectionName = "My Awesome Collection"; // Название коллекции
  const itemCount = images.length; // Количество товаров в коллекции
  const collectionUrl = "/collection"; // URL для перехода

  return (
    <LinkBox
      as="article"
      maxW={["100%", "200px", "250px", "300px"]} // Smaller responsive max width
      minW={["100%", "40%", "20%", "15%"]} // Smaller responsive min width
      width={["100%", "auto"]} // Full width on small screens
    >
      <Card flexShrink={0} boxShadow="none" borderRadius="md">
        <Grid
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={0.5} // Smaller gap
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
        <CardBody p={2}>
          {" "}
          {/* Smaller padding */}
          {/* Название коллекции, как кликабельная ссылка */}
          <Heading
            size="xs"
            textAlign="center"
            fontSize={["xs", "sm", "sm"]} // Smaller responsive font sizes
          >
            <LinkOverlay href={collectionUrl}>{collectionName}</LinkOverlay>
          </Heading>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default CollectionCard;
