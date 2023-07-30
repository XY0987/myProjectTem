import React from "react";
import { Pagination } from "antd";
import { myPagingProp } from "../type/components";

export default function MyPaging({
  total,
  onChangeFn,
  pageNo,
  pageSize,
}: myPagingProp) {
  return (
    <Pagination
      total={total}
      onChange={onChangeFn}
      current={pageNo}
      pageSize={pageSize}
      showSizeChanger
      showQuickJumper
      showTotal={(total) => `共 ${total} 条`}
    />
  );
}
