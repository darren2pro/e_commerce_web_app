import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

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
        </div>
    );
};

export default ProductDetailsPage;
