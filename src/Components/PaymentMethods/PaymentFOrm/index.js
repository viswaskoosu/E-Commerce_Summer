import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        return;
      }
  
      // Use elements.getElement to get a reference to the CardElement.
      const cardElement = elements.getElement(CardElement);
  
      // Create PaymentMethod using card details entered by the user.
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        console.error('Failed to create PaymentMethod', error);
      } else {
        console.log('PaymentMethod created:', paymentMethod);
        // Handle successful payment, e.g., submit payment method to server.
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Your payment form JSX here */}
        <CardElement />
        <button type="submit">Pay Now</button>
      </form>
    );
  }
  
  export default PaymentForm;
  