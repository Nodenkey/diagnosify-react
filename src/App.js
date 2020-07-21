import React from 'react';
import './App.css';
import ProtectedRoute from "./components/protected/ProtectedRoute";
import ScrollToTop from "./utils/scroll-to-top";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";
import { Suspense, lazy } from 'react';

import Loader from "./components/loader/loader.component";

const Home = lazy(() => import("./pages/homepage/homepage"));
const Welcome = lazy(() => import("./pages/welcome/welcome"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));


function App({isAuthenticated, isVerifying}) {
    return <>
    <Suspense fallback={<Loader/>}>
    <ScrollToTop/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path='/welcome' component={Welcome}/>
            <ProtectedRoute
                path="/dashboard"
                component={Dashboard}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
            />
        </Switch>
    </Suspense>
    </>

}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}

export default connect(mapStateToProps)(App);