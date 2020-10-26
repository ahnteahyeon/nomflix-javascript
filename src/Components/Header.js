import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 72px;
  padding: 0px 50px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  background-color: #1f2023;
  display: flex;
  align-items: center;
  z-index: 100;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  padding: 10px 0px;
  &:not(:last-child) {
    margin-right: 50px;
  }
  text-align: center;
`;

const SLink = styled(Link)``;

export default () => (
  <Header>
    <List>
      <Item>
        <SLink to="/">Home</SLink>
      </Item>
      <Item>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
);
