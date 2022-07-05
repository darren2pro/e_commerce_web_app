import React from 'react';
import { Button } from 'reactstrap';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeAllProductsFromCart } from '../redux/cart-products-slice';

const CheckoutForm = () => {
    const dispatch = useAppDispatch();
    const productsInCart = useAppSelector(
        (state) => state.productsInCart.products
    );
    const totalPrice = productsInCart.reduce(
        (accumulator, product) => accumulator + product.price,
        0
    );
    const [name, setName] = React.useState('');
    const [paymentMethodIsSelected, setPaymentMethodIsSelected] =
        React.useState(false);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!name) {
            alert('Name cannot be empty!');
            return;
        }
        if (!paymentMethodIsSelected) {
            alert('Payment method must be chosen!');
            return;
        }
        dispatch(removeAllProductsFromCart());
        const paymentMethodHtmlEle = document.querySelector('#checkout-form > div:nth-child(3) > fieldset');
        const paymentMethodRadioEle = paymentMethodHtmlEle?.getElementsByTagName('input') || [];
        // Un-check all radio inputs
        for (let i = 0; i < paymentMethodRadioEle.length; i++) {
            const radioChild = paymentMethodRadioEle[i];
            radioChild.checked = false;
        }
        // Un-check the checkbox
        const expressDeliveryCheckbox = document.querySelector('#express-delivery') as HTMLInputElement;
        if (expressDeliveryCheckbox) expressDeliveryCheckbox.checked = false;
        alert(
            `Cart checked out. $${totalPrice} will be billed to ${name}.`
        );
        setName('');
        setPaymentMethodIsSelected(false);
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <React.Fragment>
            <form id="checkout-form" onSubmit={handleSubmit}>
                <label htmlFor="name" className="label__lg">
                    {'Full Name'}
                </label>
                <input
                    type="text"
                    id="name"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleNameChange}
                />

                <div>
                    <fieldset
                        form="checkout-form"
                        onChange={() => setPaymentMethodIsSelected(true)}
                    >
                        <legend className="label__lg">
                            {'Payment Method'}
                        </legend>
                        <div>
                            <input
                                type="radio"
                                id="credit-card"
                                name="payment-method"
                                value="credit-card"
                            />
                            <label htmlFor="credit-card">{'Credit Card'}</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="paypal"
                                name="payment-method"
                                value="paypal"
                            />
                            <label htmlFor="paypal">{'PayPal'}</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="cash"
                                name="payment-method"
                                value="cash"
                            />
                            <label htmlFor="cash">{'Cash'}</label>
                        </div>
                    </fieldset>
                </div>

                <br />
                <div>
                    <input
                        type="checkbox"
                        id="express-delivery"
                        name="express-delivery"
                        value="express-delivery"
                    />
                    <label htmlFor="express-delivery">
                        {'Express Delivery'}
                    </label>
                </div>

                <br />
                <Button type="submit" color="success" className="btn">
                    {'Checkout'}
                </Button>
            </form>
        </React.Fragment>
    );
};

export default CheckoutForm;
