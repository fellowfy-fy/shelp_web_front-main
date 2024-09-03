import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const MyCollectionGrid = () => {
  return (
    <Grid
      h="250px"
      w="300px"
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(2, 1fr)"
      borderRadius="lg" // Apply the border radius here
      overflow="hidden" // This ensures that the images respect the border radius
    >
      <GridItem
        colSpan={2}
        rowSpan={4}
        bgImage={`url(${image1})`}
        bgSize="cover"
        bgPosition="center"
      />
      <GridItem
        colSpan={2}
        bgImage={`url(${image2})`}
        bgSize="cover"
        bgPosition="center"
      />
      <GridItem
        colSpan={2}
        bgImage={`url(${image3})`}
        bgSize="cover"
        bgPosition="center"
      />
    </Grid>
  );
};

export default MyCollectionGrid;
