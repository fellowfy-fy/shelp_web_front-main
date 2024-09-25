import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function CommentSection() {
  const { t } = useTranslation();
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              4 {t("comments")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <img
                src="/img1.png"
                alt="Profile Pic"
                className="rounded-full w-[40px] h-[40px] object-cover outline-offset-[2px] outline-[#E5E5E5] outline"
              />
              <div>
                <p>
                  <span className="font-bold">g</span> where do i get it?
                </p>
                <div className="flex gap-8 text-[#76777E]">
                  <p>7mo</p>
                  <p>Reply</p>
                  <img src="/heartGray.svg" alt="Heart Icon" />
                  <img
                    src="/hamburgerIconGray.svg"
                    alt="Hamburger Icon"
                    className="rotate-90"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src="/img1.png"
                alt="Profile Pic"
                className="rounded-full w-[40px] h-[40px] object-cover outline-offset-[2px] outline-[#E5E5E5] outline"
              />
              <div>
                <p>
                  <span className="font-bold">g</span> where do i get it?
                </p>
                <div className="flex gap-8 text-[#76777E]">
                  <p>7mo</p>
                  <p>Reply</p>
                  <img src="/heartGray.svg" alt="Heart Icon" />
                  <img
                    src="/hamburgerIconGray.svg"
                    alt="Hamburger Icon"
                    className="rotate-90"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src="/img1.png"
                alt="Profile Pic"
                className="rounded-full w-[40px] h-[40px] object-cover outline-offset-[2px] outline-[#E5E5E5] outline"
              />
              <div>
                <p>
                  <span className="font-bold">g</span> where do i get it?
                </p>
                <div className="flex gap-8 text-[#76777E]">
                  <p>7mo</p>
                  <p>Reply</p>
                  <img src="/heartGray.svg" alt="Heart Icon" />
                  <img
                    src="/hamburgerIconGray.svg"
                    alt="Hamburger Icon"
                    className="rotate-90"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <img
                src="/img1.png"
                alt="Profile Pic"
                className="rounded-full w-[40px] h-[40px] object-cover outline-offset-[2px] outline-[#E5E5E5] outline"
              />
              <div>
                <p>
                  <span className="font-bold">g</span> where do i get it?
                </p>
                <div className="flex gap-8 text-[#76777E]">
                  <p>7mo</p>
                  <p>Reply</p>
                  <img src="/heartGray.svg" alt="Heart Icon" />
                  <img
                    src="/hamburgerIconGray.svg"
                    alt="Hamburger Icon"
                    className="rotate-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
