import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import { App as CapacitorApp } from "@capacitor/app";

CapacitorApp.addListener("appUrlOpen", ({ url }) => {
  console.log("Deep link received:", url);

  if (url.startsWith("trackv2://oauth-callback")) {
    // Extract query params from the deep link
    const urlObj = new URL(url);
    const token = urlObj.searchParams.get("token");
    const registrationToken = urlObj.searchParams.get("registration_token");
    const email = urlObj.searchParams.get("email");
    
    // Store auth data for the app to process
    if (token) {
      localStorage.setItem("token", token);
    } else if (registrationToken) {
      sessionStorage.setItem("registrationToken", registrationToken);
      sessionStorage.setItem("registrationEmail", email);
    }
    
    // Navigate to app root - AuthContext will authenticate and redirect to /{role}/home
    window.location.href = "/";
  }
});

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
