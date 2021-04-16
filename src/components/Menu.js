import React from 'react'
import { Link } from 'gatsby'

const Menu = ({ onToggleMenu }) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li><Link onClick={onToggleMenu} to="/">Home</Link></li>
        <li><Link onClick={onToggleMenu} to="/landing">Landing</Link></li>
        <li><Link onClick={onToggleMenu} to="/generic">Generic</Link></li>
        <li><Link onClick={onToggleMenu} to="/elements">Elements</Link></li>
      </ul>
      <ul className="actions vertical">
        <li><a href="#" className="button special fit">Get Started</a></li>
        <li><a href="#" className="button fit">Log In</a></li>
      </ul>
    </div>
    <a className="close" onClick={onToggleMenu} href="javascript:;">Close</a>
  </nav>
)

export default Menu
