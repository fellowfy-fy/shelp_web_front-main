import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import CommentSection from "../components/ProductDetails/CommentSection";
import { Image, Box } from "@chakra-ui/react";

export default function ProductPage() {
  return (
    <div className="w-[900px] mx-auto mt-[85px]">
      <div className="text-[#F0304E]">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Username</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">ProductName</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-1 ">
          <img src="/img4.png" alt="Dan Abramov" className="rounded-xl" />
        </div>
        <div className="col-span-1">
          <ProductDetails />
          <CommentSection />
        </div>
      </div>
    </div>
  );
}
