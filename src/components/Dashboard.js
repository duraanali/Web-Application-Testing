import React, { useState } from 'react'

export default function Dashboard(props) {

    return (
        <div>
            <section className="buttons">
                <div className="homeButtons">
                    <button onClick={props.incrementBall} className="homeButtons__touchdown">Ball</button>
                    <button onClick={props.incrementStrike} className="homeButtons__fieldGoal">Strike</button>
                </div>
                <div className="awayButtons">
                    <button onClick={props.incrementFoul} className="awayButtons__touchdown">Foul</button>
                    <button onClick={props.incrementHit} className="awayButtons__fieldGoal">Hit</button>
                </div>
            </section>
        </div>
    )
}
