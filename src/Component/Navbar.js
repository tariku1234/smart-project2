import React from 'react'
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <div>
            <Link to="/">
                <h1> Smart Kebele</h1>
            </Link>

            <ul >

                <li>
                    <Link to={"/"} >Home</Link>
                </li>
                <li>
                    <Link to={"/blog"}>Blog</Link>
                </li>


                <li>
                    <Link to={"/documentGuidance"}>Document</Link>
                </li>
                <li>
                    <Link to={"/officeAvailability"}>Availability</Link>
                </li>
                <li>
                    <Link to={"/report"}>Report</Link>
                </li>
                <li>
                    <Link to={"/register"}>register</Link>
                </li>
                <li>
                    <Link to={"/login"}>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar