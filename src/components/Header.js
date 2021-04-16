import React from 'react'
import { Link } from 'gatsby'

const Header = ({ onToggleMenu }) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>
        <nav>
            <a className="menu-link" onClick={onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

export default Header
