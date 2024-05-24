import React from 'react';
import { useStateValue } from '../../Context/StateProvider';

function PaymentMethods() {
  const [{ user }] = useStateValue(); // Corrected invocation of useStateValue

  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      <h3>Payment Methods</h3>
      {user.paymentMethods && user.paymentMethods.length > 0 ? (
        <ul>
          {user.paymentMethods.map((method) => (
            <li key={method.id}>
              {method.type} ending in {method.last4} (Expires {method.expiration})
            </li>
          ))}
        </ul>
      ) : (
        <p>No payment methods saved.</p>
      )}
    </div>
  );
}

export default PaymentMethods;
