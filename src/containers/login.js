import React from 'react'
import Login from '../components/login'
import axios from 'axios'
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { loginRequest } from '../redux/action/login'

function LoginContainer(props) {
  const login = (params) => {
    axios.post('https://reqres.in/api/login', {
      email: params.username,
      password: params.password
    })
      .then(function (response) {
        props.dispatch(loginRequest({ type: 'LOGIN_REQUEST', payload: response.data.token }))
        console.log(response);
      })
      .catch(function (error) {
        NotificationManager.error('Login Failed', 'Username/password incorrect', 2000);
        console.log(error);
      });
  }
  return (
    <Login submit={login}></Login>
  )
}
const mapPropsToState = (state) => {
  return {
    state: state.loginState
  }
}
export default connect(mapPropsToState)(LoginContainer)