import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {NotificationContainer} from 'react-notifications';
import LoginContainer from '../containers/login.container';



export default function LoginNav() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path={'/'} component={LoginContainer}></Route>
                {/* <Route path={'/vote'} component={VoteContainer}></Route>
                <Route path={'/result'} component={ResultContainer}></Route> */}
                <NotificationContainer />
            </BrowserRouter>
        </div>
    )
}
