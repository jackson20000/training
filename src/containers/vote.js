import React from 'react'

export default function VoteContainer() {
    return (
        <>
            <h2 className="vote-head">Vote Your Language!</h2>
            <div className="vote-form">
                <div style={{width: '650px'}}>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">1</span></div>
                        <div className="col-md-4"><span className="language">JavaScript</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn">Vote</button></div>
                    </div>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">1</span></div>
                        <div className="col-md-4"><span className="language">PHP</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn">Vote</button></div>
                    </div>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">1</span></div>
                        <div className="col-md-4"><span className="language">Java</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn">Vote</button></div>
                    </div>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">1</span></div>
                        <div className="col-md-4"><span className="language">Python</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn">Vote</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
