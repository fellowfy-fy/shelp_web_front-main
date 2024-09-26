import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DragAndDrop from "../ui/DragAndDrop";
import { useTranslation } from "react-i18next";

const CreateProduct = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/create/add/product");
  };

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      {/* From link section */}
      <label className="text-xl font-semibold" htmlFor="description">
        {t("from-link")}
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          placeholder="https://"
          id="name"
          minW="auto"
          maxW={["100%", "3000px"]} // Responsive max width
          flex="1" // Flex-grow on smaller screens
        />
        <Button
          background="black"
          textColor="white"
          width={["100%", "30%"]} // 100% width on mobile, 30% on larger screens
          onClick={handleAddProduct}
        >
          {t("add-product")}
        </Button>
      </div>

      {/* From price tag or photo section */}
      <label className="text-xl font-semibold" htmlFor="description">
        {t("from-price-tag-or-photo")}
      </label>
      <DragAndDrop width="100%" height="250px" hideAddMore />
    </div>
  );
};

export default CreateProduct;
