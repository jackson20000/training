import { Link, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import LoginContainer from './containers/login.container';
import React from 'react'
import VoteContainer from './containers/vote.container';
import ResultContainer from './containers/result.container'
import {NotificationContainer} from 'react-notifications';
import { Provider, connect } from "react-redux";
import LoginNav from './navigator/login'
import MainNav from './navigator/mainNav'


function App(props) {
  console.log(props)
  const CustomRoute = props.state.token ? MainNav : LoginNav;
  return (
    <CustomRoute></CustomRoute>
  );
}
const mapStateToprops = (state)=>{
  return {state: state.loginState}
}

export default connect(mapStateToprops)(App);
