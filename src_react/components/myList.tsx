import React from "react";
import { Button, Space, Table } from "antd";
import { MyListProp } from "../type/components";

const { Column } = Table;

export default function MyList({
  data,
  dataConfigObj,
  isLoading,
  operationConfig,
}: MyListProp) {
  return (
    <Table
      dataSource={data}
      pagination={false}
      bordered={true}
      loading={isLoading}
      rowKey="proId"
    >
      {dataConfigObj.map((item) => {
        return (
          <Column
            title={item.showInfo}
            dataIndex={item.showIndex}
            key={item.showIndex}
          />
        );
      })}
      <Column
        title="操作框"
        key="action"
        render={(_: any, record: any) => (
          <Space size="middle">
            {operationConfig.map((item, index) => {
              return (
                <Button
                  size="small"
                  danger={item.isDanger}
                  type="link"
                  onClick={() => item.callFn(record)}
                  key={index}
                >
                  {item.showInfo}
                </Button>
              );
            })}
          </Space>
        )}
      />
    </Table>
  );
}
