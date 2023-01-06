import React,{Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AppNavbar from './AppNavbar';


class ProductEdit extends Component {
    emptyItem = {
        name: '',
        price:'',
        details:'',
        final_date:''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        console.log(this.props);
        if (this.props.match.params.id !== 'new') {
            const product = await (await fetch(`/products/${this.props.match.params.id}`)).json();
            this.setState({item: product});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const details = target.details;
        const price = target.price;
        const final_date = target.final_date;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/products' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/products');
    }


    render() {
        const {item} = this.state;


        const title = <h2>{item.id ? 'Edit Product' : 'Add Product'}</h2>;

        return (<div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name}
                               onChange={this.handleChange} autoComplete="name"/>
                        <Label for="name">Details</Label>
                        <Input type="text" name="details" id="details" value={item.details}
                               onChange={this.handleChange} autoComplete="details"/>
                        <Label for="name">Price</Label>
                        <Input type="text" name="price" id="price" value={item.price}
                               onChange={this.handleChange} autoComplete="details"/>
                        <Label for="name">Date final for auctions</Label>
                        <Input type="text" name="final_date" id="final_date" value={item.final_date}
                               onChange={this.handleChange} autoComplete="final_dates"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>
                        <Button color="secondary" tag={Link} to="/">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>)
    }

}

export default withRouter(ProductEdit);