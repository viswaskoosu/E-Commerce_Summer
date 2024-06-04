import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import { useNavigate } from 'react-router-dom';
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const placeOrder = () => {
        const order = {
            id: Date.now().toString(),
            date: new Date(),
            items: basket,
            total: basket.reduce((amount, item) => item.price * item.quantity + amount, 0),
        };

        dispatch({
            type: 'ADD_ORDER',
            order: order,
        });

        dispatch({
            type: 'EMPTY_BASKET',
        });

        navigate('/payments');
    };

    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    };

    return (
        <div className='subtotal'>
            <p className='subtotal_text'>
                Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <button className='checkoutProduct_removeButton' onClick={placeOrder}>
                Proceed to checkout
            </button>
        </div>
    );
}

export default Subtotal;
