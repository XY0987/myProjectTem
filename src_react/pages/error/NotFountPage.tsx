import React from "react";

import styled from "@emotion/styled";

import notFoundBac from "../../assets/notFoundBac.jpg";
import { Button } from "antd";
import { useNavigate } from "react-router";

// 创建404组件，通过组合Styled组件来渲染页面
export default function NotFountPage() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Heading>404</Heading>
      <Image src={notFoundBac} alt="404" />
      <Text>Page not found</Text>
      <ButtonBox>
        <Button ghost onClick={back}>
          返回
        </Button>
      </ButtonBox>
    </Container>
  );
}

// 创建一个Styled组件，用于设置页面的整体布局和样式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

// 创建一个Styled组件，用于设置404文字的样式
const Heading = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin-bottom: 2rem;
  position: absolute;
  top: 200px;
`;

// 创建一个Styled组件，用于设置404图片的样式
const Image = styled.img`
  height: 100vh;
  background-attachment: fixed;
  width: 100%;
`;

// 创建一个Styled组件，用于设置404文字说明的样式
const Text = styled.p`
  font-size: 2.5rem;
  color: #fff;
  position: absolute;
  bottom: 200px;
`;
const ButtonBox = styled.div`
  position: absolute;
  bottom: 100px;
`;
