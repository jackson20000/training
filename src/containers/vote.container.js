import React from 'react'
import VoteComponent from '../components/vote'
import { connect } from 'react-redux'
import { vote } from '../redux/action/vote'
import navbarHOC from '../components/navbarHOC'


function VoteContainer(props) {
    const castVote = (data) => {
        props.dispatch(vote(data))
    }

    return (
        <>
          <VoteComponent data={props.state} vote={castVote}/>  
        </>
    )
}

const mapStateToProps = state =>{
    return {
        state: state.voteState
    }
}

export default connect(mapStateToProps)(navbarHOC(VoteContainer))
