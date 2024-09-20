import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../ui/ProductCard";

const RelatedProductsGrid = ({ products }) => (
  <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
    {products.map((product, index) => (
      <GridItem key={index}>
        <ProductCard imageUrl={product.imageUrl} title={product.title} />
      </GridItem>
    ))}
  </Grid>
);

export default RelatedProductsGrid;
