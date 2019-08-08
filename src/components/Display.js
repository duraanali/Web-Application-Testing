import React from 'react'
import Dashboard from "./Dashboard";

export default function Display(props) {

    return (
        <div>
            <section className="scoreboard">
                <div className="topRow">
                    <div className="away">
                        <h2 className="ball">Balls</h2>
                        <div className="ball_score">{props.counts.ball}</div>
                    </div>
                    <div className="home">
                        <h2 className="strike">Strikes</h2>
                        <div className="strike_score">{props.counts.strike}</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
