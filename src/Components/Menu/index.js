import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
    display: "Regiter",
    icon: <AiFillPlusCircle />,
    to: "/Regiter",
    section: "started",
  },
  {
    display: "log out",
    icon: <AiFillSetting />,
    to: "/",
    section: "calendar",
  },
];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);

  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector("S.menuItem");
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <S.Sidebar>
      <S.Container ref={sidebarRef}>
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
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
