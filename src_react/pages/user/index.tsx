import React from "react";
import { userChildren } from "../../router/user";
import MyLayout from "../../components/layout";

export default function UserLayout() {
  return <MyLayout routes={userChildren}></MyLayout>;
}
