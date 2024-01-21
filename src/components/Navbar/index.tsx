import React, { useEffect, useState } from "react";
import "./index.scss";
import NavLink from "./NavLink";
import routes, { contactRoute } from "./routes";
import { StaticImage } from "gatsby-plugin-image";
import { getSvgIcon } from "resources/getSvgIcon";
import FooterSocials from "components/Footer/FooterSocials";

type Props = {
  currentPage: string;
};

const Navbar = ({ currentPage }: Props) => {
  const [menuClass, setMenuClass] = useState<"" | "is-open" | "is-closed">("");
  const showMenu = () =>
    setMenuClass((prev) => (prev === "is-open" ? "is-closed" : "is-open"));
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (menuClass === "is-open") {
      window.document.body.classList.add("overflow-hidden");
    } else {
      window.document.body.classList.remove("overflow-hidden");
    }
  }, [menuClass]);
  return (
    <nav
      className={`fixed w-full z-50 bg-white flex flex-col ${
        menuClass === "is-open" ? `h-full` : ""
      }`}
    >
      <div className="flex items-center justify-between py-5 px-8">
        <a href="/">
          <StaticImage
            src="../../images/logo.jpg"
            alt="logo"
            className="w-[97px] h-16 shrink-0"
          />
        </a>
        <div className="flex align-center justify-between lg:hidden">
          <button aria-label="menu" className="mr-10 w-0" onClick={showMenu}>
            <div id="hamburger" className={"hamburglar " + menuClass}>
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
            <NavLink
              link={link.href}
              key={link.label}
              currentPage={currentPage}
            >
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
      {menuClass === "is-open" && (
        <div className="flex flex-col justify-between z-10 w-full h-full  lg:hidden">
          <div className="py-10 flex flex-col ">
            {routes.map((link) => (
              <div className="w-full py-3 px-6" key={link.label}>
                <NavLink
                  link={link.href}
                  className="!text-2xl"
                  currentPage={currentPage}
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
          <div className="px-6 ">
            <FooterSocials changeLayout />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
