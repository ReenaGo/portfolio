import React from 'react';
import NavTabs from './AppRouting';

import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

export default function RoutingFromLanding() {
    return (
        <div>
            <div>
                <Link to="/app">Enter</Link>
            </div>

            <Switch>
            <Route path="/app">
                <NavTabs/>
            </Route>
            </Switch>  
        </div>
    )
}
