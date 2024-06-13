// PaymentMethod.js

import React from 'react';

const PaymentMethod = ({ method }) => {
  return (
    <div className="payment-method">
      {/* Display payment method details */}
      <p>Payment Method: {method.type}</p>
      <p>Card Number: {method.cardNumber}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PaymentMethod;
