import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../redux/UserAccountSlice";
import {  deleteCart, increaseQuantity} from "../redux/UserAccountSlice"; // Assuming you have these actions
import { useNavigate } from "react-router-dom";

export function Cart() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user.userName);
  const cart = useSelector(selectCart);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const nav=useNavigate();
  const handleRemove = (id) => {
    dispatch(deleteCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(increaseQuantity({ id, quantity}));
  };

//   const handleCheckout = () => {
//     dispatch(checkout());
//     alert("Checkout successful!");
//   };

  return (
    <div className="container mx-auto mt-10 p-5">
      <h1 className="text-2xl font-bold mb-6">Welcome, {User}</h1>
      {cart.length > 0 ? (
        <>
          <div className="flex flex-col gap-6">
            {cart.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex items-center border-b border-gray-300 pb-4"
              >
                <img
                  src={cartItem.image}
                  alt={cartItem.title}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{cartItem.title}</h2>
                  <p className="text-gray-500">{cartItem.category}</p>
                  <p className="text-gray-700">Price: ${cartItem.price}</p>
                  <div className="mt-2 flex items-center">
                    <label className="mr-2">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={cartItem.quantity}
                      onChange={(e) =>
                        handleQuantityChange(cartItem.id, Number(e.target.value))
                      }
                      className="border border-gray-400 p-1 w-16 text-center"
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(cartItem.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold">Total Cost: ${totalCost.toFixed(2)}</h2>
            <button
            //   onClick={handleCheckout}
              className="bg-blue-500 text-white py-2 px-6 rounded mt-4"
              onClick={()=>{
                nav('/checkout')
              }}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-lg font-medium">Your cart is empty.</p>
      )}
    </div>
  );
}
