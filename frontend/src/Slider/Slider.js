import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import ImageSlider from "./ImageSlider";

function IndividualIntervalsExample() {
    return (
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
    );
}

export default IndividualIntervalsExample;