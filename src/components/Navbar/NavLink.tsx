import React, { ReactNode } from "react";

type Props = {
  link: string;
  children: ReactNode;
  currentPage: string;
  className?: string;
};

const NavLink = ({ link, children, currentPage, className = "" }: Props) => {
  const isHomeActive = currentPage === "home" && link === "/";
  const isActive = isHomeActive || link.includes(currentPage);

  return (
    <a
      href={link}
      className={`${className} ${isActive ? "" : "inactive"}`}
      id={link}
    >
      {children}
    </a>
  );
};

export default NavLink;
