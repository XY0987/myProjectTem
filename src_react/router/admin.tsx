import { Navigate } from "react-router";
import { ApartmentOutlined } from "@ant-design/icons";

import { myRoutesConfig } from "../type/router";
import { getRoutesObj } from "../utils/router";
import { userRoutes } from "./user";
import UserManage from "../pages/admin/userManage";
import AdminLayout from "../pages/admin";
export const adminChildren: myRoutesConfig[] = [
  {
    path: "userManage",
    element: <UserManage></UserManage>,
    title: "用户管理",
    icon: <ApartmentOutlined />,
  },
];

const primitiveObj = {
  path: "/admin/*",
  element: <AdminLayout></AdminLayout>,
};

// 有拦截器版本
export const [adminRoutes, defaultRoutes] = getRoutesObj(
  userRoutes,
  primitiveObj,
  adminChildren,
  {
    path: "*",
    element: <Navigate to="/admin/userManage" replace></Navigate>,
  },
);
