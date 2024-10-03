import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

export function App() {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
    </>
  );
}
