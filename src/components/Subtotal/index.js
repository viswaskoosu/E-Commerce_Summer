import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Context/StateProvider';

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

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Calculate the subtotal dynamically
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button onClick={placeOrder}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
