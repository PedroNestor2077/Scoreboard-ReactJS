import React from "react";
import "./Info.css"

export default class Info extends React.Component{
    render(){
        return(
            <div id="info-container">
                <p id="stadium">{this.props.local}</p>
                <p id="game-time">{this.props.game_time}</p>
            </div>
        );
    };
};