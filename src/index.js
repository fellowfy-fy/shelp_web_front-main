import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { BrowserRouter } from "react-router-dom";

const styles = {
  colors: {
    brand: {
      bg: "#9747FF",
      card: "#0A99FF",
    },
  },
  global: (props) => ({
    fonts: {
      body: `'Nunito', sans-serif`,
    },
    body: {
      fontFamily: `'Lato', sans-serif`,
      bg: mode("white", "#f5f5f5")(props),
      color: mode("black", "whiteAlpha.900")(props),
    },
  }),
  semanticTokens: {
    colors: {
      text: {
        default: "purple.200",
        _dark: "red.200",
      },
      card: {
        default: "purple.900",
        _dark: "red.900",
      },
    },
    shadows: {
      card: {
        default: "lg",
        _dark: "none",
      },
    },
    radii: {
      card: {
        default: "sm",
        _dark: "lg",
      },
    },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles,
  layerStyles: {
    hoverSelected: {
      background: "pink.600",
      _hover: {
        background: "red.500",
      },
    },
    base: {
      color: "pink.100",
      _hover: {
        bg: "green.100",
        textDecor: "none",
      },
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
    postSocialButtons: {
      minW: "2",
    },
  },
  textStyles: {
    navButton: {
      fontSize: "15px",
      textTransform: "capitalize",
      fontWeight: "600",
    },
    collectionTitle: {
      fontSize: "2rem",
      lineHeight: "2rem",
    },
  },
  colors: {
    buttonColor: "#000",
    navButtonHoverBackgroundColor: "pink.800",
  },
  shadows: {
    navBarShadow: "0 10px 15px -3px #8080800d,0 4px 6px -4px #8080800d",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
