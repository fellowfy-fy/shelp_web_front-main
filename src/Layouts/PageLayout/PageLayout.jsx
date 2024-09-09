import {
  Box,
  Flex,
  Spinner,
  chakra,
  useColorModeValue,
  VisuallyHidden,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/Navbar/PageHeader";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

// instead of adding the Sidebar component to every page, we can add it only once to the PageLayout component and wrap the children with it. This way, we can have a sidebar on every page except the AuthPage.

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = [null, false]; // useAuthState(auth);
  const pages_without_header = ["/login", "/signup"];
  const is_page_with_bar = !pages_without_header.some(
    (item) => pathname === item
  );
  const canRenderSidebar = is_page_with_bar && user;
  const canRenderNavbar = !user && !loading && is_page_with_bar;
  const history = useNavigate();
  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      <Box minH={"calc(100vh - 80px)"}>
        {/* sidebar on the left */}
        {canRenderSidebar ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>
        ) : null}
        {/* Navbar */}
        {canRenderNavbar ? <PageHeader /> : null}
        {/* the page content on the right */}
        <Box flex={1} w={{ base: "100%", md: "100%" }} mx={"auto"}>
          {/* "calc(100% - 240px)"*/}
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
