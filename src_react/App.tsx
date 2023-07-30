import React, { Fragment } from "react";
import "./App.css";
import { User, Admin, NoPower } from "./router";

function App() {
  let power = localStorage.getItem("power");
  return (
    <Fragment>
      {power ? (
        power === "0" ? (
          // 注册用户路由
          <User></User>
        ) : (
          <Admin></Admin>
        )
      ) : (
        <NoPower></NoPower>
      )}
    </Fragment>
  );
}

export default App;
