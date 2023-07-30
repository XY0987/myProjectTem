// 引入路由
import { Navigate } from "react-router";
import { myRoutesConfig } from "../type/router";
import Login from "../pages/noPower/login";
import Register from "../pages/noPower/register";
import NotFountPage from "../pages/error/NotFountPage";
import Home from "../pages/noPower";

export const noPowerRoutes: myRoutesConfig[] = (function () {
  // 判断值来修改login路由表的值和register的值
  let login = {
    path: "/login",
    element: <Login></Login>,
    title: "登录",
  };
  let register = {
    path: "/register",
    element: <Register></Register>,
    title: "注册",
  };
  // 判断值类型以此来确定是否需要重定向
  if (localStorage.getItem("token")) {
    login = {
      path: "/login",
      element: <Navigate to={"/"} replace></Navigate>,
      title: "登录",
    };
    register = {
      path: "/register",
      element: <Navigate to={"/"} replace></Navigate>,
      title: "注册",
    };
  }
  return [
    {
      path: "/",
      element: <Home></Home>,
      title: "首页",
    },
    {
      path: "/NotFountPage",
      element: <NotFountPage></NotFountPage>,
      title: "404",
    },
    login,
    register,
  ];
})();

const routes = [
  ...noPowerRoutes,
  {
    path: "*",
    // 重新进入登录页面,并在的登录页面完成刷新页面后state数据的更新
    element: <Navigate to={"/login"} replace></Navigate>,
  },
];

export default routes;
