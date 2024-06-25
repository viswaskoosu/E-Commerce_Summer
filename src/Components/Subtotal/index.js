import React, { useState } from 'react';
import { useStateValue } from '../../Context/StateProvider';
import { useNavigate } from 'react-router-dom';
import './Subtotal.css';
import { postReq, displayError } from '../../getReq';
import LoadingPage from '../LoadingPage';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Subtotal() {
    const [{ basket, products, userLoggedIn }, dispatch] = useStateValue();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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
        setIsLoading(true);
        postReq(setIsLoading, '/user/checkout', serverOrder)
            .then(() => {
                dispatch({
                    type: 'ADD_ORDER',
                    order: order,
                });
                dispatch({
                    type: 'EMPTY_BASKET',
                });
                navigate('/payments', { totalAmount: getBasketTotal(basket) }); // Pass totalAmount to Payments component
            })
            .catch((error) => {
                displayError(error);
            });
    };

    const getBasketTotal = (basket) =>
        basket?.reduce(
            (amount, item) =>
                amount +
                products.find((obj) => obj.id === item.id).price * item.quantity,
            0
        );

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    };

    return isLoading ? <LoadingPage /> : (
        <div className='subtotal1'>
            <p className='subtotal_text'>
                Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
            </p>
            <button className='checkoutProduct_removeButton' onClick={placeOrder}>
                Proceed to checkout
            </button>
        </div>
    );
}

export default Subtotal;
