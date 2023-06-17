// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <div id="side-bar">
      <h3><span>Dev</span>challenges.io</h3>
      <nav>
        <ul>
          <li><Link className={activeLink === 'button' ? 'active nav-links' : 'nav-links'} to="/buttons" onClick={() => handleLinkClick('button')}>Buttons</Link></li>
          <li><Link className={activeLink === 'inputs' ? 'active nav-links' : 'nav-links'} to="/inputs" onClick={() => handleLinkClick('inputs')}>Inputs</Link></li>
          <li><Link className={activeLink === 'typography' ? 'active nav-links' : 'nav-links'} to="/typography" onClick={() => handleLinkClick('typography')}>Typography</Link></li>
          <li><Link className={activeLink === 'colors' ? 'active nav-links' : 'nav-links'} to="/colors" onClick={() => handleLinkClick('colors')}>Colors</Link></li>
          <li><Link className={activeLink === 'grid' ? 'active nav-links' : 'nav-links'} to="/grid" onClick={() => handleLinkClick('grid')}>Grid</Link></li>
          <li><Link className={activeLink === 'spaces' ? 'active nav-links' : 'nav-links'} to="/spaces" onClick={() => handleLinkClick('spaces')}>Spaces</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar