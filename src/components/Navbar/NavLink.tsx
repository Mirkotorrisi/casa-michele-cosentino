import React, { ReactNode } from "react";

type Props = {
  link: string;
  children: ReactNode;
  className?: string;
};

const isBrowser = typeof window !== "undefined";

const NavLink = ({ link, children, className = "" }: Props) => {
  let isActive = false;
  if (isBrowser) {
    const route = window.location.pathname.replaceAll("/", "");
    const path = link.replace("/", "");
    isActive = route === path;
  }

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
