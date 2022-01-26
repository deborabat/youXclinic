import styled from "styled-components";

export const Sidebar = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 40vh;
  background: #17202a;
`;

export const Container = styled.section`
  position: relative;
`;

export const MenuItem = styled.section`
  display: flex;
  align-items: center;
  place-content: flex-start;
  padding: 2rem 3rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  transition: color 0.3s ease-in-out;

  &.active {
    color: #900c3f;
  }
`;

export const MenuItemIcon = styled.section`
  margin-right: 1rem;
`;

export const MenuItemText = styled.section`
  margin-right: 1rem;
`;
