import React, { useState } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './NewCardForm.css'; // Import CSS file
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewCardForm = ({ onSubmit }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: null, // Use null for DatePicker selected value
    cvv: '',
    cardHolderName: '',
    postalCode: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateCardDetails(cardDetails)) {
      onSubmit(cardDetails);
      setCardDetails({
        cardNumber: '',
        expiryDate: null,
        cvv: '',
        cardHolderName: '',
        postalCode: '',
      });
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Replace non-digit characters
    setCardDetails({ ...cardDetails, cardNumber: value });
  };

  const handleCVVChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 4); // Replace non-digit characters and limit to 4 digits
    setCardDetails({ ...cardDetails, cvv: value });
  };

  const handleExpiryDateChange = (date) => {
    if (date) {
      const formattedDate = date.toLocaleDateString('en-US', {
        month: '2-digit',
        year: '2-digit',
      }).replace(/\//g, '/');
      setCardDetails({ ...cardDetails, expiryDate: formattedDate });
    } else {
      setCardDetails({ ...cardDetails, expiryDate: null });
    }
  };

  const validateCardDetails = (cardDetails) => {
    const currentDate = new Date();
    const [currentYear, currentMonth] = [
      currentDate.getFullYear(),
      currentDate.getMonth() + 1, // JavaScript months are zero-based
    ];
    if (cardDetails.expiryDate) {
      const [inputMonth, inputYear] = cardDetails.expiryDate.split('/').map(Number); // Split and parse MM/YY format
      const expiryDate = new Date(`20${inputYear}`, inputMonth - 1); // Create Date object for validation
      return (
        cardDetails.cardNumber !== '' &&
        cardDetails.cardNumber.length === 16 && // Assuming card number should be 16 digits
        /^\d{2}\/\d{2}$/.test(cardDetails.expiryDate) && // Validate MM/YY format for expiry date
        expiryDate > currentDate && // Ensure expiry date is not earlier than current date
        cardDetails.cvv !== '' &&
        cardDetails.cvv.length >= 3 && // Assuming CVV should be at least 3 digits
        cardDetails.cvv.length <= 4 &&
        cardDetails.cardHolderName !== '' &&
        cardDetails.postalCode !== ''
      );
    }
    return false;
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="inputContainer">
            <label htmlFor="cardNumber" className="label">
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              className="inputField"
              placeholder="Enter card number"
              value={cardDetails.cardNumber}
              onChange={handleCardNumberChange}
              maxLength={16} // Limit to 16 characters
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="expiryDate" className="label">
              Expiry Date:
            </label>
            <DatePicker
              selected={cardDetails.expiryDate ? new Date(`20${cardDetails.expiryDate.slice(3, 5)}`, cardDetails.expiryDate.slice(0, 2) - 1) : null} // Parse MM/YY format back to Date object
              onChange={handleExpiryDateChange}
              dateFormat="MM/yy"
              showMonthYearPicker
              placeholderText="MM/YY"
              className="inputField expiryField"
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="cvv" className="label">
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              className="inputField"
              placeholder="CVV"
              value={cardDetails.cvv}
              onChange={handleCVVChange}
              maxLength={4}
              required
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="cardHolderName" className="label">
              Cardholder Name:
            </label>
            <input
              type="text"
              id="cardHolderName"
              className="inputField"
              placeholder="Cardholder name"
              value={cardDetails.cardHolderName}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardHolderName: e.target.value })
              }
              required
            />
          </div>

          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NewCardForm;
