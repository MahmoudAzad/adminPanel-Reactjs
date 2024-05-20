import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/global.scss";
import { LoginContextProvider } from "./components/context/LoginContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginContextProvider>
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);
