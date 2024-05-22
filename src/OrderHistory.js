import React from 'react';
import { useStateValue } from './StateProvider';
import './OrderHistory.css';

function OrderHistory() {
  const [{ orders }] = useStateValue();

  return (
    <div className="orderHistory">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={order.id} className="orderHistory_order">
            <h3>Order {index + 1}</h3>
            <p>Date: {new Date(order.date).toLocaleString()}</p>
            <p>Total: ₹{order.total.toFixed(2)}</p>
            {order.items.map(item => (
              <div key={item.id} className="orderHistory_item">
                <img src={item.image} alt={item.title} />
                <div className="orderHistory_info">
                  <p>{item.title}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;
