import React from "react";
import styled from "@emotion/styled";
import { Button, Form, Input, message } from "antd";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login as loginStore } from "../../store/user";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  let token = "";
  function onFinish(values: any) {}

  function jumpToReg() {
    navigate("/register");
  }

  return (
    <Container>
      {contextHolder}
      <Background></Background>
      <Content>
        <Header>登录</Header>
        <Form
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
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
          <Toreg>
            <Button onClick={jumpToReg} type="link">
              还没有账号？注册
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
