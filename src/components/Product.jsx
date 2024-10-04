import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {add, remove} from "../redux/Slices/CartSlice";
const Product = ({post}) => {
  const dispatch = useDispatch();
  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to Cart");
  }
  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item removed from Cart"); 
  }
  const description = (post.description).split(" ").slice(0,10).join(" ");
  const cart = useSelector((state) => state.cart);

  return (
    <div className='group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5 rounded-xl'>
      <div>
        <p className='w-40 mt-1 text-lg font-semibold text-left text-gray-700 truncate'>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{`${description} ...`}</p>
      </div>
      <div className='h-[180px]'>
        <img src={`${post.image}`} className='object-contain w-full h-full'/>
      </div>
      <div className='flex items-center justify-between w-full mt-5'>
        <p className='font-semibold text-green-600'>$ {post.price}</p>
      
      {
        cart.some((p)=>p.id === post.id)?
        (<button className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={removeFromCart}>
        <p>Remove Item</p>
        </button>):
        (
          <button className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide' onClick={addToCart}>
        <p>Add to Cart</p>
        </button>
        )
      }

      </div>
    </div>
  );
};

export default Product;