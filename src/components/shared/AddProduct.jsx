import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import DragAndDrop from "../ui/DragAndDrop";

const CreateProduct = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/create/add/product");
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-xl font-semibold" htmlFor="description">
        From link
      </label>
      <div className="flex flex-row gap-3">
        <Input placeholder="https://" id="name" minW="auto" maxW="3000px" />
        <Button
          background={"black"}
          textColor={"white"}
          width={"30%"}
          onClick={handleAddProduct}
        >
          Add product
        </Button>
      </div>
      <label className="text-xl font-semibold" htmlFor="description">
        From price tag or photo
      </label>
      <DragAndDrop width="630px" height="250px" hideAddMore />
    </div>
  );
};

export default CreateProduct;
