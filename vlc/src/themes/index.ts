import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import styles from "./styles";
import Tabs from "./components/tabs";
import Table from "./components/table";
import Button from "./components/button";
import Select from "./components/select";
import Card from "./components/card";
import Input from "./components/input";
import FormLabel from "./components/formLabel";
import brand from "./foundations/brand";

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
    Tabs,
    Table,
    Button,
    Select,
    Card,
    Input,
    FormLabel,
  },
};

export default extendTheme(overrides, { config });
