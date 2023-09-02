import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Post from '../Post/Post';

import ('./Body.css')

const Body = () => {
    const [post , setPost] = useState([]);

useEffect(()=>{
    fetch('posts.json')
    .then(res => res.json())
    .then(data => setPost(data))
},[])

const henlear = (post) =>{
   console.log(post)
}
    return (
        <div>
            <div className='contaner-all'>
                <div className='continer-post'>
                      {
                        post.map(product => <Post
                           product ={product}
                           key={product.id}
                           henlear={henlear}
                        ></Post>)
                      }

                </div>
                <div className='continer-buckmer'>
                 <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Body;