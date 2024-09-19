import { Textarea, Input } from "@chakra-ui/react";

import Tags from "../components/CreateCollectionComponents/Tags";
import ProductsInCollection from "../components/CreateCollectionComponents/ProductsInCollection";

const DetailsPost = ({ tags, posts }) => {
  return (
    <div div className="flex flex-col gap-3 mt-6">
      <div>
        <label className="text-xl font-semibold" htmlFor="name">
          Post title
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
      <Tags tags={tags} />
      <ProductsInCollection collectionPosts={posts} />
    </div>
  );
};

export default DetailsPost;
