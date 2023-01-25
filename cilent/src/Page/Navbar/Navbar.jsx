import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <Link to={"/"} className="navbar_header">BF201</Link>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"add"}>Add</Link></li>
            </ul>
        </div>
    )
}

export default Navbar