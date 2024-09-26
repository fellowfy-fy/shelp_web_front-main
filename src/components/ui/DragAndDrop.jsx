import { useState, useRef, useEffect } from "react";
import { Box, Text, Icon, Image, Flex, IconButton } from "@chakra-ui/react";
import { FaFileUpload, FaPlus, FaTrash } from "react-icons/fa";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "../ui/SortableItem";
import { useTranslation } from "react-i18next";

const DragAndDrop = ({ hideAddMore = false }) => {
  const { t } = useTranslation();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [firstImageUrl, setFirstImageUrl] = useState(null);
  const nextIdRef = useRef(0);

  useEffect(() => {
    if (firstImageUrl) {
      URL.revokeObjectURL(firstImageUrl);
    }

    if (selectedFiles.length > 0) {
      const url = URL.createObjectURL(selectedFiles[0].file);
      setFirstImageUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setFirstImageUrl(null);
    }
  }, [selectedFiles]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).map((file) => ({
      id: nextIdRef.current++,
      file,
    }));
    if (selectedFiles.length + files.length > 5) {
      alert(t("only-five-photos"));
      return;
    }
    setSelectedFiles((prevFiles) => [...prevFiles, ...files].slice(0, 5));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      id: nextIdRef.current++,
      file,
    }));
    if (selectedFiles.length + files.length > 5) {
      alert(t("only-five-photos"));
      return;
    }
    setSelectedFiles((prevFiles) => [...prevFiles, ...files].slice(0, 5));
  };

  const handleDelete = (id) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((fileObj) => fileObj.id !== id)
    );
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setSelectedFiles((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  return (
    <Box className="space-y-4">
      {/* Drag and Drop Area */}
      <Box
        className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        bg="gray.50"
        position="relative"
        overflow="hidden"
        height="200px"
        width="100%"
      >
        <input
          type="file"
          onChange={handleFileChange}
          multiple
          style={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
        {selectedFiles.length > 0 && firstImageUrl ? (
          <>
            <Image
              src={firstImageUrl}
              alt="Selected file"
              objectFit="cover"
              width="100%"
              height="100%"
            />
            <IconButton
              icon={<FaTrash />}
              size="md"
              position="absolute"
              top="4px"
              right="4px"
              onClick={() => handleDelete(selectedFiles[0].id)}
              zIndex="1"
            />
          </>
        ) : (
          <Box
            className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg"
            width="100%"
            height="300px"
          >
            <Icon
              as={FaFileUpload}
              boxSize={["30px", "40px"]}
              color="gray.500"
            />
            <Text mt={2} fontSize={["sm", "md"]} color="gray.700">
              {t("choose-file-to-dnd")}
            </Text>
            <Text mt={1} fontSize="sm" color="gray.500" className="text-center">
              {t("dnd-message-one")}
              <br />
              {t("dnd-message-two")}
              <br />
              {t("dnd-message-three")}
            </Text>
          </Box>
        )}
      </Box>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={selectedFiles.map((fileObj) => fileObj.id)}
          strategy={horizontalListSortingStrategy}
        >
          <Flex
            className="space-x-2"
            flexWrap="wrap"
            justifyContent={["center", "flex-start"]}
          >
            {selectedFiles.map((fileObj) => (
              <SortableItem
                key={fileObj.id}
                id={fileObj.id}
                fileObj={fileObj}
                handleDelete={handleDelete}
              />
            ))}
            {!hideAddMore && selectedFiles.length < 5 && (
              <Box
                className="border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                w={["70px", "80px"]}
                h={["70px", "80px"]}
                onClick={() => {
                  document.querySelector('input[type="file"]').click();
                }}
              >
                <Icon as={FaPlus} color="gray.500" boxSize={["20px", "24px"]} />
              </Box>
            )}
          </Flex>
        </SortableContext>
      </DndContext>
    </Box>
  );
};

export default DragAndDrop;
