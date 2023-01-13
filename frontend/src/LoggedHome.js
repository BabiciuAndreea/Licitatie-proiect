import {Component} from "react";
import './App.css'
import "./ProductEdit";
import Carousel from 'react-bootstrap/Carousel';
import ProductList from "./ProductList";
import SimpleNavbar from "./SimpleNavbar";


class LoggedHome extends Component {


    render() {
        return (<body>

            <SimpleNavbar/>

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

                        <div className="container">
                            <ProductList/>
                        </div>

                    </div>
                </div>

            </section>

            </body>
        );
    }
}
    export default LoggedHome;