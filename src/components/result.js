import React from 'react'

export default function ResultContainer() {
    return (
        <div>
            <h2 className="vote-head">Vote Result</h2>
            <div id="pollButtons">
                <ul>
                    <li style={{backgroundImage: 'linear-gradient(90deg, #3398db 80%, transparent 20%)'}}>JavaScript - 20 votes</li>
                    <li style={{backgroundImage: 'linear-gradient(90deg, #3398db 56%, transparent 20%)'}}>PHP - 20 votes</li>
                    <li style={{backgroundImage: 'linear-gradient(90deg, #3398db 53%, transparent 20%)'}}>Java - 20 votes</li>
                    <li style={{backgroundImage: 'linear-gradient(90deg, #3398db 18%, transparent 20%)'}}>Python- 20 votes</li>
                </ul>
            </div>
        </div>
    )
}
