import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from '../../Context/StateProvider';
import Header from '../../Components/Header';
import LoadingPage from '../../Components/LoadingPage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postReq, displayError } from '../../getReq';
import { useNavigate } from 'react-router-dom';

function Payments() {
  const [{basket, products, user, userLoggedIn }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const totalAmount = 100;
  const existingPaymentMethods = user?.paymentMethods || [];
  const [currentAddress, setCurrentAddress] = useState(null);

  const handleAddNewCard = () => {
    window.location.href = '/new-card-form';
  };

  const currentAddressDetails = user?.addresses?.[user?.currentAddress];
  const getBasketTotal = (basket) =>
  basket?.reduce(
      (amount, item) =>
          amount +
          products.find((obj) => obj.id === item.id).price * item.quantity,
      0
  );
  const placeOrder = () => {
    if (!userLoggedIn) {
        toast.error('Please Login to place order!');
        return;
    }
    const order = {
        id: Date.now().toString(),
        date: new Date(),
        items: basket,
        total: getBasketTotal(basket),
        deliveryDate: Date.now(),
        deliveryStatus: -1,
    };
    const serverOrder = {
        basket: basket,
        orderAmount: getBasketTotal(basket),
    };
    // console.log(serverOrder.orderAmount)
    setIsLoading(true);
    postReq(setIsLoading, '/user/placeorder', serverOrder)
        .then((responseData) => {
            dispatch({
                type: 'ADD_ORDER',
                order: {...order, id: responseData.id},
            });
            dispatch({
                type: 'EMPTY_BASKET',
            });
            toast.success('Order Placed')
            navigate('/orderhistory')
        })
        .catch((error) => {
            displayError(error);
        });
};
  return (isLoading? <LoadingPage/>:
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
            <button>Change Shipping address</button>
          </a>
          <a className="address">
            <button onClick={placeOrder}>Place Order</button>
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
