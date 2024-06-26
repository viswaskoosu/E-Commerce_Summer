import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from '../../Context/StateProvider';
import Header from '../../Components/Header';

function Payments() {
  const [{ user }] = useStateValue();
  const totalAmount = 100;
  const existingPaymentMethods = user?.paymentMethods || [];
  const [currentAddress, setCurrentAddress] = useState(null);

  const handleAddNewCard = () => {
    window.location.href = '/new-card-form';
  };

  const currentAddressDetails = user?.addresses?.[user?.currentAddress];

  return (
    <>
      <Header />
      <div className="payments">
        <h2>Payments</h2>
        <div>
          <h4>Shipping Address is Default Address</h4>
          {currentAddressDetails && (
            <div>
              <p>Name: {currentAddressDetails.name}</p>
              <p>Street: {currentAddressDetails.street}</p>
              <p>City: {currentAddressDetails.city}</p>
              <p>State: {currentAddressDetails.state}</p>
              <p>Zip: {currentAddressDetails.zip}</p>
              <p>Country: {currentAddressDetails.country}</p>
            </div>
          )}
          <a href="/addresses" className="address">
            <button>Change Shipping address form here setting address default address</button>
          </a>
        </div>
        {/* <div className="payment_methods">
          {existingPaymentMethods.length === 0 ? (
            <div className="add_new_card">
              <button onClick={handleAddNewCard}>Add New Card</button>
            </div>
          ) : (
            <div className="existing_payment_methods">
              <h3>Existing Payment Methods:</h3>
              <div className="add_new_card">
                <button onClick={handleAddNewCard}>Add New Card</button>
              </div>
            </div>
          )}
        </div> */}
        <div className="total_amount">
          <p>Total Amount: {totalAmount}</p>
        </div>
      </div>
    </>
  );
}

export default Payments;
