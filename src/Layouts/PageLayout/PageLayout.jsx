import { Box, Flex } from "@chakra-ui/react";
import PageHeader from "../../components/shared/PageHeader";
import Footer from "../../components/shared/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = ({ children }) => {
  return (
    <Flex
      direction="column"
      minHeight="100vh" // Контейнер занимает всю высоту окна
    >
      <PageHeader />
      <Box flex="1">
        {" "}
        {/* Контент занимает оставшееся пространство */}
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  );
};

export default PageLayout;
