import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Container,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
const Links = ["Home", "Discover", "Following", "Messages", "Create"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

const PageHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LogoImage = "/logo_b.png";
  return (
    <>
      <Center
        shadow="navBarShadow"
        borderBottom={"1px"}
        borderColor={"gainsboro"}
        h={{ xl: "70px", md: "70px" }}
        bg={useColorModeValue("white", "gray.900")}
      >
        <Container maxW={"container.xl"}>
          <Flex
            maxW={{ base: "container.xl" }}
            mx={2}
            width={"100%"}
            h={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack h={"100%"} spacing={8} alignItems={"center"}>
              <Box>
                <img
                  h={"60%"}
                  className="h-12 w-auto text-center sm:my-2"
                  src={LogoImage}
                  alt="Shelp"
                />
              </Box>
              <HStack
                h={"100%"}
                as={"nav"}
                gap={0}
                display={{ base: "none", sm: "flex" }}
              >
                <ChakraLink h={"100%"} as={ReactRouterLink} to="/">
                  <Button
                    layerStyle={"navButton"}
                    textStyle={"navButton"}
                    variant="solid"
                    h={"100%"}
                    borderRadius={0}
                    background={"transparent"}
                  >
                    <Stack
                      alignItems={"center"}
                      gap={1}
                      direction={{ base: "column", md: "row" }}
                    >
                      {
                        <Box as="span">
                          <img
                            src="/homeIcon.svg"
                            alt="icon"
                            width="25px"
                            height="25px"
                          />
                        </Box>
                      }
                      <Box textStyle={"navButton"}>Home</Box>
                    </Stack>
                  </Button>
                </ChakraLink>
                <ChakraLink
                  h={"100%"}
                  layerStyle={"base"}
                  textStyle={"navButton"}
                  as={ReactRouterLink}
                  to="/discover"
                >
                  <Button
                    h={"100%"}
                    textStyle={"navButton"}
                    borderRadius={0}
                    background={"transparent"}
                  >
                    <Stack
                      alignItems={"center"}
                      align={"center"}
                      gap={1}
                      direction={{ base: "column", md: "row" }}
                    >
                      {
                        <Box as="span">
                          <img
                            src="/discoverIcon.svg"
                            alt="icon"
                            width="25px"
                            height="25px"
                          />
                        </Box>
                      }
                      <Box textStyle={"navButton"}>Discover</Box>
                    </Stack>
                  </Button>
                </ChakraLink>
                <ChakraLink
                  h={"100%"}
                  layerStyle={"base"}
                  textStyle={"navButton"}
                  as={ReactRouterLink}
                  to="/collected"
                >
                  <Button
                    textStyle={"navButton"}
                    variant="solid"
                    h={"100%"}
                    borderRadius={0}
                    background={"transparent"}
                  >
                    <Stack
                      alignItems={"center"}
                      gap={1}
                      direction={{ base: "column", md: "row" }}
                    >
                      {
                        <Box as="span">
                          <img
                            src="/collectedIcon.svg"
                            alt="icon"
                            width="25px"
                            height="25px"
                          />
                        </Box>
                      }
                      <Box textStyle={"navButton"}>Collected</Box>
                    </Stack>
                  </Button>
                </ChakraLink>
                <ChakraLink
                  h={"100%"}
                  layerStyle={"base"}
                  textStyle={"navButton"}
                  as={ReactRouterLink}
                  to="/collected"
                >
                  <Button
                    textStyle={"navButton"}
                    variant="solid"
                    h={"100%"}
                    borderRadius={0}
                    background={"transparent"}
                  >
                    <Stack
                      alignItems={"center"}
                      gap={1}
                      direction={{ base: "column", md: "row" }}
                    >
                      {
                        <Box as="span">
                          <img
                            src="/createIcon.svg"
                            alt="icon"
                            width="25px"
                            height="25px"
                          />
                        </Box>
                      }
                      <Box textStyle={"navButton"}>Create</Box>
                    </Stack>
                  </Button>
                </ChakraLink>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                bg="transparent"
                display={{ sm: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <IconButton
                background={"transparent"}
                variant="solid"
                rounded={"full"}
                color={"black"}
                aria-label="Done"
                fontSize="19px"
                icon={
                  <Box as="span">
                    <img
                      src="/chatIcon.svg"
                      alt="icon"
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
                aria-label="Done"
                fontSize="19px"
                icon={
                  <Box as="span">
                    <img
                      src="/notificationIcon.svg"
                      alt="icon"
                      width="40px"
                      height="40px"
                    />
                  </Box>
                }
              />
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
                      <img
                        src="/profileIcon.svg"
                        alt="Profile Icon"
                        width="20px"
                      />
                      Profile
                    </div>
                  </MenuItem>
                  <MenuItem>
                    <div className="flex gap-2 font-bold text-sm">
                      <img
                        src="/logoutIcon.svg"
                        alt="Logout Icon"
                        width="20px"
                      />
                      Logout
                    </div>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Center>
    </>
  );
};

export default PageHeader;
