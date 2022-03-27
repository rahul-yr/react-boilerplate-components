import React from "react";
import PropTypes from "prop-types";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
const ResponsiveNavbar = (props) => {
  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
    { name: "Login", route: "/login" },
    { name: "Register", route: "/register" },
    { name: "Logout", route: "/logout" },
  ];

  return (
    <div>
      {/* mobile version */}
      <div className="md:hidden">
        <MobileNavbar links={links} />
      </div>
      {/* web version  */}
      <div className="hidden md:block">
        <DesktopNavbar links={links} />
      </div>
    </div>
  );
};

ResponsiveNavbar.propTypes = {};

export default ResponsiveNavbar;
