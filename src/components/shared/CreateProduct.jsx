import { Button, Switch, FormControl, FormLabel, Flex } from "@chakra-ui/react";
import DragAndDrop from "../ui/DragAndDrop";
import DetailsProduct from "./DetailsProduct";
import GoBackButton from "../ui/GoBackButton";
import { useTranslation } from "react-i18next";

const CreateProduct = () => {
  const { t } = useTranslation();
  const tagsArray = ["Art", "Music", "NFTs"];
  const collectionPosts = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
      title: "Underwater heaven",
      likesNum: 103,
      savesNum: 50,
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVg0JCFzD1T0R93AGYV_h2AiOWAlEJgCkew&usqp=CAU",
      title: "Underwater heaven",
      likesNum: 103,
      savesNum: 50,
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-start gap-1">
        <GoBackButton />
        <label className="text-2xl font-semibold mb-2" htmlFor="name">
          {t("add-product")}
        </label>
      </div>

      <div className="flex flex-wrap gap-5">
        <DragAndDrop maxW="100%" maxH="300px" />{" "}
        {/* Теперь адаптируется под экран */}
        <DetailsProduct tags={tagsArray} posts={collectionPosts} />
      </div>
    </div>
  );
};

export default CreateProduct;
