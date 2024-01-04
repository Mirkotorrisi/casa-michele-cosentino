import React, { ReactNode } from "react";

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
    <div className="">
      <a href={link} className="block" id={link}>
        {children}
      </a>
    </div>
  );
};

export default NavLink;
