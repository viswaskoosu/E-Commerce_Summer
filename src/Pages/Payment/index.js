import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../Context/StateProvider';
import './Payment.css';
import { getBasketTotal } from '../../reducer';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    // Simulate payment processing and order completion
    const orderId = Date.now().toString(); // Dummy order ID
    dispatch({
      type: 'COMPLETE_ORDER',
      order: {
        id: orderId,
        items: basket,
        amount: getBasketTotal(basket),
        user: user,
      },
    });
    dispatch({
      type: 'EMPTY_BASKET',
    });
    history.push('/orders');
  };

  return (
    <div className='payment'>
      <h2>Payment</h2>
      <div className='payment_section'>
        <h3>Select Payment Method</h3>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value=''>Choose...</option>
          <option value='card'>Credit/Debit Card</option>
          <option value='upi'>UPI</option>
          <option value='wallet'>Wallet</option>
        </select>
      </div>
      <button
        className='payment_button'
        onClick={handlePayment}
        disabled={!paymentMethod}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
