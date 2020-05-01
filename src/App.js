import React, {lazy, Suspense} from 'react';
import './App.css';
// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//importing pictures sorry for the long list
//import Youtube from './Components/Youtube';
//import Music from './Components/music';
//import Games from './Components/games';
//import Anime from './Components/anime';
//import General from './Components/General';
import {
  Container,
  Col,
  Nav,
  Image,
  Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Music = lazy(() => import('./Components/music'));
const Games = lazy(() => import('./Components/games'));
const Anime = lazy(() => import('./Components/anime'));
const General = lazy(() => import('./Components/General'));

export default function App() {
  return (
    <Router>
      <div class = "container">
      <Nav className = "navbar navbar-expand-lg navbar-inverse navbar-full">
        <Nav.Link href = "/" style = {{
          color: "white",
          fontweight: "bold"
        }}>
        General
        </Nav.Link>
        <Nav.Link href = "/Music" style = {{
          color: "white",
          fontweight: "bold"
        }}>
        Music
        </Nav.Link>
        <Nav.Link href = "/Games" style = {{
          color: "white",
          fontweight: "bold"
        }}>
        Games
        </Nav.Link>
        <Nav.Link href = "/Anime" style = {{
          color: "white",
          fontweight: "bold"
        }}>
        Anime
        </Nav.Link>
      </Nav>
      <Suspense fallback = {<div className = "loading"> LOADING.... </div>}>

      <Switch>
        <div className = "content">
        <Route exact path = "/" component={General} />
        <Route exact path = "/Music" component={Music} />
        <Route exact path = "/Games" component={Games} />
        <Route exact path = "/Anime" component={Anime} />
        </div>
      </Switch>
      </Suspense>
      </div>
    </Router>
  );
    }