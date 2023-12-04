import React from "react";
import './DogNavbar.css';
import logo from "./assets/dogs1.png";


function DogNavbar() {
    return(
        <div className="navbar">
                
             <img className="logo" src={logo} />

             

                <ul className="navbar-link">
                    <li>Order Now</li>
                    <li>More Views</li>
                    <li>Contact Us</li>
                </ul>
            </div>
    )
}
export default DogNavbar;