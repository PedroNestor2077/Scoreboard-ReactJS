import React from "react"
import "./Scoreboard.css"

export default class Scoreboard extends React.Component{
    constructor(){
        super();
        this.state={
            score: 0
            }
    }
    addScore(){
        this.setState({
            score: this.state.score+1
        })
    }
    render(){
        /* scoreboard component */
        return(
            <div id="container">
                <div className="team-container">
                    <p className="name">{this.props.home}</p>
                    <div className="scoreboard-container">
                        <div className="name-score">
                            <p className="team-name">{this.props.team_name}</p>
                            <p className="team-score">{this.state.score}</p>
                        </div>{/* name-score */}
                        <button className='bt-goal' onClick={this.addScore.bind(this)}>Gol!</button>
                    </div>{/* scoreboard-container */}
                </div>{/* team-container */}

            </div>/* container */

        );
    };



};