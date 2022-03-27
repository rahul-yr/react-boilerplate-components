import React from "react";
import PropTypes from "prop-types";
import { NAVBAR_CONSTANTS } from "./constants";

const DesktopNavbar = (props) => {
  return (
    <div
      className={`p-2 flex flex-row justify-between justify-items-center items-center ${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} shadow-md`}
    >
      <div className="flex flex-row justify-start items-center justify-items-center">
        <img
          className="h-6 w-6 m-1 "
          src={NAVBAR_CONSTANTS.NAVBAR_LOGO_IMAGE_URL}
          alt="logo"
        />
        <p
          className={`mx-2 text-lg font-medium cursor-pointer ${NAVBAR_CONSTANTS.NAVBAR_LINK_COLOR}`}
        >
          {NAVBAR_CONSTANTS.APP_NAME}
        </p>
      </div>
      <div>
        {props.links.map((link, index) => {
          return (
            <a
              className={`text-base px-3 py-2 m-1 ${NAVBAR_CONSTANTS.NAVBAR_LINK_HOVER_PROPERTIES} ${NAVBAR_CONSTANTS.NAVBAR_LINK_COLOR}`}
              key={index}
              href={link.route}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

DesktopNavbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ),
};

export default DesktopNavbar;
