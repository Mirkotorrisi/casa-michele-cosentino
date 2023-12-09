import React, { useContext, useState } from "react";
import "./index.scss";
import NavLink from "./NavLink";
// import { NavContext } from "../../context/NavContext";
import routes, { contactRoute } from "./routes";

type Props = {
  customActiveLink?: string;
};

const Navbar = ({ customActiveLink }: Props) => {
  const [menuShow, setMenu] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const showMenu = () => setMenu(!menuShow);
  // const { activeNavLinkId } = useContext(NavContext);

  return (
    <nav className={`navbar flex items-center justify-between w-full px-28`}>
      <div>LOGO</div>
      {/* <div className="flex align-center justify-between lg:hidden">
        <button aria-label="menu" className="mr-10 w-0" onClick={showMenu}>
          <div
            id="hamburger"
            className={"hamburglar " + (menuShow ? "is-open" : "is-closed")}
          >
            <div className="burger-icon">
              <div className="burger-container">
                <span className="burger-bun-top"></span>
                <span className="burger-filling"></span>
                <span className="burger-bun-bot"></span>
              </div>
            </div>

            <div className="path-burger">
              <div className="animate-path"></div>
            </div>
          </div>
        </button>
      </div> */}

      <div className={`flex gap-8`}>
        {routes.map((link) => (
          <NavLink link={link.href}>{link.label}</NavLink>
        ))}
      </div>
      <a
        className="w-28 h-10 px-5 py-2.5 bg-gray-900 rounded-md justify-center items-center inline-flex"
        href={contactRoute.href}
      >
        <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
          {contactRoute.label}
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
