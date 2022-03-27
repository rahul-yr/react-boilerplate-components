import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NAVBAR_CONSTANTS } from "./constants";
import { Menu, Transition, Popover } from "@headlessui/react";
import {
  PencilAltIcon,
  PencilIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const DesktopNavbar = (props) => {
  const solutions = [
    {
      name: "Insights",
      description: "Measure actions your users take",
      href: "##",
      icon: PencilIcon,
    },
    {
      name: "Automations",
      description: "Create your own targeted content",
      href: "##",
      icon: PencilIcon,
    },
    {
      name: "Reports",
      description: "Keep track of your growth",
      href: "##",
      icon: PencilIcon,
    },
  ];

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
        {/* add pop over here */}
        <Popover className="relative inline-block">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span>Solutions</span>
                <ChevronDownIcon
                  className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="p-4 bg-gray-50">
                      <a
                        href="##"
                        className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-gray-900">
                            Documentation
                          </span>
                        </span>
                        <span className="block text-sm text-gray-500">
                          Start integrating products and tools
                        </span>
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        {/* popover ends here */}
        {/* add menu drop down here */}
        <Menu
          as="div"
          className={`relative inline-block text-base px-3 py-1 m-0 ${NAVBAR_CONSTANTS.NAVBAR_LINK_HOVER_PROPERTIES} ${NAVBAR_CONSTANTS.NAVBAR_LINK_COLOR}`}
        >
          <Menu.Button>Menu</Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? `${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} text-white`
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <PencilAltIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? `${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} text-white`
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <PencilAltIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? `${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} text-white`
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <PencilAltIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* add other links */}
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

        {/* add menu drop downs button */}
        <Menu
          as="div"
          className={`relative inline-block text-base px-3 py-1 m-0 ${NAVBAR_CONSTANTS.NAVBAR_LINK_HOVER_PROPERTIES} ${NAVBAR_CONSTANTS.NAVBAR_LINK_COLOR}`}
        >
          <Menu.Button>Menu</Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-56 mt-4 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? `${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} text-white`
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <PencilAltIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? `${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} text-white`
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <PencilAltIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? `${NAVBAR_CONSTANTS.NAVBAR_BACKGROUND_COLOR} text-white`
                          : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <PencilAltIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      ) : (
                        <PencilIcon
                          className="w-5 h-5 mr-2"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* drop down ends here */}

        {/* add pop over here */}

        {/* popover ends here */}
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
