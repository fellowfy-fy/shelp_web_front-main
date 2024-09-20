import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchField = () => {
  return (
    <InputGroup
      style={{
        width: "419px",
        height: "50px",
        background: "#F9F9FB",
        border: "1px solid #C4C4C4",
        boxShadow: "inset 0px 4px 40px rgba(175, 193, 217, 0.12)",
        borderRadius: "8px",
      }}
    >
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="black" />
      </InputLeftElement>
      <Input
        placeholder="Search"
        fontSize="20px"
        fontWeight="400"
        lineHeight="23px"
        color="black"
        _placeholder={{ color: "#000000" }}
        background="#F9F9FB"
        borderRadius="8px"
      />
    </InputGroup>
  );
};

export default SearchField;
