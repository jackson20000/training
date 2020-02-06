import React from 'react'
import Result from '../components/result'
import { connect } from 'react-redux'
import navbarHOC from '../components/navbarHOC'



function ResultContainer(props) {
    return (
        <Result result={props.state}/>
    )
}

const mapStateToProps = state=>{
    return {
        state: state.voteState
    }
}

export default connect(mapStateToProps)(navbarHOC(ResultContainer))