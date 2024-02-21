import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import styles from "./styles";
import Table from "./components/table";
import Button from "./components/button";
import Select from "./components/select";
import Card from "./components/card";
import Input from "./components/input";
import FormLabel from "./components/formLabel";
import Accordion from "./components/accordion";
import brand from "./foundations/brand";
import breakpoints from "./foundations/breakpoints";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};
const overrides = {
  styles: {
    ...styles,
  },
  colors: {
    brand,
  },

  components: {
    Table,
    Button,
    Select,
    Card,
    Input,
    FormLabel,
    Accordion,
  },
};

export default extendTheme(overrides, { config }, { breakpoints });
