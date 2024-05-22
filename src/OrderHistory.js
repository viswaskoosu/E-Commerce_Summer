import React from 'react';
import { useStateValue } from './StateProvider';
import './OrderHistory.css';

function OrderHistory() {
  const [{ orders }] = useStateValue();

  return (
    <div className='orderHistory'>
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className='orderHistory_order'>
            <h2>Order ID: {order.id}</h2>
            <p>Date: {new Date(order.date).toLocaleString()}</p>
            <p>Total: ₹{order.total}</p>
            <div className='orderHistory_items'>
              {order.items.map(item => (
                <div key={item.id} className='orderHistory_item'>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <p>₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;
