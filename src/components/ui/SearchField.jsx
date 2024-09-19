// SearchInput.jsx
import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchField = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.500" />
      </InputLeftElement>
      <Input
        placeholder="Search"
        variant="outline"
        borderRadius="md"
        _placeholder={{ color: "black" }}
      />
    </InputGroup>
  );
};

export default SearchField;
