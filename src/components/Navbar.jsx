import React from 'react'
import { Link } from "react-router-dom"
import logo from "../img/logo.png"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=art">
                    <h6>ART</h6>
                </Link>
                    <Link className='link' to="/?cat=art">
                    <h6>SCIENCE</h6>
                </Link>
                    <Link className='link' to="/?cat=technology">
                    <h6>TECHNOLOGY</h6>
                </Link>
                    <Link className='link' to="/?cat=cinema">
                    <h6>CINEMA</h6>
                </Link>
                    <Link className='link' to="/?cat=design">
                    <h6>DESIGN</h6>
                </Link>
                    <Link className='link' to="/?cat=food">
                    <h6>FOOD</h6>
                </Link>
                <div className='nav'>
                <span>lambo</span>
                <span>logout</span>
                <span className="write">
                <Link className="link" to="/write">write</Link>
                </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
