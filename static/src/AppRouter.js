import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from "./App.js";
import Design from "./pages/Design.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects/Projects.js";
import Calculator from "./pages/Projects/Calculator/Calculator.js";
import Tictactoe from "./pages/Projects/Tictactoe/Tictactoe.js";
import Twofoureight from "./pages/Projects/Twofoureight/Twofoureight.js";
import PageNotFound from "./pages/PageNotFound.js";

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/design' component={ Design } />
                    <Route exact path='/about' component={ About } />
                    <Route exact path='/projects' component={ Projects } />
                    <Route exact path='/projects/calculator' component={ Calculator } />
                    <Route exact path='/projects/tictactoe' component={ Tictactoe } />
                    <Route exact path='/projects/twofoureight' component={ Twofoureight } />
                    <Route path="/pagenotfound" component={PageNotFound}/>
                </Switch>
            </Router>
        );
    }
};

export default AppRouter;
