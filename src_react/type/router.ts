import { NonIndexRouteObject } from "react-router";

export interface myRoutesConfig extends NonIndexRouteObject {
  title?: string;
  icon?: React.ReactNode;
}
