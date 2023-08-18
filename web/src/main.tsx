import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "substruct-ui";
import "substruct-ui/dist/css/styles.css";
import "./index.css";

// options={{
//   colors: {
//     primary: {
//       1: '#FFF9C3',
//       2: '#FFF389',
//       3: '#F8E430',
//       4: '#CBBB30',
//       5: '#A39731'
//     },
//     danger: {
//       3: '#FF0000'
//     }
//   }
// }}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme="default">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
