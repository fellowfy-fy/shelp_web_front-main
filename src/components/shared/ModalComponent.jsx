// ModalComponent.js
import {
  Input,
  Flex,
  Avatar,
  Text,
  VStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LoadMoreButton from "../ui/LoadMoreButton";
import { FaShareAlt, FaTrashAlt } from "react-icons/fa";
import CustomModal from "./CustomModal";
import { useTranslation } from "react-i18next";

const ModalComponent = ({ isOpen, onClose, type, data = [] }) => {
  const { t } = useTranslation();
  const headers = {
    followers: "Followers",
    following: "Following",
    products: "Products",
    editors: "Editors",
    more: "Additional",
  };

  // Состояние и логика
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage = 20;

  useEffect(() => {
    if (isOpen && type !== "more") {
      setVisibleData(data.slice(0, usersPerPage));
      setCurrentPage(1);
    }
  }, [isOpen, data, type]);

  const filteredData = visibleData.filter((item) => {
    if (type === "products") {
      return item.productName?.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return item.username?.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  const loadMoreUsers = () => {
    const nextPage = currentPage + 1;
    const newVisibleData = data.slice(0, nextPage * usersPerPage);
    setVisibleData(newVisibleData);
    setCurrentPage(nextPage);
  };

  // Функция для генерации контента
  const renderContent = () => {
    if (type === "more") {
      return (
        <VStack alignItems="stretch" spacing={4}>
          <Flex
            alignItems="center"
            justifyContent="center"
            width="100%"
            borderTop="1px solid #E2E8F0"
            pt="10px"
          >
            <Button
              variant="ghost"
              onClick={() => {
                /* Логика для Share */
              }}
            >
              <Flex alignItems="center">
                <FaShareAlt size="20px" />
                <Text ml={4} fontWeight="600" fontSize={20}>
                  {t("share")}
                </Text>
              </Flex>
            </Button>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            width="100%"
            borderTop="1px solid #E2E8F0"
            padding="10px 0"
          >
            <Button
              variant="ghost"
              onClick={() => {
                /* Логика для Delete */
              }}
            >
              <Flex alignItems="center">
                <FaTrashAlt size="20px" />
                <Text ml={4} fontWeight="600" fontSize={20}>
                  {t("delete")}
                </Text>
              </Flex>
            </Button>
          </Flex>
        </VStack>
      );
    } else {
      return (
        <>
          {/* Поле поиска */}
          {(type === "followers" ||
            type === "following" ||
            type === "editors" ||
            type === "products") && (
            <Box px={6} mt={4}>
              <Input
                placeholder={`Search ${headers[type]}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Box>
          )}

          {/* Список элементов */}
          <VStack alignItems="stretch" spacing={4} mt={4}>
            {filteredData.map((item, index) => (
              <Flex
                key={index}
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Flex alignItems="center">
                  {type === "products" ? (
                    <Box
                      height="50px"
                      width="50px"
                      background="gray.200"
                      borderRadius="lg"
                    />
                  ) : (
                    <Avatar name={item.username} src={item.avatar} />
                  )}
                  <Box ml={4}>
                    <Text fontWeight="600">
                      {type === "products" ? item.productName : item.username}
                    </Text>
                    {type !== "products" && item.fullName && (
                      <Text fontSize="sm" color="gray.500">
                        {item.fullName}
                      </Text>
                    )}
                  </Box>
                </Flex>

                {/* Кнопки действий */}
                <Flex>
                  {type !== "products" && (
                    <Button
                      size="sm"
                      width="64px"
                      height="32px"
                      background={item.isFollowing ? "#000000" : "transparent"}
                      color={item.isFollowing ? "#FFFFFF" : "#000000"}
                      border="1px solid #1B1D28"
                      borderRadius="5px"
                      _hover={{
                        background: item.isFollowing ? "#1B1D28" : "black",
                        color: "#FFFFFF",
                      }}
                      onClick={() => {
                        // Логика подписки/отписки
                      }}
                    >
                      {item.isFollowing ? "Unfollow" : "Follow"}
                    </Button>
                  )}
                  <Button
                    size="sm"
                    ml={2}
                    background="transparent"
                    color="#FF0000"
                    onClick={() => {
                      // Логика удаления
                    }}
                  >
                    {t("remove")}
                  </Button>
                </Flex>
              </Flex>
            ))}
          </VStack>

          {/* Кнопка "Load More" */}
          {visibleData.length < data.length && (
            <Box mt={4} textAlign="center">
              <LoadMoreButton onClick={loadMoreUsers} />
            </Box>
          )}
        </>
      );
    }
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} header={headers[type]}>
      {renderContent()}
    </CustomModal>
  );
};

export default ModalComponent;
