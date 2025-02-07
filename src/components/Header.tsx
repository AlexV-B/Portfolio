import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";

const Header: React.FC = () => {
  const [glowStyle, setGlowStyle] = useState({
    left: 0,
    opacity: 0,
  });

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const parent = target.parentElement as HTMLElement;

    if (parent) {
      setGlowStyle({
        left: parent.offsetLeft + parent.offsetWidth / 2 - 50,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setGlowStyle({
      ...glowStyle,
      opacity: 0,
    });
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav className="nav-container">
        <div className="nav-wrapper">
          <div
            className="nav-glow"
            style={{
              left: `${glowStyle.left}px`,
              opacity: glowStyle.opacity,
            }}
          ></div>
          <ul className="nav-list">
            {["About", "Skills", "Projects", "Contacts"].map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
