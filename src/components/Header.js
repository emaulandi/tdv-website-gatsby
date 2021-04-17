import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Header = ({ onToggleMenu }) => {
  const { headerTitle, headerSubtitle } = useSiteMetadata();
  return ( 
    <header id="header" className="alt">
      <Link to="/" className="logo"><strong>{headerTitle}</strong> <span>{headerSubtitle}</span></Link>
      <nav>
        <a className="menu-link" onClick={onToggleMenu}>Menu</a>
      </nav>
    </header>
  );
}

export default Header
