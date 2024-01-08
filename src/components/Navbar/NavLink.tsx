import React, { ReactNode } from "react";

type Props = {
  link: string;
  children: ReactNode;
};

const NavLink = ({ link, children }: Props) => {
  const route = window.location.pathname.replaceAll("/", "");
  const path = link.replace("/", "");
  const isActive = route === path;
  return (
    <a href={link} className={isActive ? " " : "inactive"} id={link}>
      {children}
    </a>
  );
};

export default NavLink;
