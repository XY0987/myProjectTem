import { myRoutesConfig } from "../type/router";

/**
 *生成路由表配置（加拦截器）
 * @export
 * @param {myRoutesConfig[]} reuseObj 复用的数组对象
 * @param {myRoutesConfig} targetObj 目标对象
 * @param {myRoutesConfig[]} childrenObj 子级路由
 * @param {myRoutesConfig} globalinterceptorObj 全局拦截路由
 * @param {myRoutesConfig} interceptor 可选拦截器对象(添加子级路由中)
 */
export function getRoutesObj(
  reuseObj: myRoutesConfig[],
  targetObj: myRoutesConfig,
  childrenObj: myRoutesConfig[],
  interceptorObj?: myRoutesConfig,
) {
  //  先复制一份children
  const children = [...childrenObj];
  //   判断是否有值
  if (interceptorObj) {
    children.push(interceptorObj);
  }
  return [
    [
      ...reuseObj,
      {
        ...targetObj,
        children: children,
      },
    ],
    [
      ...reuseObj,
      {
        ...targetObj,
        children: [...childrenObj],
      },
    ],
  ];
}
