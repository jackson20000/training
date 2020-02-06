import React from 'react'
import {Link} from 'react-router-dom'
import { loginRequest } from '../redux/action/login'

export default function NavbarHOC(Component) {

    return (
        (props) => {
            const Logout= ()=>{
                props.dispatch(loginRequest({ type: 'LOGIN_REQUEST', payload: '' }))
                props.history.push('/')
            }
            return (<>
                <nav id="main-menu">
                    <ul className="nav-bar">
                        <li className="nav-button-home"><Link to={'/'}>Vote</Link></li>
                        <li className="nav-button-services"><Link to={'/result'}>Result</Link></li>
                        <li className="nav-button-services"><span onClick={Logout}>Logout</span></li>
                    </ul>
                </nav>
                <Component {...props}/>
            </>)
        }
    )
}
