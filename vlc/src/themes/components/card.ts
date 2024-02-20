import { StyleFunctionProps, border } from "@chakra-ui/react";

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
          padding: "20px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 40%",
        },
        body: {
          bg:
            props.colorMode === "dark"
              ? "rgba(108, 122, 137, 0.7)"
              : "rgba(255, 255, 255, 0.7)",
          borderRadius: "8px",
        },
      };
    },
  },
};

export default card;
