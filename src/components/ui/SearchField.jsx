import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchField = ({ isMobile }) => {
  return (
    <InputGroup
      style={{
        width: isMobile ? "100%" : "419px",
        height: "50px",
        background: "#F9F9FB",
        border: "1px solid #C4C4C4",
        borderRadius: "8px",
        boxShadow: "none",
      }}
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="black" />
      </InputLeftElement>
      <Input
        placeholder="Search"
        fontSize={isMobile ? "16px" : "20px"}
        fontWeight="400"
        lineHeight="23px"
        color="black"
        _placeholder={{ color: "#000000" }}
        background="#F9F9FB"
        border="none"
        borderRadius="8px"
        _focus={{
          boxShadow: "none",
        }}
      />
    </InputGroup>
  );
};

export default SearchField;
