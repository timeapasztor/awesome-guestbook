import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#ef5742",
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
