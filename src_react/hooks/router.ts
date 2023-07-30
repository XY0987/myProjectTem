import { useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router";
import { myRoutesConfig } from "../type/router";

function flatDeep(children: any, findArr: any): string {
  if (!children.map) {
    return children.title;
  }
  // 判断children数组中是否有想要的元素
  let tempArr = children.map((item: any) => item.path);
  let index = tempArr.indexOf(findArr[0]);
  if (index !== -1) {
    return findArr.length > 1
      ? flatDeep(children[index], findArr.splice(1, findArr.length))
      : children[index].title
      ? children[index].title
      : "直播自习平台";
  }
  return "直播自习平台";
}

// 自定义hook,用于为页面添加标题
export function useMyRoutes(routes: myRoutesConfig[]) {
  // 判断路由表中是否有对应路由，如果没有就返回到404
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // 判断是否是首页
    if (location.pathname === "/") {
      document.title = "直播自习平台";
      return;
    }
    // 非空
    const firstPathName = location.pathname
      .split("/")
      .filter((item) => item !== "");
    const firstPath = routes.map((item) => item.path?.split("/")[1]);
    console.log(firstPathName, routes);

    let index = firstPath.indexOf(firstPathName[0]);
    if (index === -1) {
      console.log(1111);
      navigate("/NotFountPage", { replace: true });
      return;
    }
    // 判断是几级路由
    if (firstPathName.length > 1) {
      // 多级
      document.title = flatDeep(
        routes[index].children,
        firstPathName.splice(1, firstPathName.length),
      );
      return;
    }
    // 一级
    document.title =
      routes[index] && routes[index].title
        ? (routes[index].title as string)
        : "直播自习平台";
  }, [location, navigate, routes]);
  return useRoutes(routes);
}
