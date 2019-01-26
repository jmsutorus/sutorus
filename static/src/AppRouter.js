import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from "./App.js";
import PageNotFound from "./PageNotFound.js";
import ProjectsHome from "./Projects/Projects/ProjectsHome.js"

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/projects' component={ ProjectsHome } />
                    <Route path="/pagenotfound" component={ PageNotFound }/>
                </Switch>
            </Router>
        );
    }
};

export default AppRouter;
