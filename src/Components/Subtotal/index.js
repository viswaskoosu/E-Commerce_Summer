import React from 'react';
import { useStateValue } from '../../Context/StateProvider';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
<<<<<<< HEAD
    const history = useHistory(); 
=======
    const navigate = useNavigate(); // Initialize useNavigate
>>>>>>> 6f1ad8ddd6b3b9a50724c1a5b85adfbe0cd7f4ef

    const placeOrder = () => {
        const order = {
          id: Date.now().toString(),
          date: new Date(),
          items: basket,
          total: basket.reduce((amount, item) => item.price * item.quantity + amount, 0),
        };
        // console.log(order.id);
    
        dispatch({
          type: 'ADD_ORDER',
          order: order,
        });
    
        dispatch({
          type: 'EMPTY_BASKET',
        });

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
