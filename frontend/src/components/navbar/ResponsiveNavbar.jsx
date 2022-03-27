import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
const ResponsiveNavbar = (props) => {
  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Register", route: "/register" },
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

export default ResponsiveNavbar;
