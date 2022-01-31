import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  AiFillEnvironment,
  AiFillPlusCircle,
  AiFillSetting,
} from "react-icons/ai";

import * as S from "./styles";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <AiFillEnvironment />,
    to: "/Home",
    section: "",
  },
  {
    display: "Register",
    icon: <AiFillPlusCircle />,
    to: "/Register",
    section: "register",
  },
  {
    display: "log out",
    icon: <AiFillSetting />,
    to: "/",
    section: "log out",
  },
];

const Menu = () => {
  const sidebarRef = useRef();
  const indicatorRef = useRef();

  return (
    <S.Sidebar>
      <S.Container ref={sidebarRef}>
        <div ref={indicatorRef}></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <S.MenuItem>
              <S.MenuItemIcon>{item.icon}</S.MenuItemIcon>
              <S.MenuItemText>{item.display}</S.MenuItemText>
            </S.MenuItem>
          </Link>
        ))}
      </S.Container>
    </S.Sidebar>
  );
};

export default Menu;
