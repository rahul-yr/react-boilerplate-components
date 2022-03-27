import React from "react";
import PropTypes from "prop-types";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import { NAVBAR_CONSTANTS } from "./constants";
import { Transition } from "@headlessui/react";

const MobileNavbar = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div
        className={` p-2 flex flex-row flex-wrap justify-between justify-items-center items-center ${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} shadow-md`}
      >
        <div className="flex flex-row justify-start items-center justify-items-center">
          <img
            className="h-6 w-6 m-1"
            src={NAVBAR_CONSTANTS.NAVBAR_LOGO_IMAGE_URL}
            alt="logo"
          />
          <p
            className={`mx-2 text-lg font-medium select-none cursor-pointer ${NAVBAR_CONSTANTS.NAVBAR_LINK_COLOR}`}
          >
            {NAVBAR_CONSTANTS.APP_NAME}
          </p>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="hover:rounded-full p-1.5 hover:bg-blue-700 cursor-pointer focus:rounded-full focus:bg-blue-700
          "
        >
          {open ? (
            <XIcon className="h-6 w-6 text-white" />
          ) : (
            <MenuAlt2Icon className="h-6 w-6 text-white" />
          )}
        </div>
      </div>
      <Transition
        className={`absolute w-full h-screen z-[50] overflow-y-auto ${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR}`}
        show={open}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-col flex-wrap text-center">
          {props.links.map((link, index) => {
            return (
              <a
                className={`text-sm px-3 py-2 m-1 ${NAVBAR_CONSTANTS.NAVBAR_LINK_HOVER_PROPERTIES} ${NAVBAR_CONSTANTS.NAVBAR_LINK_COLOR}`}
                key={index}
                href={link.route}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </Transition>
    </div>
  );
};

MobileNavbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    })
  ),
};

export default MobileNavbar;
