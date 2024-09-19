import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Buttons from "../ui/Buttons";
import SearchField from "../ui/SearchField";

const PostsProductsBar = () => {
  const [activeButton, setActiveButton] = useState("ideas");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Options for the buttons
  const buttonOptions = [
    { value: "Posts", icon: "/NewIcon.svg" },
    { value: "Products", icon: "/PopularIcon.svg" },
  ];

  return (
    <div className="flex justify-between mt-10">
      <Text
        className="font-assistant font-bold text-[16px] leading-[21px] text-[#1B1D28]"
        whiteSpace="nowrap"
      >
        Posts and Products
      </Text>
      <div className="flex gap-1">
        {buttonOptions.map(({ value, icon }) => (
          <Buttons
            key={value}
            value={value}
            icon={icon}
            isActive={activeButton === value.toLowerCase()}
            onClick={() => handleButtonClick(value.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsProductsBar;
