import "./App.css";
import "./index.css";
import "./style.css";
import React from "react";
import ReactPlayer from "react-player";

import { Fragment } from "react";

import {
  Container,
  Button,
  Form,
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  controls,
} from "react-bootstrap";
import dress from "./dress.jpg";
import bag from "./bagg.webp";
import shoes from "./s1.jpg";

function App() {
  const categories = [
    {
      categoryName: "Dress",
      description: "Pink dress size M, 100$",
      image: dress,
    },
    {
      categoryName: "Bag",
      description: "Gold smal bag, 150$",
      image: bag,
    },
    {
      categoryName: "Shoes",
      description: "White shoes, 200$",
      image: shoes,
    },
  ];

  return (
    <Fragment>
      <Navbar collapseOnSelect bg="secondary">
        <div className="container-fluid">
          <img src="./shoplogo.png" width={50} height={50} alt="..."></img>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Nadia Store
          </Navbar.Brand>
          <Nav.Link href="#home" style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavDropdown title="Articles" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dress</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bag</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  accessories
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ color: "white" }}>
              Search
            </Button>
          </Form>
        </div>
      </Navbar>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">Welcome to Fashion Boutique</h1>

        <br />
      </div>

      <br />
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div className="container pt-4">
              <div className="row">
                {categories.map((category) => (
                  <div className="col-md-3 pb-3">
                    <div className="card">
                      <img
                        style={{ height: 200, objectFit: "cover" }}
                        src={category.image}
                        alt=""
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h3 className="text-primary">
                          {category.categoryName}
                        </h3>
                        <p className="card-text">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div class="col-sm-4" style={{ paddingTop: 30 }}>
            <ReactPlayer width="50" height="50" controls url="./myvideo.mp4" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
