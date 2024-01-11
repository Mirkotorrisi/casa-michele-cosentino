import React, { ReactNode } from "react";

type Props = {
  link: string;
  children: ReactNode;
};

const isBrowser = typeof window !== "undefined";

const NavLink = ({ link, children }: Props) => {
  let isActive = false;
  if (isBrowser) {
    const route = window.location.pathname.replaceAll("/", "");
    const path = link.replace("/", "");
    isActive = route === path;
  }

  return (
    <a href={link} className={isActive ? " " : "inactive"} id={link}>
      {children}
    </a>
  );
};

export default NavLink;
