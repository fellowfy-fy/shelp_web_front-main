// SearchBar.jsx
import React, { useState } from "react";
import { Image, Button } from "@chakra-ui/react";
import Buttons from "../ui/Buttons"; // Use your existing Buttons component
import SearchField from "../ui/SearchField";

const SearchBar = () => {
  const [activeButton, setActiveButton] = useState("ideas");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Options for the buttons
  const buttonOptions = [
    { value: "Ideas", icon: "/NewIcon.svg" },
    { value: "Products", icon: "/PopularIcon.svg" },
    { value: "Collections", icon: "/FollowedIcon.svg" },
  ];

  return (
    <div className="flex justify-between">
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
      <div className="flex gap-2">
        <Button
          variant="outline"
          colorScheme="gray"
          width="40px"
          height="40px"
          p={0}
        >
          <Image src="/configureIcon.svg" alt="Configure Icon" boxSize="20px" />
        </Button>
        <SearchField />
      </div>
    </div>
  );
};

export default SearchBar;
