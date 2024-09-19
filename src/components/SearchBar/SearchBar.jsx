import { useState } from "react";
import {
  Button,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [activeButton, setActiveButton] = useState("ideas");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <Button
          variant="solid"
          size="md"
          borderRadius="full"
          bg={activeButton === "ideas" ? "#EFEFEF" : "transparent"}
          _active={{ bg: "#EFEFEF" }}
          _focus={{ boxShadow: "none" }}
          onClick={() => handleButtonClick("ideas")}
          p={2}
        >
          <Image src="/NewIcon.svg" alt="New Icon" boxSize="20px" mr={2} />
          Ideas
        </Button>

        <Button
          variant="solid"
          size="md"
          borderRadius="full"
          bg={activeButton === "products" ? "#EFEFEF" : "transparent"}
          _active={{ bg: "#EFEFEF" }}
          _focus={{ boxShadow: "none" }}
          onClick={() => handleButtonClick("products")}
          p={2}
        >
          <Image
            src="/PopularIcon.svg"
            alt="Popular Icon"
            boxSize="20px"
            mr={2}
          />
          Products
        </Button>

        <Button
          variant="solid"
          size="md"
          borderRadius="full"
          bg={activeButton === "collections" ? "#EFEFEF" : "transparent"}
          _focus={{ boxShadow: "none" }}
          onClick={() => handleButtonClick("collections")}
          p={2}
        >
          <Image
            src="/FollowedIcon.svg"
            alt="Followed Icon"
            boxSize="20px"
            mr={2}
          />
          Collections
        </Button>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          colorScheme="gray"
          width="40px"
          height="40px"
          p={0}
        >
          <Image src="/configureIcon.svg" alt="Followed Icon" boxSize="20px" />
        </Button>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.500" />}
          />
          <Input
            placeholder="Search"
            variant="outline"
            borderRadius="md"
            _placeholder={{ color: "black" }}
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default SearchBar;
