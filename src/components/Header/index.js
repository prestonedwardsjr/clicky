import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div className="header">
            <div className="title">{props.children}</div>
            <div className="scores">
                Score:  {props.score} TOP Score: {props.topscores}
            </div>
        </div>
    )
}

export default Header;

//     <div className="header">
//     <h1>Clicky Game</h1>
//     <h1>You Guess correctly</h1>
//  </div>