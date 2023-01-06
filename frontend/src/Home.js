import './App.css'
import AppNavbar from './AppNavbar'
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import productList from "./ProductList";
import ProductEdit from "./ProductEdit";
import ProductList from "./ProductList";




function Home() {
       return(
        <body>
            <AppNavbar/>
            <section>
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
                <div className="section">
                    <div className="section2">

                        <div className="container"  >
                            <ProductList/>
                        </div>

                    </div>
                </div>

            </section>

        </body>
    );
}

export default Home;

