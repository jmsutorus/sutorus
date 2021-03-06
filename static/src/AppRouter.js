import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound.js";
import ProjectsHome from "./Projects/Projects/ProjectsHome.js";
import Calculator from "./Projects/Calculator/Calculator.js";
import Photos from "./Projects/Photos/Photos.js";
import Numbers from "./Projects/Numbers/Numbers.js";
import Nosedive from "./Projects/Nosedive/Nosedive.js";
import Todo from "./Projects/Todo/Todo.js";
import Home from "./Home.js";
import About from "./About.js";
import BlogHome from "./Blog/BlogHome.js";
import BlogPost from "./Blog/BlogPost.js";
import MusicPlayer from "./Projects/MusicPlayer/MusicPlayer.jsx";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={BlogHome} />
          <Route exact path="/blog/post:postName" component={BlogPost} />
          <Route exact path="/projects" component={ProjectsHome} />
          <Route exact path="/projects/calculator" component={Calculator} />
          <Route exact path="/projects/photos" component={Photos} />
          <Route exact path="/projects/numbers" component={Numbers} />
          <Route exact path="/projects/nosedive" component={Nosedive} />
          <Route exact path="/projects/todo" component={Todo} />
          <Route exact path="/projects/player" component={MusicPlayer} />
          <Route path="/pagenotfound" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
