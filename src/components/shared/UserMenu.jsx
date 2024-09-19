// UserMenu.jsx
import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const UserMenu = () => {
  return (
    <Menu offset={[0, 15]}>
      <MenuButton
        as={Button}
        background={"transparent"}
        variant="solid"
        border={"1px"}
        borderColor={"black"}
        rounded={"full"}
        cursor={"pointer"}
        color={"black"}
        fontWeight={500}
        textDecoration={"none"}
        px={1}
        py={2}
        minW={0}
        _hover={{
          bg: "gray.200",
        }}
      >
        <Avatar
          size={"sm"}
          src={
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
        />
      </MenuButton>
      <MenuList
        boxShadow="3px 5px 15px rgba(0, 0, 0, 0.1)"
        borderRadius="xl"
        padding="4"
      >
        <MenuItem>
          <div className="flex gap-2 font-bold text-sm">
            <img src="/profileIcon.svg" alt="Profile Icon" width="20px" />
            Profile
          </div>
        </MenuItem>
        <MenuItem>
          <div className="flex gap-2 font-bold text-sm">
            <img src="/logoutIcon.svg" alt="Logout Icon" width="20px" />
            Logout
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
