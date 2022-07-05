import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export type FullProductInformation = {
    item: string;
    id: string;
    series: string;
    price: number;
    description: string;
};

const ProductDetailsPage = (props: FullProductInformation) => {
    const info = (
        <div>
            <h4>From series: {props.series}</h4>
            <h4>Price: ${props.price}</h4>
            <h4>Description: {props.description}</h4>
        </div>
    );
    const backToHome = (
        <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/"
        >
            Back to catalogue
        </Button>
    );
    return (
        <div>
            <Card className="card">
                <CardHeader className="align-items-center d-flex">
                    <h3 className="card-title mb-0 flex-grow-1">
                        {props.item} Details Page
                    </h3>
                </CardHeader>
                <CardBody className="p-0">{info}</CardBody>
            </Card>
            {backToHome}
        </div>
    );
};

export default ProductDetailsPage;
