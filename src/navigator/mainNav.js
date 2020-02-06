import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import {NotificationContainer} from 'react-notifications';
import voteContainer from '../containers/vote.container';
import resultContainer from '../containers/result.container';

export default function MainNav() {
    return (
        <div>
            <BrowserRouter>
                <Route exact path={'/'} component={voteContainer}></Route>
                <Route path={'/result'} component={resultContainer}></Route>
                <NotificationContainer />
            </BrowserRouter>
        </div>
    )
}
