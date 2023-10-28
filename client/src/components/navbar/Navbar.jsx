import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"


const Navbar = () => {
    
    return (
        <>
         <div className="container">
            <div className="wrapper">
                {/* LEFT */}
                <div className="left">
                    <div className="menuItem">Travel</div>
                    <div className="menuItem">Holidays</div>
                    <div className="menuItem">Train</div>
                    <div className="menuItem">Journey</div>
                </div>
                
                {/* RIGHT */}
                <div className="right">
                    <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
                        <div className="menuItem">REGISTER</div>
                    </Link>
                        <div className="menuItem">LOGIN</div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Navbar;

