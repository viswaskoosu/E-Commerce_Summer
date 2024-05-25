import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../Context/StateProvider';
import './PaymentMethods.css';

// Dummy data for payment methods
const initialPaymentMethods = [
  { id: 1, type: 'Card', last4: '1234', expiration: '12/24', name: 'John Doe', logo: 'visa.png' },
  { id: 2, type: 'UPI', id: 'john.doe@upi', name: 'John Doe', logo: 'upi.png' }
];

const PaymentMethods = () => {
  const [{ user }, dispatch] = useStateValue();

  // State for managing payment methods
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
  const [newCard, setNewCard] = useState({ number: '', cvv: '', expiry: '', name: '' });
  const [newUpiId, setNewUpiId] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editedMethod, setEditedMethod] = useState(null);

  useEffect(() => {
    // Simulating fetching payment methods from user context or API
    // Replace with actual logic for fetching payment methods
    // dispatch({ type: 'FETCH_PAYMENT_METHODS' });
    // For now, setting initial payment methods
    setPaymentMethods(initialPaymentMethods);
  }, []);

  // Add a new card to payment methods
  const addCard = () => {
    // Validate new card details before adding
    if (newCard.number && newCard.cvv && newCard.expiry && newCard.name) {
      const newPaymentMethod = {
        id: Date.now(), // Generate unique ID
        type: 'Card',
        last4: newCard.number.slice(-4),
        expiration: newCard.expiry,
        name: newCard.name,
        logo: getCardLogo(newCard.number)
      };
      setPaymentMethods([...paymentMethods, newPaymentMethod]);
      setNewCard({ number: '', cvv: '', expiry: '', name: '' }); // Reset form
      setEditMode(false);
    } else {
      alert('Please fill all the card details.');
    }
  };

  // Add a new UPI ID to payment methods
  const addUpiId = () => {
    // Validate UPI ID before adding
    if (newUpiId) {
      const newPaymentMethod = {
        id: Date.now(), // Generate unique ID
        type: 'UPI',
        id: newUpiId,
        name: 'John Doe', // Example name for UPI ID
        logo: 'upi.png' // UPI logo
      };
      setPaymentMethods([...paymentMethods, newPaymentMethod]);
      setNewUpiId(''); // Reset form
      setEditMode(false);
    } else {
      alert('Please enter a valid UPI ID.');
    }
  };

  // Remove a payment method from the list
  const removePaymentMethod = (methodId) => {
    const updatedMethods = paymentMethods.filter(method => method.id !== methodId);
    setPaymentMethods(updatedMethods);
  };

  // Edit a payment method
  const editPaymentMethod = (method) => {
    setEditedMethod(method);
    setEditMode(true);
  };

  // Save edited payment method
  const saveEditedMethod = () => {
    // Logic to update the payment method in the list
    const updatedMethods = paymentMethods.map(method =>
      method.id === editedMethod.id ? editedMethod : method
    );
    setPaymentMethods(updatedMethods);
    setEditedMethod(null);
    setEditMode(false);
  };

  // Handle change in card number input
  const handleCardNumberChange = (event) => {
    const cardNumber = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (cardNumber.length >= 4) {
      const cardLogo = getCardLogo(cardNumber);
      setNewCard(prevState => ({ ...prevState, number: cardNumber }));
      setNewCard(prevState => ({ ...prevState, logo: cardLogo }));
    } else {
      setNewCard(prevState => ({ ...prevState, number: cardNumber }));
      setNewCard(prevState => ({ ...prevState, logo: '' }));
    }
  };

  // Get card logo based on card number
  const getCardLogo = (cardNumber) => {
    // Replace with actual logic to detect card type and fetch logo
    const visaRegex = /^4/;
    const mastercardRegex = /^5[1-5]/;
    const amexRegex = /^3[47]/;
    if (visaRegex.test(cardNumber)) {
      return 'visa.png';
    } else if (mastercardRegex.test(cardNumber)) {
      return 'mastercard.png';
    } else if (amexRegex.test(cardNumber)) {
      return 'amex.png';
    } else {
      return 'default-card.png'; // Default logo
    }
  };

  return (
    <div className="payment-methods">
      <h2>Welcome, {user.displayName}!</h2>
      <h3>Payment Methods</h3>

      {/* List of payment methods */}
      <div className="payment-list">
        {paymentMethods.map(method => (
          <div className="payment-item" key={method.id}>
            <div className="payment-details">
              <img className="card-logo" src={`/images/${method.logo}`} alt={method.type} />
              <div className="payment-info">
                {method.type === 'Card' ? (
                  <>
                    <p>{method.type} ending in {method.last4} (Expires {method.expiration})</p>
                    <p>{method.name}</p>
                  </>
                ) : (
                  <>
                    <p>{method.type}</p>
                    <p>{method.id}</p>
                  </>
                )}
              </div>
            </div>
            <div className="action-buttons">
              <button onClick={() => editPaymentMethod(method)}>Edit</button>
              <button onClick={() => removePaymentMethod(method.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit form for adding new card or UPI ID */}
      {editMode && (
        <div className="edit-form">
          {editedMethod?.type === 'Card' ? (
            <>
              <input
                type="text"
                placeholder="Card Number"
                value={newCard.number}
                onChange={handleCardNumberChange}
              />
              <img className="card-logo" src={`/images/${newCard.logo}`} alt="Card Logo" />
              <input
                type="text"
                placeholder="CVV"
                value={newCard.cvv}
                onChange={(e) => setNewCard({ ...newCard, cvv: e.target.value })}
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={newCard.expiry}
                onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
              />
              <input
                type="text"
                placeholder="Name on Card"
                value={newCard.name}
                onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
              />
              <button onClick={saveEditedMethod}>Save Card</button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={newUpiId}
                onChange={(e) => setNewUpiId(e.target.value)}
              />
              <button onClick={addUpiId}>Add UPI ID</button>
            </>
          )}
        </div>
      )}

      {/* Add new card or UPI ID buttons */}
      <div className="add-new">
        <button className="add-button" onClick={() => setEditMode(true)}>
          Add New Card
        </button>
        <button className="add-button" onClick={() => setEditMode(true)}>
          Add New UPI ID
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
