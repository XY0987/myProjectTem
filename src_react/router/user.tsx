import { Navigate } from "react-router";
import { noPowerRoutes } from "./noPower";
import UserLayout from "../pages/user";
import { myRoutesConfig } from "../type/router";
import { getRoutesObj } from "../utils/router";
// 引入路由
import UserInfo from "../pages/user/userInfo";

export const userChildren: myRoutesConfig[] = [
  {
    path: "userInfo",
    element: <UserInfo></UserInfo>,
    title: "个人信息",
  },
];

const primitiveObj = {
  path: "/user/*",
  element: <UserLayout></UserLayout>,
};

// 有拦截器版本
export const [userRoutes, defaultRoutes] = getRoutesObj(
  noPowerRoutes,
  primitiveObj,
  userChildren,
  {
    path: "*",
    element: <Navigate to="/user/userInfo" replace></Navigate>,
  },
);
