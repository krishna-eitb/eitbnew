"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [subOpen, setSubOpen] = useState(null);
  const [menuData, setMenuData] = useState([]);

  const toggleSubMenu = (menu) => {
    setSubOpen(subOpen === menu ? null : menu);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://671f5b4d8cd82e000864d01c--cosmic-cassata-a69971.netlify.app/header");
        const data = await res.json();
        setMenuData(data);
      } catch (error) {
        console.error("Failed to fetch header data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="navbar-container container mx-auto flex justify-between items-center m-5">
      {/* Logo */}
      <div className="nav-logo">
        <Image src={menuData.logo || "/eitblogo.png"} alt="Eitb Logo" height={34} width={258} priority />
      </div>

      {/* Menu */}
      <nav className="nav-menu">
        <ul className="flex gap-10 items-center">
          {menuData.menuItems?.map((menuItem, index) => (
            <li key={index} className="relative">
              <a
                className="flex items-center gap-2"
                onMouseEnter={() => toggleSubMenu(menuItem.title)}
                onMouseLeave={() => toggleSubMenu(null)}
              >
                {menuItem.title}
                {menuItem.subMenu && (
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path
                      d="M10.4753 6.11719L6.10034 10.4922L1.72534 6.11719"
                      stroke="#6B6B6B"
                      strokeOpacity="0.9"
                      strokeWidth="1.3125"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
              {subOpen === menuItem.title && menuItem.subMenu && (
                <ul className="absolute">
                  {menuItem.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a>{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Search Icon and Contact Button */}
      <div className="nav-btn flex gap-5 items-center">
        <div className="nav-search">
          <Image src={menuData.searchIcon || "/default-search-icon.svg"} alt="Search Icon" width={21} height={20} />
        </div>
        <div className="nav-contactbtn">
          <button className="flex items-center gap-2 bg-primary-100 text-white-100 font-body p-2 rounded-3xl">
            {menuData.contactButton?.text || "LET'S TALK"}
            <Image src={menuData.contactButton?.icon || "/default-icon.svg"} alt="Icon" width={19} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
