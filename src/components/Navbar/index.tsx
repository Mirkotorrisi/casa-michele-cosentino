import React, { useState } from "react";
import "./index.scss";
import NavLink from "./NavLink";
import routes, { contactRoute } from "./routes";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [menuShow, setMenu] = useState(false);
  const showMenu = () => setMenu(!menuShow);

  return (
    <nav className={`flex items-center justify-between py-5 px-8`}>
      <StaticImage
        src="../../images/logo.jpg"
        alt="logo"
        className="w-[97px] h-16 shrink-0"
      />
      <div className="flex align-center justify-between lg:hidden">
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
      </div>

      <div className="hidden lg:flex gap-8">
        {routes.map((link) => (
          <NavLink link={link.href} key={link.label}>
            {link.label}
          </NavLink>
        ))}
      </div>
      <a className="button-solid hidden lg:block" href={contactRoute.href}>
        <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
          {contactRoute.label}
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
