import React from 'react';
import './App.css';
// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//importing pictures sorry for the long list
import Youtube from './Components/Youtube';
import Music from './Components/music';
import Games from './Components/games';
import Anime from './Components/anime';
import General from './Components/General';
import {
  Container,
  Col,
  Nav,
  Image,
  Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
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

      <Switch>
        <Route exact path = "/">
          <General />
        </Route>
        <Route path = "/Music">
          <Music />
        </Route>
        <Route path = "/Games">
          <Games />
        </Route>
        <Route path = "/Anime">
          <Anime />
        </Route>
      </Switch>
    </Router>
  );
    }