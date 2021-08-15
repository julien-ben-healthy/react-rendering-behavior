import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Tabs from "./Tabs";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Tabs />
  </StrictMode>,
  rootElement
);
