import React, { useState } from "react";
import "./index.scss";
import NavLink from "./NavLink";
import routes, { contactRoute } from "./routes";
import { StaticImage } from "gatsby-plugin-image";
import { getSvgIcon } from "resources/getSvgIcon";
import FooterSocials from "components/Footer/FooterSocials";

const Navbar = () => {
  const [menuShow, setMenu] = useState(false);
  const showMenu = () => setMenu(!menuShow);

  return (
    <nav
      className={`fixed lg:static w-full  z-10 bg-white flex flex-col ${
        menuShow ? `h-full` : ""
      }`}
    >
      <div className="flex items-center justify-between py-5 px-8">
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

        {/* DESKTOP */}
        <div className="hidden lg:flex gap-8">
          {routes.map((link) => (
            <NavLink link={link.href} key={link.label}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <a className="button-solid hidden lg:block" href={contactRoute.href}>
          <div className="text-neutral-50 text-sm font-semibold leading-tight flex gap-3">
            {getSvgIcon("white-email")} {contactRoute.label}
          </div>
        </a>
      </div>
      {/* MOBILE */}
      {menuShow && (
        <div className="flex flex-col justify-between z-10 w-full h-full bg-white lg:hidden">
          <div className="py-10 flex flex-col ">
            {routes.map((link) => (
              <div className="w-full py-3 px-6">
                <NavLink
                  link={link.href}
                  key={link.label}
                  className="!text-2xl"
                >
                  {link.label}
                </NavLink>
              </div>
            ))}
            <div className="py-3 px-6 flex">
              <a className="button-solid " href={contactRoute.href}>
                <div className="text-neutral-50 text-sm font-semibold leading-tight flex gap-3">
                  {getSvgIcon("white-email")} {contactRoute.label}
                </div>
              </a>
            </div>
          </div>
          <FooterSocials changeLayout />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
