import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../redux/UserAccountSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { useEffect } from 'react';

export function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const totalCost=useSelector((state)=>state.cart.totalCost) // Replace with your cart slice path
  const user = useSelector((state) => state.user); // Replace with your user slice path
  // const orders=useSelector((state)=> state.cart.orders)
  const dispatch=useDispatch();
  const navigate=useNavigate();
//   useEffect(() => {
//     console.log(orders); // Log orders whenever they change
//   }, [orders]); // Dependency array includes orders

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle checkout logic here, such as sending data to an API
    console.log('Checkout submitted');
    cart.forEach(item => {
        dispatch(addOrder(item)); // Dispatching each cart item
      });
      navigate('/mainmenu');
      toast.success("Order Successfully Placed.")
    //   await console.log(orders);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <ul className="mb-6 flex flex-col">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>{item.title} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
          <li className="flex justify-between" >
            <span>Total Amount To Be Paid :</span>
            <span>{totalCost}</span>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={user.userName}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Phone</label>
            <input
              type="tel"
              value={user.phone}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="flex items-center mt-2">
              <input type="radio" name="payment" id="cod" value="cod" defaultChecked />
              <label htmlFor="cod" className="ml-2">Cash on Delivery</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="radio" name="payment" id="credit" value="credit" disabled />
              <label htmlFor="credit" className="ml-2 text-gray-400">Credit Card (Disabled)</label>
            </div>
            <div className="flex items-center mt-2">
              <input type="radio" name="payment" id="paypal" value="paypal" disabled />
              <label htmlFor="paypal" className="ml-2 text-gray-400">PayPal (Disabled)</label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            Complete Checkout
          </button>
        </form>
      </div>
    </div>
  );
}
