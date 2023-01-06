import React,{Component} from "react";
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { Nav, Form, FormControl } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';



export default class LogNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    handleClick = () => {
        localStorage.removeItem('jwt');
        window.location.href="/";
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        return (

            <Navbar color="dark" dark expand="md">

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/">Art</Dropdown.Item>
                        <Dropdown.Item href="#">Coins & Stamps</Dropdown.Item>
                        <Dropdown.Item href="#">Jewellery & Precious Stones</Dropdown.Item>
                        <Dropdown.Item href="#/">Interior & Decorations</Dropdown.Item>
                        <Dropdown.Item href="#/">Sports</Dropdown.Item>
                        <Dropdown.Item href="#/">Cars & Motorcycles</Dropdown.Item>
                        <Dropdown.Item href="#/">Watches</Dropdown.Item>
                        <Dropdown.Item href="#/">Books & Comics</Dropdown.Item>
                        <Dropdown.Item href="#/">Fashion</Dropdown.Item>
                        <Dropdown.Item href="#/">Music</Dropdown.Item>
                        <Dropdown.Item href="#/">Computers/Tablets & Networking</Dropdown.Item>
                        <Dropdown.Item href="#/">Consumer Electronics</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form className="form-center">
                    <FormControl type="text" placeholder="Search" className="" />
                </Form>
                <Nav className="ml-auto">
                    <Nav.Item ><Nav.Link className="colorWhite" href="/products/new">Sell</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="colorWhite" href="/">Help</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="colorWhite" href="/">Favorite</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="colorWhite" href="/login">Log out</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
        );
    }

}