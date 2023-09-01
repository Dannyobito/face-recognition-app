import React from "react";
import Tilt from 'react-parallax-tilt';
import logo from "./logo.jpg";
import './Logo.css'


const Logo = () => {
    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            70,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return(
      <div className="p-12">
        <Tilt options={defaultOptions} style={{ width: 120,  height: 160 }}>
          <div className="Tilt-inner">
            <img className="shadow shadow-lg" alt="logo" src={logo}/>
          </div>
        </Tilt>
      </div>
    )
}

export default Logo;