import React, { ReactNode, useContext } from "react";
// import { NavContext } from "../../context/NavContext";

type Props = {
  customActive?: boolean;
  link: string;
  children: ReactNode;
};

const NavLink = ({ customActive, link, children }: Props) => {
  // const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);
  // const handleClick = () => {
  //   setActiveNavLinkId(link);
  // };
  // const isActive = activeNavLinkId === link || customActive;
  return (
    <div className={`nav__item__block `}>
      <a
        href={link}
        className={`block nav__item p-0 py-6 lg:p-6 lg:inline-block 
        `}
        id={link}
      >
        {children}
      </a>
    </div>
  );
};

export default NavLink;
