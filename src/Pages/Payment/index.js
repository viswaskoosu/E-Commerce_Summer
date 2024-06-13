import React from 'react';
import './Payment.css'; // Ensure to add your CSS for styling
import { useStateValue } from '../../Context/StateProvider';
import Header from '../../Components/Header';

function Payments() {
  const [{ user }] = useStateValue(); // Assuming user data is accessible through state
  const totalAmount = 100;
  const existingPaymentMethods = user.paymentMethods || []; // Assuming paymentMethods is an array in user data

  const handleAddNewCard = () => {
    window.location.href = '/new-card-form'; // Redirect to NewCardForm component using window.location.href
  };

  return (
    <>
      <Header />
      <div className="payments">
        <h2>Payments</h2>
        <div className="payments_methods">
          {existingPaymentMethods.length === 0 && (
            <div className="add_new_card">
              <button onClick={handleAddNewCard}>Add New Card</button>
            </div>
          )}
          {existingPaymentMethods.length > 0 && (
            <div className="existing_payment_methods">
              <h3>Existing Payment Methods:</h3>
              {/* Display existing payment methods */}
              <div className="add_new_card">
                <button onClick={handleAddNewCard}>Add New Card</button>
              </div>
            </div>
          )}
        </div>
        <div className="total_amount">
          <p>Total Amount: {totalAmount}</p> {/* Display the total amount here */}
        </div>
      </div>
    </>
  );
}

export default Payments;
