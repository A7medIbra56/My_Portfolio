"use client"
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";

interface MenuItem {
  to: string;
  icon: React.ReactNode;
  text: string;
}

export default function Header() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [inputName, setName] = useState<string>("Home");

  const handleItemClick = (itemIndex: number) => {
    setActiveItem(itemIndex);
  };

  useEffect(() => {
    // Call handleItemClick with the initial index (e.g., 0 for the first item)
    handleItemClick(0);
  }, []); // Empty dependency array means this will run once when the component is mounted

  const menuItems: MenuItem[] = [
    { to: "/home", icon: <IoHome />, text: "Home" },
    { to: "/about", icon: <IoPersonSharp />, text: "About Me" },
    { to: "/project", icon: <GrProjects />, text: "Project" },
    { to: "/mYSkills", icon: <GiSkills />, text: "MY Skills" },
    { to: "/contact", icon: <MdConnectWithoutContact />, text: "Contact" },
  ];

  return (
    <>
      <div className="navigation">
        <ul>
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`list ${index === activeItem ? "active" : ""}`}
            >
              <Link
                href={menuItem.to}
                onClick={() => {
                  handleItemClick(index);
                  setName(menuItems[index].text);
                }}
              >
                <span className="icon">
                  {menuItem.icon}
                </span>
                <span className="text">{menuItem.text}</span>
                <span className="circle"></span>
              </Link>
            </li>
          ))}
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
}
