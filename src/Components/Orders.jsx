import React from 'react';
import { useSelector } from 'react-redux';

export function Orders() {
  const orders = useSelector((state) => state.cart.orders); // Adjust the path as needed

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
        {orders.length > 0 ? (
          <ul className="space-y-4">
            {orders.map((order, index) => (
              <li key={index} className="border-b pb-4">
                <h2 className="text-xl font-semibold">{order.title}</h2>
                <p>Quantity: {order.quantity}</p>
                <p>Price: ${(order.price * order.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You have no orders yet.</p>
        )}
      </div>
    </div>
  );
}
