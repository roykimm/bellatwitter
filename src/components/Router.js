import  React, { useState } from 'react';
import { HashRouter as Router , Switch, Route } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

const AppRouter =  ({isLoggedIn}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ? 
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </> : <Route exact path="/">
                        <Auth/>
                      </Route>
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;