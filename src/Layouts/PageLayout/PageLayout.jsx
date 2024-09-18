import { Box } from "@chakra-ui/react";
import PageHeader from "../../components/Navbar/PageHeader";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = ({ children }) => {
  return (
    <>
      <PageHeader />
      {/* "calc(100% - 240px)"*/}
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
