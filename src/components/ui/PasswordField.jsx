import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  useDisclosure,
  useMergeRefs,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { HiEye, HiEyeOff, HiOutlineKey } from "react-icons/hi";
import { useTranslation } from "react-i18next";

export const PasswordField = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef < HTMLInputElement > null;

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };
  console.log({ ...props });

  return (
    <FormControl>
      <FormLabel htmlFor="password">{t("password")}</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<HiOutlineKey color="#53abe9" />}
        />
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          ref={mergeRef}
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          //value={props.inputs.password}
          onChange={(e) =>
            props.setInputs({ ...props.inputs, password: e.target.value })
          }
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
