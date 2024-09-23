import React from "react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const SearchField = ({ isMobile }) => {
  const { t } = useTranslation();
  return (
    <InputGroup
      style={{
        width: isMobile ? "100%" : "419px",
        height: "40px",
        background: "#F9F9FB",
        border: "1px solid #C4C4C4",
        borderRadius: "8px",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      <InputLeftElement pointerEvents="none" height="100%">
        <SearchIcon color="black" />
      </InputLeftElement>
      <Input
        placeholder={t("search")}
        fontSize={isMobile ? "16px" : "20px"}
        fontWeight="400"
        lineHeight="23px"
        color="black"
        _placeholder={{ color: "#000000" }}
        background="#F9F9FB"
        border="none"
        borderRadius="8px"
        height="100%"
        _focus={{
          boxShadow: "none",
        }}
        paddingY="8px"
      />
    </InputGroup>
  );
};

export default SearchField;
