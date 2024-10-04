import Spinner from '../components/Spinner';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProductData() {
    setLoading(true);
    try{
      const response = await axios.get(API_URL);
      const data = response.data;
      setPosts(data);
    } 
    catch(error){
      console.error('Error fetching product data:', error); 
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])
  return (
    <div >
      {
        loading ?( 
        <div className='flex items-center justify-center w-full h-screen'>
          <Spinner />
        </div> ):
        posts.length > 0 ?
        (<div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2'>
          {posts.map( (post) => (
            <Product key= {post.id} post = {post}/>
          ))} 
        </div>):
        <div>
          <p>No Data Found</p>  
        </div>}
    </div>
  );
};

export default Home;