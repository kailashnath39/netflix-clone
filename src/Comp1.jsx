import React from "react";
import netflixLogo from './assets/netflixLogo.png';
import netflixLogo2 from './assets/netflixLogo2.png';

function Comp1 () {
    return (
        <div id="comp1">
            <div id="header">
            
            <div id="imglanSign">
                <img src={netflixLogo} alt="NETFLIX" id="logo"></img>
                <div id="right-side">
                <select id="dropdown">
                        <option value="option1">English</option>
                        <option value="option2">Hindi</option>
                    </select>
                <button id="signin">SignIn</button>
                </div>
                
            </div>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <div id="matter">
                <h3 id="bold">Unlimited movies, TV shows and more</h3>
                <h5 className="medium">Watch anywhere. Cancel anytime.</h5>
                <h5 className="medium">Ready to watch? Enter your email to create or restart your membership.</h5>
            </div>
            <div className="xyz">
                <input type="text" id="email" placeholder="Email address"></input>
                <button id="getStarted">Get Started  &gt;</button>
            </div>
        </div>
    );
}

export default Comp1;