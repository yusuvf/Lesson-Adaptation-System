import React from 'react';
import AcademicianEditPage from "./AcademicianEditPage";
import ApplicationReviewPage from "./ApplicationReviewPage";
import ApplicationListPage from "./ApplicationListPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";
import LessonEditPage from "./LessonEditPage";
import LessonPoolPage from "./LessonPoolPage";

let fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/signin",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}


function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    );
}


export default function Dashboard() {

    let history = useHistory();
    console.log(history.location.state)
    fakeAuth.isAuthenticated= history.location.state;

    return(
        <Router>
            <div>
            <Switch>
                <PrivateRoute exact path="/dashboard">
                    <ApplicationListPage/>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/basvuruincele">
                    <ApplicationReviewPage/>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/akademisyenduzenle">
                    <AcademicianEditPage/>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/dersduzenle">
                    <LessonEditPage/>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/dershavuzu">
                    <LessonPoolPage/>
                </PrivateRoute>
            </Switch>
            </div>
        </Router>
        )
}
