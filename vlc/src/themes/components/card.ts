import { StyleFunctionProps } from "@chakra-ui/react";

const card = {
  baseStyle: {
    container: {
      marginBottom: "4px",
    },
  },
  variants: {
    timeline: (props: StyleFunctionProps) => {
      const color: string = props.colorMode === "dark" ? "white" : "brand.800";
      const bg: string = props.colorMode === "dark" ? "#2c2c2c" : "brand.50";
      return {
        container: {
          bg,
          color,
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
          width: "100%",
        },
      };
    },
  },
};

export default card;
