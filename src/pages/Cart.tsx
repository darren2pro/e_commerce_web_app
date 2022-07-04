import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { FullProductInformation } from './ProductDetailsPage';
import {
    Button as BootstrapButton,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Row,
    Table,
} from 'reactstrap';

import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

const Cart = () => {
    const [updateCartList, setUpdateCartList] = React.useState(false);
    const productsInCart = useAppSelector(
        (state) => state.productsInCart.products
    );
    function handleRemoveFromCart(product: FullProductInformation) {
        // TODO: Implement this
        console.log('Removing this item from cart: ', product);
        setUpdateCartList(!updateCartList);
    }

    const cartProductHeader = (
        <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Remove from cart</th>
        </tr>
    );
    const cartProductRows = productsInCart.map(
        (product: FullProductInformation, index) => {
            return (
                <tr key={product.id}>
                    <td>{product.item}</td>
                    <td>${product.price}</td>
                    <td>
                        <BootstrapButton
                            className={'btn btn-danger'}
                            onClick={() => handleRemoveFromCart(product)}
                        >
                            Remove
                        </BootstrapButton>
                    </td>
                </tr>
            );
        }
    );
    const totalPrice = productsInCart.reduce(
        (accumulator, product) => accumulator + product.price,
        0
    );
    const displayTotalPrice = (
        <div className={'text-left'}>
            <h4>Total: ${totalPrice}</h4>
        </div>
    );

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col xl={12}>
                        <Card className="card align-items-center">
                            <CardHeader className="d-flex">
                                <h3 className="card-title mb-0 flex-grow-1 text-uppercase text-primary">
                                    Cart
                                </h3>
                            </CardHeader>
                            <CardBody className="p-0">
                                <Table responsive className="table-striped">
                                    <thead>{cartProductHeader}</thead>
                                    <tbody>{cartProductRows}</tbody>
                                </Table>
                                {displayTotalPrice}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Button variant="outlined" color="secondary" component={Link} to="/">Back to catalogue</Button>
            </Container>
        </React.Fragment>
    );
};

export default Cart;
