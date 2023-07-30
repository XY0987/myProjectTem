import React, { useEffect, useRef, useState } from "react";
import { Button, Dropdown, MenuProps, Modal, Space } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router";
import styled from "@emotion/styled";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { logout } from "../store/user";
const { Content, Sider } = Layout;

const { confirm } = Modal;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(key: React.Key, item: any): MenuItem {
  let icon = item.icon;
  let label = item.title;
  return {
    key,
    icon,
    label,
  } as MenuItem;
}
export default function MyLayout(element: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutFn() {
    confirm({
      title: "确定要退出登录吗?",
      icon: <ExclamationCircleFilled />,
      content: "",
      onOk() {
        dispatch(logout());
        navigate("/");
      },
      onCancel() {},
    });
  }
  const itemsDrop: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button type="text" onClick={() => logoutFn()}>
          退出登录
        </Button>
      ),
    },
  ];
  const [items, setItems] = useState([]);
  useEffect(() => {
    let arr = [];
    arr = element.routes.map((item: any) => getItem(item.path, item));
    setItems(arr);
  }, [element.routes]);
  const onClick = (e: any) => {
    navigate(e.key);
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //   let info = useRef<any>(getUserInfo());

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[element.routes[0].path]}
          mode="inline"
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "0 16px",
            height: "100%",
            background: colorBgContainer,
          }}
        >
          <ContentTitle>
            <ContentTitleLeft>商家:商家名</ContentTitleLeft>
            <ContentTitleRight>
              <Dropdown menu={{ items: itemsDrop }}>
                <span>
                  <Space>
                    商家名
                    <DownOutlined />
                  </Space>
                </span>
              </Dropdown>
            </ContentTitleRight>
          </ContentTitle>
          <ContentTitleBlank></ContentTitleBlank>
          <div>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

const ContentTitle = styled.div`
  display: flex;
  padding: 20px;
  background-color: #ffffff;
`;
const ContentTitleLeft = styled.div`
  width: 50%;
  font-weight: bold;
`;

const ContentTitleRight = styled.div`
  width: 50%;
  text-align: right;
`;

const ContentTitleBlank = styled.div`
  height: 20px;
  background-color: #f5f5f5;
`;
