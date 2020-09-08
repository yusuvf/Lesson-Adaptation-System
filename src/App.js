import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SignIn from './views/SignIn'
import Dashboard from './views/Dashboard'
import Homepage from "./views/Homepage";
import Application from "./views/Application";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import ApplicationConfirmedPage from "./views/ApplicationConfirmedPage";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/application">
                    <Application/>
                </Route>
                <Route path="/signin">
                    <SignIn/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/applicationconfirmed">
                    <ApplicationConfirmedPage/>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
