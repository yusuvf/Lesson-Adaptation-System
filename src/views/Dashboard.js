import React from 'react';
import AcademicianEditPage from "./AcademicianEditPage";
import ApplicationReviewPage from "./ApplicationReviewPage";
import ApplicationListPage from "./ApplicationListPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as RouterLink
} from "react-router-dom";
import LessonEditPage from "./LessonEditPage";
import LessonPoolPage from "./LessonPoolPage";


export default function Dashboard() {

    return(
        <Router>
            <div>
            <Switch>
                <Route exact path="/dashboard">
                    <ApplicationListPage/>
                </Route>
                <Route path="/dashboard/basvuruincele">
                    <ApplicationReviewPage/>
                </Route>
                <Route path="/dashboard/akademisyenduzenle">
                    <AcademicianEditPage/>
                </Route>
                <Route path="/dashboard/dersduzenle">
                    <LessonEditPage/>
                </Route>
                <Route path="/dashboard/dershavuzu">
                    <LessonPoolPage/>
                </Route>
            </Switch>
            </div>
        </Router>
        )

}
