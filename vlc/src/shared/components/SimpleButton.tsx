import { Button, ResponsiveValue } from "@chakra-ui/react";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

type SimpleButtonProps = {
  variant: ResponsiveValue<string> | undefined;
  text: String;
  onClick?: () => void;
  icon?: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

const SimpleButton = ({ variant, text, icon, onClick }: SimpleButtonProps) => {
  return (
    <Button
      aria-label="button"
      variant={variant}
      onClick={onClick}
      leftIcon={icon}
      width="100%"
      p={6}
      h={50}
      mb={10}
      ml={4}
    >
      {text}
    </Button>
  );
};

export default SimpleButton;
