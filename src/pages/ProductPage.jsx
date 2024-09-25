import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import ProductDetails from "../components/shared/ProductDetails";
import CommentSection from "../components/shared/CommentSection";
import { useTranslation } from "react-i18next";

export default function ProductPage() {
  const { t } = useTranslation();
  return (
    <div className="w-[900px] mx-auto mt-[85px]">
      <div className="text-[#F0304E]">
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("header-home")}</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">{t("username")}</BreadcrumbLink>
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
