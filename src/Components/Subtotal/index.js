import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory(); // Initialize useHistory

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

        history.push('/payments');
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
