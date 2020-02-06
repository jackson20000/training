import React from 'react'

export default function Result(props) {
    const total = Object.values(props.result).reduce((a, b) => a + b, 0)
    console.log(props.result)
    return (
        <div>
            <h2 className="vote-head">Vote Result</h2>
            <div id="pollButtons">
                <ul>
                    <li style={{backgroundImage: `linear-gradient(90deg, #3398db ${(props.result.javascript/total)*100}%, transparent 0%)`}}>JavaScript - {props.result.javascript} votes</li>
                    <li style={{backgroundImage: `linear-gradient(90deg, #3398db ${(props.result.php/total)*100}%, transparent 0%)`}}>PHP - {props.result.php} votes</li>
                    <li style={{backgroundImage: `linear-gradient(90deg, #3398db ${(props.result.java/total)*100}%, transparent 0%)`}}>Java - {props.result.java} votes</li>
                    <li style={{backgroundImage: `linear-gradient(90deg, #3398db ${(props.result.go/total)*100}%, transparent 0%)`}}>GO- {props.result.go} votes</li>
                </ul>
            </div>
        </div>
    )
}
