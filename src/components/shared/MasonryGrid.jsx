import React from "react";
import { Box } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ItemCard from "./ItemCard.jsx";

const MasonryGrid = ({ posts }) => {
  return (
    <Box width="100%" py={10}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          750: 2,
          900: 3,
          1200: 4,
        }}
      >
        <Masonry gutter="16px">
          {posts.map((post, index) => (
            <ItemCard
              key={index}
              imageUrl={post.imageUrl}
              title={post.title}
              publishDate={post.publishDate}
              likesNum={post.likesNum}
              savesNum={post.savesNum}
              author={post.author}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

export default MasonryGrid;
