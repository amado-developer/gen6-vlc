import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./theme/index";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";

const link = from([new HttpLink({ uri: "http://localhost:8080/graphql" })]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
);
