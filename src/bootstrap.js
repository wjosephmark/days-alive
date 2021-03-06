import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter"

import App from "./components/app"

import "./style/main.scss";

const routes = {
  "/": () => <App />
}

function Main() {
  return(
    <div>
      {useRoutes(routes)}
    </div>
  )
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));