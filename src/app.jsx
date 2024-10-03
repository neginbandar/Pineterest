import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import regions from "../../pineterest-server-main/data/forestry-facts.json";
import Form from "./components/Form/Form";

export function App() {
  // let [regionList , setRegionList] =useState([]);

  return (
    <>
      <Header></Header>
      {/* <Form></Form> */}
      <HomePage></HomePage>
    </>
  );
}
