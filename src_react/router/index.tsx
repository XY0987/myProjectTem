// 在这里进行判断用户权限使用不同的页面
import React, { Fragment } from "react";
import { Outlet } from "react-router";
import { useMyRoutes } from "../hooks/router";
import { adminRoutes } from "./admin";
import { userRoutes } from "./user";
import { noPowerRoutes } from "./noPower";
import { myRoutesConfig } from "../type/router";

export function NoPower() {
  const element = useMyRoutes(noPowerRoutes);
  return <Fragment>{element}</Fragment>;
}

export function User() {
  const element = useMyRoutes(userRoutes as myRoutesConfig[]);
  return (
    <Fragment>
      {element}
      <Outlet></Outlet>
    </Fragment>
  );
}

export function Admin() {
  const element = useMyRoutes(adminRoutes as myRoutesConfig[]);
  return <Fragment>{element}</Fragment>;
}
