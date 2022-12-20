import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ModeContextProvider } from "./Context/FormContext";

import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { theme } from "./theme";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModeContextProvider>
      <MantineProvider
        theme={{ ...theme } as MantineThemeOverride}
        withGlobalStyles
        withNormalizeCSS
      >
        <Layout>
          <App />
        </Layout>
      </MantineProvider>
    </ModeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
