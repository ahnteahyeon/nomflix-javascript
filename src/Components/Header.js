import React from "react";
import { Link, withRouter } from "react-router-dom";
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
  border-bottom: 2px solid
    ${(props) => (props.current ? "rgba(255, 255, 255, 0.8)" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
