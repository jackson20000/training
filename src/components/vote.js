import React from 'react'

export default function VoteComponent(props) {
    const vote = (data)=>{
        if(props.vote){
            props.vote(data);
        }
    }
    return (
        <div>
            <h2 className="vote-head">Vote Your Language!</h2>
            <div className="vote-form">
                <div style={{width: '650px'}}>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">{props.data.javascript}</span></div>
                        <div className="col-md-4"><span className="language">JavaScript</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn" onClick={()=>vote({javascript: props.data.javascript+1})}>Vote</button></div>
                    </div>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">{props.data.php}</span></div>
                        <div className="col-md-4"><span className="language">PHP</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn" onClick={()=>vote({php: props.data.php+1})}>Vote</button></div>
                    </div>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">{props.data.java}</span></div>
                        <div className="col-md-4"><span className="language">Java</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn" onClick={()=>vote({java: props.data.java+1})}>Vote</button></div>
                    </div>
                    <div className="row lang">
                        <div className="col-md-4 count-col"><span className="count">{props.data.go}</span></div>
                        <div className="col-md-4"><span className="language">Python</span></div>
                        <div className="col-md-4 count-col"><button className="vote-btn" onClick={()=>vote({go: props.data.go+1})}>Vote</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
