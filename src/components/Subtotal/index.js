import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

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
    };

    // Calculate the subtotal
    const getBasketTotal = (basket) => 
        basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);

    // Function to format currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(amount);
    };

    return (
        <div className='subtotal'>
            <p>
                Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <button onClick={placeOrder}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
