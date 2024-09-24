import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, increaseQuantity, decreaseQuantity } from '../redux/UserAccountSlice.js';
import { selectCart, isProductInCart } from '../redux/UserAccountSlice.js'; 
export const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart); // Get the cart from Redux state
  const productInCart = isProductInCart(cart, product.id); // Check if product is in the cart

  const handleAddToCart = () => {
    dispatch(addCart({ ...product, quantity: 1, price: product.price })); // Add product with quantity 1
  };
  const id=product.id
  const quantity=1;
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity({id,quantity}));
    console.log(cart)
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.id));
  };

  return (
    <div className="product-card ">
   
      {productInCart ? (
        <div className="flex items-center">
          <button onClick={handleDecreaseQuantity} className="bg-blue-500 px-2 mx-1 rounded-md text-white">-</button>
          <span className='bg-slate-400 px-2 rounded-md mx-1'>{cart.find(item => item.id === product.id)?.quantity}</span>
          <button onClick={handleIncreaseQuantity} className="bg-blue-500 px-2 mx-1 rounded-md text-white">+</button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className="bg-blue-500 px-4 rounded-md py-1 text-white">Add to Cart</button>
      )}
    </div>
  );
};

// export default ProductComponent;
