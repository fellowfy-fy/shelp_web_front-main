import React from "react";
import { HStack, Link as ChakraLink, IconButton, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Buttons from "../ui/Buttons";

const HeaderButtons = ({ buttonOptions }) => {
  return (
    <HStack
      h={"100%"}
      as={"nav"}
      gap={0}
      display={{ base: "none", sm: "flex" }}
    >
      {buttonOptions.map(({ label, icon, to }) => (
        <ChakraLink
          key={label}
          h={"100%"}
          layerStyle={"base"}
          textStyle={"navButton"}
          as={ReactRouterLink}
          to={to}
        >
          <Buttons label={label} icon={icon} />
        </ChakraLink>
      ))}
      {/* Extra icons (e.g., chat and notifications) */}
      <IconButton
        background={"transparent"}
        variant="solid"
        rounded={"full"}
        color={"black"}
        aria-label="Chat"
        fontSize="19px"
        icon={
          <Box as="span">
            <img
              src="/chatIcon.svg"
              alt="chat icon"
              width="25px"
              height="25px"
            />
          </Box>
        }
      />
      <IconButton
        background={"transparent"}
        variant="solid"
        rounded={"full"}
        aria-label="Notifications"
        fontSize="19px"
        icon={
          <Box as="span">
            <img
              src="/notificationIcon.svg"
              alt="notification icon"
              width="40px"
              height="40px"
            />
          </Box>
        }
      />
    </HStack>
  );
};

export default HeaderButtons;
