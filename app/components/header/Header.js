"use client";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [subOpen, setSubOpen] = useState(null);

  const toggleSubMenu = (menu) => {
    setSubOpen(subOpen === menu ? null : menu);
  };

  return (
    <>
      <div
        className="navbar-container container mx-auto flex justify-between items-center m-5
      "
      >
        {/* logo */}
        <div className="nav-logo">
          <Image src="/eitblogo.png" alt="Eitb Logo" height={34} width={258} priority/>
        </div>
        {/* menu */}
        <nav className="nav-menu ">
          <ul className="flex gap-10 items-center">
            {/* submenu li 1 */}
            <li className="relative">
              <a className="flex items-center gap-2">
                ABOUT
                <span
                  onMouseEnter={() => toggleSubMenu("about")}
                  onMouseLeave={() => toggleSubMenu("null")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_20035_11826)">
                      <path
                        d="M10.4753 6.11719L6.10034 10.4922L1.72534 6.11719"
                        stroke="#6B6B6B"
                        stroke-opacity="0.9"
                        stroke-width="1.3125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20035_11826">
                        <rect
                          width="10.5"
                          height="14"
                          fill="white"
                          transform="translate(0.850342)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
              {subOpen === "about" && (
                <ul className="absolute">
                  <li>
                    <a>PROUD SPONSERS</a>
                  </li>
                  <li>
                    <a>PARTNERS</a>
                  </li>
                </ul>
              )}
            </li>
            {/* sub menu li 1 */}
            {/* submenu li 2 */}
            <li className="relative">
              <a className="flex items-center gap-2">
                SERVICES
                <span
                  onMouseEnter={() => toggleSubMenu("services")}
                  onMouseLeave={() => toggleSubMenu("null")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_20035_11826)">
                      <path
                        d="M10.4753 6.11719L6.10034 10.4922L1.72534 6.11719"
                        stroke="#6B6B6B"
                        stroke-opacity="0.9"
                        stroke-width="1.3125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_20035_11826">
                        <rect
                          width="10.5"
                          height="14"
                          fill="white"
                          transform="translate(0.850342)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
              {subOpen === "services" && (
                <ul className="absolute">
                  <li>
                    <a>PROUD SPONSERS</a>
                  </li>
                  <li>
                    <a>PARTNERS</a>
                  </li>
                </ul>
              )}
            </li>
            {/* sub menu li 2 */}
            <li>
              <a>OUR WORK</a>
            </li>
            <li>
              <a>TOOL BOX</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
          </ul>
        </nav>
        {/* search icon and button */}
        <div className="nav-btn flex gap-5 items-center">
          <div className="nav-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <g clip-path="url(#clip0_20035_11856)">
                <path
                  d="M9.33789 14.8027C12.6516 14.8027 15.3379 12.1164 15.3379 8.80273C15.3379 5.48903 12.6516 2.80273 9.33789 2.80273C6.02418 2.80273 3.33789 5.48903 3.33789 8.80273C3.33789 12.1164 6.02418 14.8027 9.33789 14.8027Z"
                  stroke="#3A3A3A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5801 13.0449L17.7373 17.2022"
                  stroke="#3A3A3A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_20035_11856">
                  <rect
                    width="19.2"
                    height="19.2"
                    fill="white"
                    transform="translate(0.938477 0.400391)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="nav-contactbtn">
            <button className=" flex items-center gap-2 bg-primary-100 text-white-100 font-body p-2 rounded-3xl">
              LET&#39;S TALK <span><svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 19 12" fill="none">
  <path d="M5.98193 10.9536L13.873 3.0625" stroke="white" stroke-width="1.47692" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M6.771 2.26562H14.6621V10.1567" stroke="white" stroke-width="1.47692" stroke-linecap="square" stroke-linejoin="round"/>
</svg></span>
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default Header;
