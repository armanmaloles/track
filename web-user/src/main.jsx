import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { App as CapacitorApp } from "@capacitor/app";

CapacitorApp.addListener("appUrlOpen", ({ url }) => {
  console.log("Deep link received:", url);

  if (url.startsWith("trackv2://oauth-callback")) {
    window.location.href = "/officials/home";
  }
});

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
