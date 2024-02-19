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
      variant={variant}
      onClick={onClick}
      leftIcon={icon}
      width="100%"
      h={50}
      mb={10}
    >
      {text}
    </Button>
  );
};

export default SimpleButton;
