import { StyleFunctionProps } from "@chakra-ui/react";

const tabs = {
  baseStyle: (props: StyleFunctionProps) => {
    const color: string = props.colorMode === "dark" ? "white" : "brand.800";
    return {
      tablist: {
        color,
      },
      tab: {
        _selected: {
          color: "brand.50",
          bg: "brand.500",
        },
        _hover: {
          color: "brand.50",
          bg: "brand.400",
        },
      },
    };
  },
};

export default tabs;
