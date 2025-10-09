import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <nav className='w-[75%] border-1 border-red-200'>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
