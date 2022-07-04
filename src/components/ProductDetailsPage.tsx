import React from 'react';
import {Card, CardBody, CardHeader, Table} from "reactstrap";

export type ProductDetailsPageProps = {
    item: string;
    id: string;
    series: string;
    price: number;
    description: string;
};

const ProductDetailsPage = (props: ProductDetailsPageProps) => {
    const table = (
        <Table responsive className='table-striped table-sm'>
            <thead>

            </thead>
        </Table>
    );
    return (
        <div className={'product-details-page'}>
            <Card className='card'>
                <CardHeader className='align-items-center d-flex'>
                    <h4 className='card-title mb-0 flex-grow-1'>{props.item}</h4>
                </CardHeader>
                <CardBody className='p-0'>
                    {table}
                </CardBody>
            </Card>

        </div>
    );
};

export default ProductDetailsPage;
