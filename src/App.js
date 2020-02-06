import './App.css';
import React from 'react'
import { connect } from "react-redux";
import LoginNav from './navigator/login'
import MainNav from './navigator/mainNav'


function App(props) {
  const CustomRoute = props.state.token ? MainNav : LoginNav;
  return (
    <CustomRoute></CustomRoute>
  );
}
const mapStateToprops = (state)=>{
  return {state: state.loginState}
}

export default connect(mapStateToprops)(App);
