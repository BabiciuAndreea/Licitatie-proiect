import './App.css'
import AppNavbar from './AppNavbar'
import React from "react";
import ImageSlider from "./ImageSlider";
import Carousel from 'react-bootstrap/Carousel';
/*import ReactDOM from 'react-dom/client';
* import { withRouter } from 'react-router-dom';
* import {Link} from 'react-router-dom';
* import {Button, Container} from "reactstrap";
* import Raeact, {Component} from "react";*/



function Home() {
    return (
        <div>
            <AppNavbar/>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="art.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="fashion.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="interior.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="sport.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

        </div>

    );
}

export default Home;

