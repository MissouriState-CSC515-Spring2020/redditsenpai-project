import React from 'react';
import './App.css';
// using ES6 modules
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//importing pictures sorry for the long list
import cat01 from './Photo/Cats01.jpeg';
import cat02 from './Photo/Cats02.jpeg';
import cat03 from './Photo/Cats03.jpeg';
import kitten01 from './Photo/kitten01.jpeg';
import kitten02 from './Photo/kitten02.jpeg';
import kitten03 from './Photo/Kitten03.jpeg';
import kitten04 from './Photo/Kitten04.jpeg';
import kitten05 from './Photo/Kitten05.jpeg';
import kitten06 from './Photo/kitten06.jpeg';
import kitten07 from './Photo/kitten07.jpeg';
import kitten08 from './Photo/kitten08.jpeg';
import kitten09 from './Photo/kitten09.jpg';
import oldCat01 from './Photo/Old01.jpeg';
import oldCat02 from './Photo/Old02.jpeg';
import oldCat03 from './Photo/Old03.jpeg';
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
        Gallery
        </Nav.Link>
        <Nav.Link href = "/Cats" style = {{
          color: "white",
          fontweight: "bold"
        }}>
        CATS!
        </Nav.Link>
        <Nav.Link href = "/Kitten" style = {{
          color: "white",
          fontweight: "bold"
        }}>
        KITTENS!
        </Nav.Link>
        <Nav.Link href = "/Old" style = {{
          color: "white",
          fontweight: "bold"
        }}>
        OLD CATS!
        </Nav.Link>
      </Nav>

      <Switch>
        <Route exact path = "/">
          <Gallery />
        </Route>
        <Route exact path = "/Cats">
          <Cats />
        </Route>
        <Route exact path = "/Kitten">
          <Kittens />
        </Route>
        <Route exact path = "/Old">
          <Old />
        </Route>
        <Route exact path = "/description">
          <Description />
        </Route>
      </Switch>
    </Router>
  );
    }
//first function lets pray that this works!
function Gallery(){
  return(
    (document.title = "Photo Gallery"),
    (
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={cat01} className='imgStyle' alt='Cat1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={cat02} className='imgStyle' alt='Cat2'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={cat03} className='imgStyle' alt='Cat1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          {/* this will start the kitten rampage*/}
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten01} className='imgStyle' alt='Kitten1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten02} className='imgStyle' alt='kitten2'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten03} className='imgStyle' alt='kitten1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten04} className='imgStyle' alt='kitten04'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten05} className='imgStyle' alt='kitten05'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten06} className='imgStyle' alt='Cat1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten07} className='imgStyle' alt='kitten07'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten08} className='imgStyle' alt='kitten08'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten09} className='imgStyle' alt='kitten09'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
            </Col>
            {/* Now its time for the old timers to come and attack */}
            <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={oldCat01} className='imgStyle' alt='old1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={oldCat02} className='imgStyle' alt='old2'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={oldCat03} className='imgStyle' alt='old03'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}
//Second function hope its better than the first
function Cats(){
  return(
    (document.title = "Cats!"),
    (
      <Container>
        <Row>
        <Col xs={12} md={6}>
            <a href="/description">
              <Image src={cat01} className='imgStyle' alt='Cat1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <a href="/description">
              <Image src={cat02} className='imgStyle' alt='Cat2'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <a href="/description">
              <Image src={cat03} className='imgStyle' alt='Cat1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}
//finding out that copy paste is my BFF
function Kittens(){
  return(
    (document.title = "Cats!"),
    (
      <Container>
        <Row>
        <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten01} className='imgStyle' alt='Kitten1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten02} className='imgStyle' alt='kitten2'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten03} className='imgStyle' alt='kitten1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten04} className='imgStyle' alt='kitten04'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten05} className='imgStyle' alt='kitten05'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten06} className='imgStyle' alt='Cat1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
            </Col>
            <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten07} className='imgStyle' alt='kitten07'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten08} className='imgStyle' alt='kitten08'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <a href="/description">
              <Image src={kitten09} className='imgStyle' alt='kitten09'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
            </Col>
        </Row>
      </Container>
    )
  );
}
//Second to last one
function Old(){
  return(
    (document.title = "Cats!"),
    (
      <Container>
        <Row>
        <Col xs={12} md={6}>
            <a href="/description">
              <Image src={oldCat01} className='imgStyle' alt='old1'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <a href="/description">
              <Image src={oldCat02} className='imgStyle' alt='old2'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <a href="/description">
              <Image src={oldCat03} className='imgStyle' alt='old3'
              style = {{
                width: "100%",
                height: "500px",
                paddingTop: "20px",
                paddingBottom: "20px"
              }}
              fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );
}
//send help....
function Description(){
  return(
    (document.title = "My favorite cat"),
    (
      <Container>
        <Row>
        <Col>
            <a href="/description">
              <Image src={kitten01} className='imgStyle' alt='Kitten1'
              style = {{
                width: "100%",
                height: "750px",
                paddingTop: "10px",
                paddingBottom: "10px"
              }}
              fluid
              />
            </a>
          </Col>
        </Row>
      </Container>
    )
  );

}