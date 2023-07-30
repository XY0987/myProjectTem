import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, Form, Input, message } from "antd";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import { useNavigate } from "react-router";
import { useCountDown } from "../../hooks/utils";

export default function Register() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  // useLogged();
  const onFinish = (values: any) => {
    delete values.cpassword;
  };
  const navigate = useNavigate();
  function jumpToReg() {
    navigate("/login");
  }
  const emailReg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { start, count, isdisable } = useCountDown(
    60,
    () => {
      setCodeMessage(`${count}s后重新获取`);
    },
    () => {
      setCodeMessage("获取验证码");
    },
  );

  // 获取验证码
  const [codeMessage, setCodeMessage] = useState("获取验证码");
  function getCode() {
    const { email } = form.getFieldsValue();
    if (emailReg.test(email)) {
      messageApi.open({
        type: "success",
        content: "已发送",
      });
      start();
    } else {
      form.setFields([{ name: "email", errors: ["请输入正确的邮箱格式"] }]);
    }
  }

  return (
    <Container>
      {contextHolder}
      <Background></Background>
      <Content>
        <Header>注册</Header>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          style={{ minWidth: 400 }}
          onFinish={onFinish}
          autoComplete="off"
          size="large"
        >
          <Form.Item
            label="邮箱"
            name="email"
            rules={[
              { required: true, message: "请输入邮箱" },
              {
                pattern: emailReg,
                message: "请输入正确的邮箱格式",
              },
            ]}
          >
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: "请输入密码!" },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/,
                message: "请输入正确密码格式",
              },
            ]}
          >
            <Input.Password placeholder="6-10位包含数字和字母,不能包含空格" />
          </Form.Item>
          {/* 确认密码 */}
          <Form.Item
            label="确认密码"
            name="cpassword"
            rules={[
              { required: true, message: "请重复输入密码!" },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/,
                message: "请输入正确密码格式",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("请重复输入密码!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="请重复输入密码" />
          </Form.Item>
          <Form.Item
            label="验证码"
            name="code"
            rules={[
              { required: true, message: "请输入验证码" },
              {
                pattern: /^\d{6}$/,
                message: "请输入6位验证码",
              },
            ]}
          >
            <CodeBox>
              <Input placeholder="请输入验证码"></Input>
              <Button
                onClick={getCode}
                disabled={isdisable}
                style={{ marginLeft: "10px" }}
              >
                {codeMessage}
              </Button>
            </CodeBox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
          <Toreg>
            <Button onClick={jumpToReg} type="link">
              已有账号？登录
            </Button>
          </Toreg>
        </Form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position:
    left bottom,
    right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;

const Content = styled.div`
  width: 500px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Header = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Toreg = styled.div`
  text-align: right;
`;

const CodeBox = styled.div`
  display: flex;
`;
