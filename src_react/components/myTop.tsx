import React from "react";
import { Button, Form, Input, Select, Space } from "antd";

export default function MyTop({ showModal }: { showModal: () => void }) {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <Space style={{ marginBottom: "20px" }}>
      <Form
        layout="inline"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="商品名" name="proName">
          <Input allowClear placeholder="请输入商品名" />
        </Form.Item>
        <Form.Item label="商品状态" name={"proStatus"}>
          <Select
            allowClear
            style={{ width: "150px" }}
            placeholder="请选择商品状态"
          >
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="商品类型" name="proType">
          <Select
            allowClear
            style={{ width: "150px" }}
            placeholder="请选择商品类型"
          >
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={showModal}>
        添加
      </Button>
    </Space>
  );
}
