import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from "./App.js";
import PageNotFound from "./PageNotFound.js";
import ProjectsHome from "./Projects/Projects/ProjectsHome.js"
import Calculator from './Projects/Numbers/Calculator/Calculator.js';
import Photos from './Projects/Photos/Photos.js';

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
                    <Route exact path='/projects/calculator' component={ Calculator } />
                    <Route exact path='/projects/photos' component={ Photos } />
                    <Route path="/pagenotfound" component={ PageNotFound }/>
                </Switch>
            </Router>
        );
    }
};

export default AppRouter;
