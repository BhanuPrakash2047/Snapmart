  // Import the file where you added Tailwind C
  import { Link } from 'react-router-dom';
import './input.css';  // Import the file where you added Tailwind CSS
import cart1 from "../assets/icons8-basket-48.png";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/UserAccountSlice';

function Header(){
    const [isVisble,setIsVisible]=useState(false);
    const cart=useSelector(selectCart);
    const len=cart.length;
    return(
        <>
           <div className="bg-phonepePurple px-2 py-4 flex flex-row justify-between ">
            <Link to="/mainmenu" ><h1 className="font-semibold text-3xl text-white">Snap<snap className="text-red-600 font-semibold text-3xl">Mart</snap></h1></Link>
            <section className="hidden md:flex flex-row  ">
               <Link to="/Orders" className="flex text-white px-4 text-nowrap items-center transition-colors ease-in-out duration-300 delay-100 hover:bg-purple-950 rounded-lg hover:text-white hover:shadow-xl" >Your Orders</Link>
               <Link to="/checkout" className="flex text-white px-4 text-nowrap items-center transition-colors ease-in-out duration-300 delay-100 hover:bg-purple-950 rounded-lg hover:text-white hover:shadow-xl">Checkout</Link>
               <Link to="/contactus" className="flex text-white px-4 text-nowrap items-center transition-colors ease-in-out duration-300 delay-100 hover:bg-purple-950 rounded-lg hover:text-white hover:shadow-xl">Contact Us</Link>
               <div className='relative'>
               <Link to="/cart"><img src={cart1} alt="cart" placeholder="cart" className='flex px-8 shrink-0 items-center shadow-lg'></img></Link>
               {len>0 && <div className='absolute top-0 right-7 bg-orange-600 rounded-full px-2 text-white'>{len}</div>}
               </div>
            </section>
            <FontAwesomeIcon icon={faBars} className='md:hidden text-4xl' onClick={()=>setIsVisible(!isVisble)}/>
           </div>
           {isVisble && <section className="flex flex-col md:hidden bg-phonepePurple border-t-4 py-4 border-b-4 border-b-black">
            <Link to="/Orders" className="flex py-3 text-white px-4 text-nowrap items-center transition-colors ease-in-out duration-300 delay-100 hover:bg-purple-950 rounded-lg hover:text-white hover:shadow-xl" >Your Orders</Link>
            <Link to="/checkout" className="flex py-3 text-white px-4 text-nowrap items-center transition-colors ease-in-out duration-300 delay-100 hover:bg-purple-950 rounded-lg hover:text-white hover:shadow-xl">Checkout</Link>
            <Link to="/contactus" className="flex py-3 text-white px-4 text-nowrap items-center transition-colors ease-in-out duration-300 delay-100 hover:bg-purple-950 rounded-lg hover:text-white hover:shadow-xl">Contact Us</Link>
            <Link to="/cart"  className='flex py-3 text-white px-4 text-nowrap items-center transition-colors ease-in-out duration-300 delay-100 hover:bg-purple-950 rounded-lg hover:text-white hover:shadow-xl'>Cart</Link>
            </section>}
           </>
    );
}
export default Header;