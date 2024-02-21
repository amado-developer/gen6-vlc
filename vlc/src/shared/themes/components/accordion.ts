import { StyleFunctionProps } from "@chakra-ui/react";

const accordion = {
  baseStyle: (props: StyleFunctionProps) => {
    const color: string = props.colorMode === "dark" ? "white" : "brand.800";
    return {
      button: {
        color,
      },
    };
  },
};

export default accordion;
