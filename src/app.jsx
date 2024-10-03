import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import HomePage from "./pages/HomePage/HomePage";

export function App() {
  return (
    <>
      <HomePage></HomePage>
    </>
  );
}
