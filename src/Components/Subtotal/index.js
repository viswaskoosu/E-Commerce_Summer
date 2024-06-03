import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate(); // Initialize useNavigate
<<<<<<< HEAD

=======
>>>>>>> 281c1a8bc6406933bd39a5d6f96a1cb6f5bf28b2
    const placeOrder = () => {
        const order = {
            id: Date.now().toString(),
            date: new Date(),
            items: basket,
            total: basket.reduce((amount, item) => item.price * item.quantity + amount, 0),
        };

        // Dispatch action to add order
        dispatch({
            type: 'ADD_ORDER',
            order: order, // Correctly setting the order in the action
        });

        // Dispatch action to empty the basket
        dispatch({
            type: 'EMPTY_BASKET',
        });

        // Navigate to payments page
        navigate('/payments');
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
