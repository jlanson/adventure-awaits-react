import React from "react";
import "./AdventureSection.css";
import { Button } from "./Button";
import "../App.css"

function AdventureSection() {
    return(
        <div className='hero-container'>
            <h1>ADVENTURE AWAITS</h1>
            <p>Join in now</p>
                <div className = "hero-btns">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        CLICK HERE!
                    </Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        CLICK HERE!
                    </Button>
                </div>
        </div>
    );
}

export default AdventureSection;