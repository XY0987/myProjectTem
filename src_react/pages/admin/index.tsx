import React from "react";
import { adminChildren } from "../../router/admin";
import MyLayout from "../../components/layout";
export default function AdminLayout() {
  return <MyLayout routes={adminChildren}></MyLayout>;
}
