import { Link, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import LoginContainer from './containers/login';
import React from 'react'
import VoteContainer from './containers/vote';
import ResultContainer from './components/result'
import {NotificationContainer} from 'react-notifications';
import { Provider, connect } from "react-redux";


function App(props) {
  // const CustomRoute = ;
  return (
    <BrowserRouter>
      <Route path={'/login'} component={LoginContainer}></Route>
      <Route exact path={'/'} component={LoginContainer}></Route>
      <Route path={'/vote'} component={VoteContainer}></Route>
      <Route path={'/result'} component={ResultContainer}></Route>
      <NotificationContainer/>
    </BrowserRouter>
  );
}
const mapStateToprops = (state)=>{
  return state
}

export default connect(mapStateToprops)(App);
