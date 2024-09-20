import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3 } from "react-icons/bs";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Опции для вкладок
  const tabOptions = [
    { value: "Posts", icon: BsGrid3X3 },
    { value: "Products", icon: BsBookmark },
  ];

  return (
    <Flex justifyContent="center" gap={{ base: 4, sm: 10 }}>
      {tabOptions.map(({ value, icon: Icon }) => (
        <Flex
          key={value}
          alignItems="center"
          p="3"
          gap={1}
          cursor="pointer"
          borderTop={
            activeTab === value ? "1px solid black" : "1px solid white"
          }
          onClick={() => handleTabClick(value)}
        >
          <Box fontSize={20}>
            <Icon />
          </Box>
          <Text fontSize={12} display={{ base: "none", sm: "block" }}>
            {value}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default ProfileTabs;
