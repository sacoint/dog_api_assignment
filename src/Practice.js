import React from "react";
import heroImage from "./assets/time-is-money.jpg"
import "./Style.css"
function Practice() {
  return (
    <div>
      <section className="navbar">
        <div className="navbar-container">
          <h1>Chuks</h1>
          <div>
            <ul className="navbar-links">
             
            </ul>
          </div>
        </div>
      </section>
      <div className="image-container">
        <img src={heroImage} alt="hello"/>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      </div>
    </div>
  )
}
export default Practice;