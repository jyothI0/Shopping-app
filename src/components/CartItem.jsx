import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {add, remove} from "../redux/Slices/CartSlice";
const CartItem = ({item , itemIndex}) => {
  const dispatch = useDispatch();
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error('Item removed from cart');
  }
  const description = (item.description).split(" ").slice(0,10).join(" ");
  return (
    <div className='flex items-center justify-between p-2 mt-2 mb-2 border-b-2 md:p-5 border-slate-500 md:mx-5'>
      <div className='flex flex-col items-center gap-5 p-0 md:flex-row md:p-3'>
      <div className='w-[30%]'>
        <img className='object-cover' src={item.image}/>
      </div>
      <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
        <h1 className='text-xl font-semibold text-slate-700'>{item.title}</h1>
        <h1 className='text-base font-medium text-slate-700'>{description}...</h1>
        <div className='flex items-center justify-between'>
          <p className='text-lg font-bold text-green-600'>{item.price}</p>
          <button className='p-3 mr-3 transition-transform duration-300 bg-red-200 rounded-full cursor-pointer group hover:bg-red-400' onClick={removeFromCart}><MdDelete /></button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default CartItem;