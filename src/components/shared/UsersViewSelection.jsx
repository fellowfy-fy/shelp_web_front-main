import React, { useState } from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import Buttons from "../ui/Buttons";

const NewIcon = "/NewIcon.svg";
const FollowedIcon = "/FollowedIcon.svg";
const PopularIcon = "/PopularIcon.svg";

const UsersViewSelection = ({ onChange }) => {
  const [activeButton, setActiveButton] = useState("New");

  const options = [
    { value: "New", icon: NewIcon },
    { value: "Popular", icon: PopularIcon },
    { value: "Followed", icon: FollowedIcon },
    { value: "For You", icon: FollowedIcon },
  ];

  const handleChange = (value) => {
    setActiveButton(value);
    if (onChange) {
      onChange(value); // Вызываем внешний обработчик, если он передан
    }
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "contentType",
    defaultValue: "New",
    onChange: handleChange, // Теперь при изменении вызывается handleChange
  });

  const group = getRootProps();

  return (
    <HStack {...group} spacing={4} direction="row" align="center" wrap="wrap">
      {options.map(({ value, icon }) => {
        const radio = getRadioProps({ value });
        return (
          <Buttons
            key={value}
            value={value}
            icon={icon}
            isActive={activeButton === value}
            onClick={() => handleChange(value)} // Обновляем состояние при клике
            {...radio}
          />
        );
      })}
    </HStack>
  );
};

export default UsersViewSelection;
